const fs = require('fs');

const pagePath = 'app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

content = content.replace(/const fadeIn = \{/g, 'const fadeIn: any = {');
content = content.replace(/const staggerContainer = \{/g, 'const staggerContainer: any = {');

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Fixed type errors for variants');
