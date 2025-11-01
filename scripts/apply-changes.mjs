import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const changesDir = path.join(rootDir, 'changes');
const registryPath = path.join(changesDir, 'registry.json');

function nowStamp() {
  const d = new Date();
  return d.toISOString().replace(/[:.]/g, '-');
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function backupFile(destRoot, relPath) {
  const srcPath = path.join(rootDir, relPath);
  const destPath = path.join(destRoot, relPath);
  await ensureDir(path.dirname(destPath));
  try {
    const content = await fs.readFile(srcPath);
    await fs.writeFile(destPath, content);
  } catch (e) {
    // File may not exist (addFile op), ignore
  }
}

async function readJson(p) {
  const data = await fs.readFile(p, 'utf8');
  return JSON.parse(data);
}

async function writeJson(p, obj) {
  await ensureDir(path.dirname(p));
  await fs.writeFile(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

function setByPath(obj, dotPath, value) {
  const parts = dotPath.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (!(key in cur) || typeof cur[key] !== 'object') cur[key] = {};
    cur = cur[key];
  }
  cur[parts[parts.length - 1]] = value;
}

async function applyOperation(op, backupsRoot) {
  switch (op.type) {
    case 'replace': {
      const filePath = path.join(rootDir, op.file);
      await backupFile(backupsRoot, op.file);
      const content = await fs.readFile(filePath, 'utf8');
      let newContent;
      if (op.regex) {
        const re = new RegExp(op.search, op.flags || 'g');
        newContent = content.replace(re, op.replace);
      } else {
        newContent = content.split(op.search).join(op.replace);
      }
      await fs.writeFile(filePath, newContent, 'utf8');
      return { file: op.file, action: 'replace' };
    }
    case 'append': {
      const filePath = path.join(rootDir, op.file);
      await backupFile(backupsRoot, op.file);
      await fs.appendFile(filePath, op.content, 'utf8');
      return { file: op.file, action: 'append' };
    }
    case 'prepend': {
      const filePath = path.join(rootDir, op.file);
      await backupFile(backupsRoot, op.file);
      const content = await fs.readFile(filePath, 'utf8');
      await fs.writeFile(filePath, op.content + content, 'utf8');
      return { file: op.file, action: 'prepend' };
    }
    case 'addFile': {
      const filePath = path.join(rootDir, op.file);
      await ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, op.content || '', 'utf8');
      return { file: op.file, action: 'addFile' };
    }
    case 'deleteFile': {
      const filePath = path.join(rootDir, op.file);
      await backupFile(backupsRoot, op.file);
      await fs.rm(filePath, { force: true });
      return { file: op.file, action: 'deleteFile' };
    }
    case 'updateJson': {
      const filePath = path.join(rootDir, op.file);
      await backupFile(backupsRoot, op.file);
      const obj = await readJson(filePath);
      setByPath(obj, op.jsonPath, op.value);
      await writeJson(filePath, obj);
      return { file: op.file, action: 'updateJson' };
    }
    case 'copyFile': {
      const fromPath = path.join(rootDir, op.from);
      const toPath = path.join(rootDir, op.to);
      await backupFile(backupsRoot, op.to);
      await ensureDir(path.dirname(toPath));
      const buf = await fs.readFile(fromPath);
      await fs.writeFile(toPath, buf);
      return { file: op.to, action: 'copyFile' };
    }
    default:
      throw new Error(`Unsupported operation type: ${op.type}`);
  }
}

async function main() {
  const registry = await readJson(registryPath);
  const approved = registry.changes.filter(c => c.status === 'approved');
  if (approved.length === 0) {
    console.log('No approved changes to apply.');
    return;
  }

  const runStamp = nowStamp();
  const backupsRoot = path.join(changesDir, 'backups', runStamp);
  await ensureDir(backupsRoot);

  const run = { id: runStamp, applied: [], errors: [] };

  for (const change of approved) {
    try {
      for (const op of change.operations || []) {
        const res = await applyOperation(op, backupsRoot);
        run.applied.push({ changeId: change.id, ...res });
      }
      change.status = 'applied';
    } catch (e) {
      console.error(`Error applying change ${change.id}:`, e.message);
      run.errors.push({ changeId: change.id, error: e.message });
    }
  }

  registry.runs.push(run);
  await writeJson(registryPath, registry);
  await writeJson(path.join(changesDir, 'status.json'), run);
  console.log(`Applied ${run.applied.length} operations. Backups at: changes/backups/${runStamp}`);
  if (run.errors.length) {
    console.log('Some changes had errors. See changes/status.json for details.');
    process.exitCode = 1;
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});