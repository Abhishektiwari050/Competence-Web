import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const registryPath = path.join(rootDir, 'changes', 'registry.json');
const statusPath = path.join(rootDir, 'changes', 'status.json');

async function readJson(p) { return JSON.parse(await fs.readFile(p, 'utf8')); }

async function verifyOperation(op) {
  switch (op.type) {
    case 'replace': {
      const filePath = path.join(rootDir, op.file);
      const content = await fs.readFile(filePath, 'utf8');
      const ok = op.regex
        ? new RegExp(op.replace).test(content)
        : content.includes(op.replace);
      return ok ? null : `replace not found in ${op.file}`;
    }
    case 'append': {
      const filePath = path.join(rootDir, op.file);
      const content = await fs.readFile(filePath, 'utf8');
      return content.includes(op.content) ? null : `append missing in ${op.file}`;
    }
    case 'prepend': {
      const filePath = path.join(rootDir, op.file);
      const content = await fs.readFile(filePath, 'utf8');
      return content.startsWith(op.content) ? null : `prepend missing in ${op.file}`;
    }
    case 'addFile': {
      const filePath = path.join(rootDir, op.file);
      try { await fs.access(filePath); return null; } catch { return `file not added: ${op.file}`; }
    }
    case 'deleteFile': {
      const filePath = path.join(rootDir, op.file);
      try { await fs.access(filePath); return `file not deleted: ${op.file}`; } catch { return null; }
    }
    case 'updateJson': {
      const filePath = path.join(rootDir, op.file);
      const obj = JSON.parse(await fs.readFile(filePath, 'utf8'));
      const parts = op.jsonPath.split('.');
      let cur = obj;
      for (const k of parts) { cur = cur?.[k]; }
      return cur === undefined ? `json path missing in ${op.file}` : null;
    }
    case 'copyFile': {
      const toPath = path.join(rootDir, op.to);
      try { await fs.access(toPath); return null; } catch { return `copy target missing: ${op.to}`; }
    }
    default:
      return `unsupported op type: ${op.type}`;
  }
}

async function main() {
  const registry = await readJson(registryPath);
  const applied = registry.changes.filter(c => c.status === 'applied');
  const report = { verified: [], issues: [] };
  for (const change of applied) {
    for (const op of change.operations || []) {
      const issue = await verifyOperation(op);
      if (issue) report.issues.push({ changeId: change.id, issue });
      else report.verified.push({ changeId: change.id, file: op.file, type: op.type });
    }
  }
  await fs.writeFile(statusPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(`Verified ${report.verified.length} operations. Issues: ${report.issues.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });