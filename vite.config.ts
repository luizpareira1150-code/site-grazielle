import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function photoSaverPlugin(): Plugin {
  return {
    name: 'photo-saver-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/save-photo' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', () => {
            try {
              const { photoKey, dataUrl } = JSON.parse(body);

              if (!photoKey || !dataUrl) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'photoKey and dataUrl required' }));
                return;
              }

              // 1. Ensure public/images and src/assets/images exist
              const publicImagesDir = path.resolve(__dirname, 'public/images');
              const assetsImagesDir = path.resolve(__dirname, 'src/assets/images');
              fs.mkdirSync(publicImagesDir, { recursive: true });
              fs.mkdirSync(assetsImagesDir, { recursive: true });

              // 2. Extract base64 data & write binary PNG/JPG files
              const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
              if (matches && matches.length === 3) {
                const mimeType = matches[1];
                const buffer = Buffer.from(matches[2], 'base64');
                const ext = mimeType.includes('png') ? 'png' : 'jpg';

                fs.writeFileSync(path.join(publicImagesDir, `${photoKey}.${ext}`), buffer);
                fs.writeFileSync(path.join(publicImagesDir, `${photoKey}.png`), buffer);
                fs.writeFileSync(path.join(publicImagesDir, `${photoKey}.jpg`), buffer);

                if (fs.existsSync(assetsImagesDir)) {
                  fs.writeFileSync(path.join(assetsImagesDir, `${photoKey}.${ext}`), buffer);
                  fs.writeFileSync(path.join(assetsImagesDir, `${photoKey}.png`), buffer);
                  fs.writeFileSync(path.join(assetsImagesDir, `${photoKey}.jpg`), buffer);
                }
              }

              // 3. Keep src/data/embeddedPhotos.ts clean with static paths
              const embeddedPhotosPath = path.resolve(__dirname, 'src/data/embeddedPhotos.ts');
              
              const staticPaths: Record<string, string> = {
                "hero_portrait": "/images/hero_portrait.jpg",
                "about_portrait": "/images/about_portrait.jpg",
                "office_1": "/images/office_1.jpg",
                "office_2": "/images/office_2.jpg",
                "office_3": "/images/office_3.jpg",
                "psychotherapy_hero": "/images/psychotherapy_hero.jpg",
                "neuropsych_materials": "/images/neuropsych_materials.jpg",
                "lectures_banner": "/images/lectures_banner.jpg",
                "audience_children": "/images/audience_children.jpg",
                "audience_teens": "/images/audience_teens.jpg",
                "audience_adults": "/images/audience_adults.jpg",
              };

              const newFileContent = `/**
 * Static image mappings pointing to /public/images
 * Vite copies the public/ folder directly to dist/ during build,
 * guaranteeing fast, lightweight, and 100% reliable image loading on Vercel and any production server.
 */

export const DEFAULT_PHOTOS: Record<string, string> = ${JSON.stringify(staticPaths, null, 2)};

export const EMBEDDED_PHOTOS: Record<string, string> = {
  ...DEFAULT_PHOTOS,
};
`;

              fs.writeFileSync(embeddedPhotosPath, newFileContent);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: true, 
                message: `Foto '${photoKey}' gravada fisicamente em public/images/!` 
              }));

            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoSaverPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
