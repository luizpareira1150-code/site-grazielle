const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = path.join(__dirname, '../public/images');
const assetsDir = path.join(__dirname, '../src/assets/images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function isValidImageBuffer(buf) {
  if (!buf || buf.length < 500) return false;
  // JPEG: FF D8 FF
  if (buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF) return true;
  // PNG: 89 50 4E 47
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) return true;
  // WEBP: RIFF....WEBP
  if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP') return true;
  return false;
}

const remoteSources = {
  office_1: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  office_2: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
  office_3: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  psychotherapy_hero: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80',
  audience_teens: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  audience_adults: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
};

async function main() {
  const allKeys = [
    'hero_portrait',
    'about_portrait',
    'office_1',
    'office_2',
    'office_3',
    'psychotherapy_hero',
    'neuropsych_materials',
    'lectures_banner',
    'audience_children',
    'audience_teens',
    'audience_adults',
  ];

  const photosMap = {};

  for (const key of allKeys) {
    let imgBuf = null;
    const existingJpg = path.join(publicDir, `${key}.jpg`);
    const existingPng = path.join(publicDir, `${key}.png`);

    if (fs.existsSync(existingJpg)) {
      const buf = fs.readFileSync(existingJpg);
      if (isValidImageBuffer(buf)) {
        imgBuf = buf;
      }
    }
    if (!imgBuf && fs.existsSync(existingPng)) {
      const buf = fs.readFileSync(existingPng);
      if (isValidImageBuffer(buf)) {
        imgBuf = buf;
      }
    }

    if (!imgBuf && remoteSources[key]) {
      console.log(`Downloading fresh image for ${key}...`);
      try {
        const downloaded = await downloadImage(remoteSources[key]);
        if (isValidImageBuffer(downloaded)) {
          imgBuf = downloaded;
        }
      } catch (e) {
        console.error(`Error downloading ${key}:`, e.message);
      }
    }

    if (imgBuf) {
      // Determine mime
      let mime = 'image/jpeg';
      if (imgBuf[0] === 0x89 && imgBuf[1] === 0x50 && imgBuf[2] === 0x4E && imgBuf[3] === 0x47) {
        mime = 'image/png';
      } else if (imgBuf.slice(0, 4).toString() === 'RIFF' && imgBuf.slice(8, 12).toString() === 'WEBP') {
        mime = 'image/webp';
      }

      const dataUrl = `data:${mime};base64,${imgBuf.toString('base64')}`;
      photosMap[key] = dataUrl;

      // write clean files
      fs.writeFileSync(path.join(publicDir, `${key}.jpg`), imgBuf);
      fs.writeFileSync(path.join(publicDir, `${key}.png`), imgBuf);
      fs.writeFileSync(path.join(assetsDir, `${key}.jpg`), imgBuf);
      fs.writeFileSync(path.join(assetsDir, `${key}.png`), imgBuf);
      console.log(`✓ Stored ${key} (${imgBuf.length} bytes, ${mime})`);
    } else {
      console.warn(`⚠️ Warning: No valid image for ${key}`);
    }
  }

  const tsContent = `// Arquivo de fotos padrão e embutidas em alta definição.
// Gerado automaticamente com suporte a empacotamento estático e offline.

export const DEFAULT_PHOTOS: Record<string, string> = ${JSON.stringify(photosMap, null, 2)};

export const EMBEDDED_PHOTOS: Record<string, string> = ${JSON.stringify(photosMap, null, 2)};
`;

  const targetFile = path.join(__dirname, '../src/data/embeddedPhotos.ts');
  fs.writeFileSync(targetFile, tsContent, 'utf-8');
  console.log(`Successfully wrote ${Object.keys(photosMap).length} photos to ${targetFile}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
