import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const imagesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/images');

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await listImages(full)));
    } else if (/\.(png|jpe?g)$/i.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

for (const file of await listImages(imagesDir)) {
  const info = await stat(file);
  const img = sharp(file);
  const meta = await img.metadata();

  const longSide = Math.max(meta.width || 0, meta.height || 0);
  let resize = null;
  if (longSide > 1600) {
    resize = longSide === meta.width ? { width: 1600 } : { height: 1600 };
  }

  let out = img;
  if (resize) out = out.resize(resize);

  const ext = path.extname(file);
  const outFile = file.slice(0, -ext.length) + '.webp';
  await out.webp({ quality: 80, effort: 4 }).toFile(outFile);
  await import('node:fs/promises').then((fs) => fs.rm(file));

  const outInfo = await stat(outFile);
  console.log(
    `${path.basename(file)} -> ${path.basename(outFile)}  ${(info.size / 1024).toFixed(0)}KB -> ${(outInfo.size / 1024).toFixed(0)}KB`
  );
}
