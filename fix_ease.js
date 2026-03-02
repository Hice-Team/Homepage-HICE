const fs = require('fs');

const pagePath = 'app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

if (content.includes('ease: [0.22, 1, 0.36, 1]')) {
    content = content.replace(/ease:\s*\[0\.22,\s*1,\s*0\.36,\s*1\]/g, 'ease: "easeOut"');
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log('Fixed ease type error in page.tsx');
} else {
    console.log('Could not find ease string in page.tsx');
}
