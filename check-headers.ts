import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

for (const file of files) {
  if (file.endsWith('.jpeg')) {
    const buffer = fs.readFileSync(path.join(publicDir, file));
    const header = buffer.slice(0, 4).toString('hex');
    if (header !== 'ffd8ffe0' && header !== 'ffd8ffe1' && header !== 'ffd8fbe0') {
       console.log(`${file}: WRONG HEADER - ${header}`);
    } else {
       console.log(`${file}: OK`);
    }
  }
}
