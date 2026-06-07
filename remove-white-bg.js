import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function removeBackground() {
  const inputPath = path.join(__dirname, 'src', 'assets', 'krishna-calf.png');
  const outputPath = path.join(__dirname, 'src', 'assets', 'krishna-transparent.webp');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // If it's mostly white, make transparent
    if (r > 200 && g > 200 && b > 200) {
      data[i + 3] = 0; // Transparent
    } else {
      // It's part of the silhouette (dark). Make it gold #DBBE7A
      data[i] = 219;     // R
      data[i + 1] = 190; // G
      data[i + 2] = 122; // B
      data[i + 3] = 255; // Opaque
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .webp({ quality: 80 })
  .toFile(outputPath);
  
  console.log('Background removed, made gold, and saved to krishna-transparent.webp');
}

removeBackground().catch(console.error);
