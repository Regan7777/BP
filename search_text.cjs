const fs = require('fs');
const path = require('path');

const richDetailsPath = path.join(__dirname, 'src', 'data', 'richDetails.json');
const data = JSON.parse(fs.readFileSync(richDetailsPath, 'utf8'));
const richMap = data.richDetails;

function showArticle(slug) {
  console.log(`\n=== ${slug} ===`);
  const art = richMap[slug];
  if (!art || !art.sections) return;
  art.sections.forEach((s, sIdx) => {
    console.log(`-- Sec ${sIdx}: ${s.title}`);
    s.paragraphs.forEach((p, pIdx) => {
      console.log(`   [${pIdx}] ${p}`);
    });
  });
}

// Let's check the first few
showArticle('shenxingjiasu-review');
showArticle('beginner-complete-guide');

