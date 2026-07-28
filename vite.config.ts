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

              // 2. Extract base64 data & write binary PNG file
              const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
              if (matches && matches.length === 3) {
                const buffer = Buffer.from(matches[2], 'base64');
                const fileName = `${photoKey}.png`;

                fs.writeFileSync(path.join(publicImagesDir, fileName), buffer);
                fs.writeFileSync(path.join(assetsImagesDir, fileName), buffer);
              }

              // 3. Update src/data/embeddedPhotos.ts with the raw dataUrl base64 so it embeds directly into JS bundle for Vercel/ZIP
              const embeddedPhotosPath = path.resolve(__dirname, 'src/data/embeddedPhotos.ts');
              let fileContent = '';
              if (fs.existsSync(embeddedPhotosPath)) {
                fileContent = fs.readFileSync(embeddedPhotosPath, 'utf-8');
              }

              let currentMap: Record<string, string> = {};
              try {
                const match = fileContent.match(/export const EMBEDDED_PHOTOS: Record<string, string> = ({[\s\S]*?});/);
                if (match) {
                  currentMap = JSON.parse(match[1]);
                }
              } catch (e) {
                // fallback
              }

              currentMap[photoKey] = dataUrl;

              const newFileContent = `// Arquivo de persistência direta de fotos no código-fonte.
// As fotos configuradas ou atualizadas aqui são empacotadas no bundle final (ZIP, GitHub, Vercel).

export const DEFAULT_PHOTOS: Record<string, string> = {
  hero_portrait: "/images/hero_portrait.png",
  about_portrait: "/images/about_portrait.png",
  office_1: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  office_2: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  office_3: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  psychotherapy_hero: "/images/psychotherapy_hero.png",
  neuropsych_materials: "/images/neuropsych_materials.png",
  lectures_banner: "/images/lectures_banner.png",
  audience_teens: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  audience_adults: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
};

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
