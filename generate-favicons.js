import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicons() {
  const logoPath = path.join(__dirname, 'src', 'assets', 'logo.png');
  const publicDir = path.join(__dirname, 'public');

  if (!fs.existsSync(logoPath)) {
    console.error('Logo not found at', logoPath);
    return;
  }

  const metadata = await sharp(logoPath).metadata();
  console.log(`Logo dimensions: ${metadata.width}x${metadata.height}`);

  // Generate Favicons
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  for (const s of sizes) {
    await sharp(logoPath)
      .resize({
        width: s.size,
        height: s.size,
        fit: sharp.fit.contain,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(path.join(publicDir, s.name));
    console.log(`Generated ${s.name}`);
  }
}

generateFavicons().catch(console.error);
