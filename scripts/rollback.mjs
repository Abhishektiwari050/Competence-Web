import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const backupsDir = path.join(rootDir, 'changes', 'backups');
const registryPath = path.join(rootDir, 'changes', 'registry.json');

async function readJson(p) { return JSON.parse(await fs.readFile(p, 'utf8')); }
async function writeJson(p, obj) { await fs.writeFile(p, JSON.stringify(obj, null, 2) + '\n', 'utf8'); }

async function listDirs(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return entries.filter(e => e.isDirectory()).map(e => e.name);
  } catch {
    return [];
  }
}

async function restoreBackup(backupName) {
  const base = path.join(backupsDir, backupName);
  const walk = async (p) => {
    const entries = await fs.readdir(p, { withFileTypes: true });
    for (const e of entries) {
      const cur = path.join(p, e.name);
      const rel = path.relative(base, cur);
      const dest = path.join(rootDir, rel);
      if (e.isDirectory()) await walk(cur);
      else {
        await fs.mkdir(path.dirname(dest), { recursive: true });
        const buf = await fs.readFile(cur);
        await fs.writeFile(dest, buf);
      }
    }
  };
  await walk(base);
}

async function main() {
  const dirs = await listDirs(backupsDir);
  if (!dirs.length) {
    console.log('No backups found to rollback.');
    return;
  }
  dirs.sort();
  const latest = dirs[dirs.length - 1];
  await restoreBackup(latest);
  const registry = await readJson(registryPath);
  for (const c of registry.changes) {
    if (c.status === 'applied') c.status = 'rolled_back';
  }
  await writeJson(registryPath, registry);
  console.log(`Rolled back files from backup: ${latest}`);
}

main().catch(err => { console.error(err); process.exit(1); });