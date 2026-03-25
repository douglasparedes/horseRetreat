import fs from 'fs';
const buffer = fs.readFileSync('./public/gallery-1.jpeg').slice(0, 16);
console.log(Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join(' '));
