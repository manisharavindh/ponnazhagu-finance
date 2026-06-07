import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function trimLogo() {
  const logoPath = path.join(__dirname, 'src', 'assets', 'logo.png');
  
  // Create a backup first just in case
  const backupPath = path.join(__dirname, 'src', 'assets', 'logo-backup.png');
  await sharp(logoPath).toFile(backupPath);

  // Trim the transparent pixels from the edges
  await sharp(logoPath)
    .trim({ threshold: 0 }) 
    .toFile(path.join(__dirname, 'src', 'assets', 'logo-trimmed.png'));

  console.log('Logo trimmed successfully.');
}

trimLogo().catch(console.error);
