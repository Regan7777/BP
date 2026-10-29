const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const publicDir = path.join(process.cwd(), 'public');
const files = [
  'vps-route-junction.png',
  'local-format-inspection.png',
  'subconverter-folded-stream.png',
  'dns-leak-privacy-chamber.png',
  'streaming-media-projector.png',
  'proxy-modes-gate.png',
  'telegram-safe-flight.png',
  'cloudflare-edge-path.png',
  'openwrt-home-routing.png',
  'v2rayng-routing-v.png',
  'ai-connectivity-gateway.png',
  'shadowrocket-origami-rocket.png',
  'clash-verge-cat-routing.png',
  'sing-box-core.png',
  'us-apple-id-passport.png',
  'ai-model-portals.png',
  'proxy-glossary-prism.png',
  'speedtest-measurement-runway.png',
  'feature-network.png',
  'card-network.png',
  'avatar-lt.png',
  'guide-hero.jpg',
  'guide-step1.jpg',
  'guide-step2.jpg',
  'guide-step3.jpg',
  'shadowrocket-ui.jpg',
  'v2rayng-ui.jpg'
];

async function main() {
  let before = 0;
  let after = 0;

  for (const relative of files) {
    const input = path.join(publicDir, relative);
    if (!fs.existsSync(input)) continue;
    const output = path.join(publicDir, `${path.parse(relative).name}.webp`);
    const inputSize = fs.statSync(input).size;
    await sharp(input)
      .rotate()
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90, effort: 6, smartSubsample: true })
      .toFile(output);
    const outputSize = fs.statSync(output).size;
    before += inputSize;
    after += outputSize;
    console.log(`${relative}: ${inputSize} -> ${outputSize}`);
  }

  console.log(`total: ${before} -> ${after} (${Math.round((1 - after / before) * 100)}% smaller)`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
