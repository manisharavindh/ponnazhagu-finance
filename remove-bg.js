import sharp from 'sharp';
import path from 'path';
// import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function removeBackground() {
  const inputPath = path.join(__dirname, 'src', 'assets', 'logo.png');
  const outputPath = path.join(__dirname, 'src', 'assets', 'logo-transparent.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const threshold = 15; // Tolerance for background color variation
  const bg = [250, 247, 242]; // Target background color

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Calculate distance from bg color
    const dist = Math.abs(r - bg[0]) + Math.abs(g - bg[1]) + Math.abs(b - bg[2]);
    
    if (dist < threshold) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).toFile(outputPath);
  
  console.log('Background removed, saved to logo-transparent.png');
}

removeBackground().catch(console.error);
