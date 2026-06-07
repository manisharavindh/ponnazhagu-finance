import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function checkLogo() {
  const logoPath = path.join(__dirname, 'src', 'assets', 'logo.png');
  const metadata = await sharp(logoPath).metadata();
  console.log(`Logo: ${metadata.width}x${metadata.height}, channels: ${metadata.channels}, format: ${metadata.format}`);

  // get top left pixel
  const { data } = await sharp(logoPath)
    .extract({ left: 0, top: 0, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  console.log(`Top-left pixel (RGBA):`, Array.from(data));
}

checkLogo().catch(console.error);
