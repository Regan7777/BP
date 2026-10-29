const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

const sourceDir = path.join(process.cwd(), 'public', 'images', 'airports');
const files = [
  'shenxing-logo.png',
  'dalaoyun-logo.png',
  'liulianyun-logo.png',
  'yunjiexian-logo.png',
  'shandianshu-logo.png',
  'huanqiuti-logo.png'
];

async function main() {
  for (const file of files) {
    const source = path.join(sourceDir, file);
    const target = path.join(sourceDir, file.replace(/\.png$/i, '.webp'));
    const metadata = await sharp(source).metadata();

    await sharp(source)
      .rotate()
      .resize({
        width: 1200,
        height: 1200,
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 88, smartSubsample: true, effort: 6 })
      .toFile(target);

    const sourceSize = (await fs.stat(source)).size;
    const targetSize = (await fs.stat(target)).size;
    process.stdout.write(`${file}: ${metadata.width}x${metadata.height}, ${sourceSize} -> ${targetSize} bytes\n`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
