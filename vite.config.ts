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

              // 2. Export exactly one deployable JPEG per slot. The website uses
              // /images/<slot>.jpg, so there is no second format that can diverge.
              const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
              if (matches && matches.length === 3) {
                const buffer = Buffer.from(matches[2], 'base64');
                fs.writeFileSync(path.join(publicImagesDir, `${photoKey}.jpg`), buffer);
                fs.writeFileSync(path.join(assetsImagesDir, `${photoKey}.jpg`), buffer);
              }

              // 3. Keep the source module lightweight. Deployment reads the images
              // directly from public/images, avoiding stale or truncated base64 blobs.
              const embeddedPhotosPath = path.resolve(__dirname, 'src/data/embeddedPhotos.ts');
              const newFileContent = `// As fotos de produção são arquivos estáticos em public/images.
// Não embuta Base64 aqui: isso evita arquivos corrompidos e mantém o bundle leve.

export const DEFAULT_PHOTOS: Record<string, string> = {};

export const EMBEDDED_PHOTOS: Record<string, string> = {};
`;

              fs.writeFileSync(embeddedPhotosPath, newFileContent, 'utf-8');

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: true, 
                message: `Foto '${photoKey}' gravada em public/images/${photoKey}.jpg e pronta para o deploy.` 
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
