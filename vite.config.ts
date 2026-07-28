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

              // 3. Update src/data/embeddedPhotos.ts with base64 Data URLs
              const embeddedPhotosPath = path.resolve(__dirname, 'src/data/embeddedPhotos.ts');
              
              let fileContent = '';
              let currentMap: Record<string, string> = {};
              let defaultMap: Record<string, string> = {};

              if (fs.existsSync(embeddedPhotosPath)) {
                try {
                  fileContent = fs.readFileSync(embeddedPhotosPath, 'utf-8');
                  const matchEmbedded = fileContent.match(/export const EMBEDDED_PHOTOS: Record<string, string> = ({[\s\S]*?});/);
                  if (matchEmbedded) {
                    currentMap = JSON.parse(matchEmbedded[1]);
                  }
                  const matchDefault = fileContent.match(/export const DEFAULT_PHOTOS: Record<string, string> = ({[\s\S]*?});/);
                  if (matchDefault) {
                    defaultMap = JSON.parse(matchDefault[1]);
                  }
                } catch (e) {
                  // ignore parse error
                }
              }

              currentMap[photoKey] = dataUrl;
              defaultMap[photoKey] = dataUrl;

              const newFileContent = `// Arquivo de persistência direta de fotos no código-fonte.
// As fotos configuradas ou atualizadas aqui são empacotadas no bundle final (ZIP, GitHub, Vercel).

export const DEFAULT_PHOTOS: Record<string, string> = ${JSON.stringify(defaultMap, null, 2)};

export const EMBEDDED_PHOTOS: Record<string, string> = ${JSON.stringify(currentMap, null, 2)};
`;

              fs.writeFileSync(embeddedPhotosPath, newFileContent);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: true, 
                message: `Foto '${photoKey}' gravada fisicamente em public/images/ e em src/data/embeddedPhotos.ts!` 
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
