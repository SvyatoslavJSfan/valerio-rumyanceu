import fs from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const backupDir = path.resolve('../images-backup-optimized');

const supportedExtensions = new Set(['.jpg', '.jpeg']);

async function findImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath));
    } else if (
      entry.isFile() &&
      supportedExtensions.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const files = await findImages(imagesDir);

  if (files.length === 0) {
    console.log('JPEG-файлы не найдены.');
    return;
  }

  // Сохраняем оригиналы вне public до изменения файлов.
  for (const file of files) {
    const relativePath = path.relative(imagesDir, file);
    const backupPath = path.join(backupDir, relativePath);

    await fs.mkdir(path.dirname(backupPath), { recursive: true });

    try {
      await fs.access(backupPath);
    } catch {
      await fs.copyFile(file, backupPath, constants.COPYFILE_EXCL);
    }
  }

  
  for (const file of files) {
    const relativePath = path.relative(imagesDir, file);
    const backupPath = path.join(backupDir, relativePath);

    // Если оригинал уже сохранён в резервной папке,
    // значит, фотография уже обрабатывалась.
    try {
      await fs.access(backupPath);
      console.log(`Пропуск (уже обработан): ${relativePath}`);
      continue;
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    const before = (await fs.stat(file)).size;

    const image = sharp(file, { failOn: 'error' });

    await image
      .rotate()
      .resize({
        width: 2000,
        height: 2000,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 82,
        mozjpeg: true,
      })
      .toFile(`${file}.optimized`);

    await fs.rename(`${file}.optimized`, file);

    const after = (await fs.stat(file)).size;
    const saved = before > 0
      ? ((before - after) / before * 100).toFixed(1)
      : '0';

    console.log(
      `${relativePath}: ` +
      `${(before / 1024 / 1024).toFixed(2)} → ` +
      `${(after / 1024 / 1024).toFixed(2)} МБ ` +
      `(экономия ${saved}%)`
    );
  }


  console.log(`\nОбработано файлов: ${files.length}`);
  console.log(`Резервная копия: ${backupDir}`);
}

main().catch((error) => {
  console.error('Ошибка оптимизации:', error);
  process.exitCode = 1;
});
