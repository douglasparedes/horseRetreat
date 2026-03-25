import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

const map: Record<string, string> = {};

let counter = 1;
for (const file of files) {
  if (file.startsWith('WhatsApp Image')) {
    const newName = `gallery-${counter}.jpeg`;
    fs.renameSync(path.join(publicDir, file), path.join(publicDir, newName));
    map[file] = newName;
    counter++;
  }
}

console.log(JSON.stringify(map, null, 2));
