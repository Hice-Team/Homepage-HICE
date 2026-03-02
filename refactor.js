const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'api' && file !== 'font') {
                filelist = walkSync(filePath, filelist);
            }
        } else {
            if (file === 'page.tsx') {
                filelist.push(filePath);
            }
        }
    });
    return filelist;
};

const appDir = path.join(__dirname, 'app');
const pages = walkSync(appDir);

let modifiedCount = 0;

pages.forEach(page => {
    let content = fs.readFileSync(page, 'utf8');
    let originalContent = content;

    // 1. Add import
    if (!content.includes('import { useGlobal }')) {
        content = content.replace(/import { useState[^}]*} from 'react';/, match => `${match}\nimport { useGlobal } from '@/components/providers/GlobalProvider';`);
    }

    // 2. Remove useState definitions
    // Match exact patterns because we generated them all the same way
    content = content.replace(/const \[isDarkMode,\s*setIsDarkMode\]\s*=\s*useState\(false\);/, '');
    content = content.replace(/const \[lang,\s*setLang\]\s*=\s*useState<['"]KOR['"] \| ['"]ENG['"]>\(['"]KOR['"]\);/, 'const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();');

    if (content !== originalContent) {
        fs.writeFileSync(page, content, 'utf8');
        modifiedCount++;
        console.log(`Updated: ${page}`);
    }
});

console.log(`Modified ${modifiedCount} pages.`);
