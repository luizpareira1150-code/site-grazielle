const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public/images');
const assetsDir = path.join(__dirname, '../src/assets/images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const files = fs.readdirSync(publicDir);

const embeddedMap = {};
const defaultMap = {};

files.forEach(f => {
  if (!f.endsWith('.png') && !f.endsWith('.jpg') && !f.endsWith('.jpeg')) return;
  const filePath = path.join(publicDir, f);
  const buf = fs.readFileSync(filePath);
  const key = f.replace(/\.(png|jpg|jpeg)$/, '');
  
  let mime = 'image/jpeg';
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
    mime = 'image/png';
  } else if (buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF) {
    mime = 'image/jpeg';
  }
  
  const base64Str = buf.toString('base64');
  const dataUrl = `data:${mime};base64,${base64Str}`;
  
  embeddedMap[key] = dataUrl;
  defaultMap[key] = dataUrl;
  
  // also sync buffers
  fs.writeFileSync(path.join(publicDir, `${key}.jpg`), buf);
  fs.writeFileSync(path.join(publicDir, `${key}.png`), buf);
  if (fs.existsSync(assetsDir)) {
    fs.writeFileSync(path.join(assetsDir, `${key}.jpg`), buf);
    fs.writeFileSync(path.join(assetsDir, `${key}.png`), buf);
  }
});

console.log('Processed image keys:', Object.keys(embeddedMap));

const targetFile = path.join(__dirname, '../src/data/embeddedPhotos.ts');
const fileContent = `// Arquivo de persistência direta de fotos no código-fonte.
// As fotos configuradas ou atualizadas aqui são empacotadas no bundle final (ZIP, GitHub, Vercel).

export const DEFAULT_PHOTOS: Record<string, string> = ${JSON.stringify(defaultMap, null, 2)};

export const EMBEDDED_PHOTOS: Record<string, string> = ${JSON.stringify(embeddedMap, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log('Successfully wrote src/data/embeddedPhotos.ts');
