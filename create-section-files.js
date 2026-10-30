import fs from 'fs';
import path from 'path';

const sectionsDir = './sections';
const jsDir = './src/scripts/sections';
const scssDir = './src/styles/sections';

let existingFiles = new Set(
    fs.readdirSync(sectionsDir).filter(f => f.endsWith('.liquid'))
);

fs.watch(sectionsDir, (eventType, filename) => {
    if (!filename || !filename.endsWith('.liquid')) return;

    const filePath = path.join(sectionsDir, filename);

    if (eventType === 'rename') {
        const existsNow = fs.existsSync(filePath);

        if (existsNow && !existingFiles.has(filename)) {

            existingFiles.add(filename);

            const sectionName = filename.replace('.liquid', '');
            const jsFile = path.join(jsDir, `${sectionName}.js`);
            const scssFile = path.join(scssDir, `${sectionName}.scss`);

            if (!fs.existsSync(jsFile)) {
                const jsContent = `import '../../styles/sections/${sectionName}.scss';`;

                fs.writeFileSync(jsFile, jsContent, 'utf8');
                console.log(`Created: ${jsFile}`);
            }

            if (!fs.existsSync(scssFile)) {
                fs.writeFileSync(scssFile, `/* ${sectionName} styles */`, 'utf8');
                console.log(`Created: ${scssFile}`);
            }
        }

        else if (!existsNow && existingFiles.has(filename)) {
            existingFiles.delete(filename);
            console.log(`Deleted liquid: ${filename}`);
        }
    }
});
