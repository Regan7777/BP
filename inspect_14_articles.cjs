const fs = require('fs');
const path = require('path');

const richDetailsPath = path.join(__dirname, 'src', 'data', 'richDetails.json');
const richData = JSON.parse(fs.readFileSync(richDetailsPath, 'utf8'));
const richMap = richData.richDetails || {};

const targetSlugs = [
  'shenxingjiasu-review',
  'beginner-complete-guide',
  'v2rayng-android-tutorial',
  'shadowrocket-ios-tutorial',
  'clash-verge-rev-windows-tutorial',
  'vpn-proxy-glossary',
  'us-apple-id-registration-guide',
  'proxy-modes-comparison',
  'ai-chatgpt-claude-gemini-guide',
  'streaming-social-media-troubleshooting',
  'telegram-complete-guide',
  'sing-box-overview-and-setup',
  'openwrt-passwall-homeproxy-guide',
  'dns-leak-test-and-diagnostics'
];

for (const slug of targetSlugs) {
  const art = richMap[slug];
  if (!art) {
    console.log(`MISSING: ${slug}`);
    continue;
  }
  console.log(`\n========================================`);
  console.log(`SLUG: ${slug} | SECTIONS COUNT: ${art.sections ? art.sections.length : 0}`);
  if (art.sections) {
    art.sections.forEach((sec, idx) => {
      console.log(`  [Sec ${idx + 1}] Title: ${sec.title}`);
      if (sec.paragraphs) {
        sec.paragraphs.forEach((p, pIdx) => {
          console.log(`    (P ${pIdx + 1}) ${p.slice(0, 100)}...`);
        });
      }
    });
  }
}

