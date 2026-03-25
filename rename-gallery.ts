import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

const whatsappFiles = files
  .filter(f => f.startsWith('WhatsApp Image'))
  .sort();

let counter = 2; // Start from 2 because gallery-1.jpeg exists
for (const file of whatsappFiles) {
  const newName = `gallery-${counter}.jpeg`;
  fs.renameSync(path.join(publicDir, file), path.join(publicDir, newName));
  console.log(`Renamed ${file} -> ${newName}`);
  counter++;
}
console.log(`Finished. Total Gallery Images: ${counter - 1}`);
