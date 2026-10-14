import sharp from "sharp";

const inputPath = "C:/Users/PC/.gemini/antigravity-ide/brain/82f27734-e089-4731-895b-5f15aa639f48/.user_uploaded/media_1791957506730.png";

async function run() {
  const img = sharp(inputPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Let's check distribution of pixels across the image:
  // Background pixels have:
  // r > 200, g > 195, b > 180, and color saturation (max(r,g,b) - min(r,g,b)) is low (< 35).
  const outData = Buffer.from(data);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const sat = maxVal - minVal;

      // Pure paper background has low saturation and high brightness
      if (minVal >= 200 && sat <= 32) {
        outData[idx + 3] = 0; // fully transparent background
      } else if (minVal >= 185 && sat <= 35) {
        // Soft edge anti-aliasing
        const alpha = Math.round(255 * (1 - (minVal - 185) / 15));
        outData[idx + 3] = Math.max(0, Math.min(255, alpha));
      }
    }
  }

  // Find true bounding box of the logo
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (outData[idx + 3] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`True Visible bounds: X: [${minX}, ${maxX}] (${maxX - minX}px), Y: [${minY}, ${maxY}] (${maxY - minY}px)`);

  const pad = 20;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(width - cropX, (maxX - minX) + pad * 2);
  const cropH = Math.min(height - cropY, (maxY - minY) + pad * 2);

  const trimmed = await sharp(outData, { raw: { width, height, channels: 4 } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png()
    .toBuffer();

  await sharp(trimmed).png().toFile("public/logo.png");
  await sharp(trimmed).webp({ quality: 95 }).toFile("public/logo.webp");
  await sharp(trimmed).png().toFile("public/logo-transparent.png");

  // Emblem bounds: the book & monogram is from top down to where HERITAGE LEAF begins
  // Let's find where the text begins by looking for the horizontal gap or checking Y
  // HERITAGE LEAF text is around y = 300 to 380
  let embMinX = width, embMaxX = 0, embMinY = height, embMaxY = 0;
  for (let y = minY; y < 310; y++) {
    for (let x = minX; x <= maxX; x++) {
      const idx = (y * width + x) * channels;
      if (outData[idx + 3] > 10) {
        if (x < embMinX) embMinX = x;
        if (x > embMaxX) embMaxX = x;
        if (y < embMinY) embMinY = y;
        if (y > embMaxY) embMaxY = y;
      }
    }
  }

  console.log(`Emblem bounds: X: [${embMinX}, ${embMaxX}] (${embMaxX - embMinX}px), Y: [${embMinY}, ${embMaxY}] (${embMaxY - embMinY}px)`);

  const embW = embMaxX - embMinX;
  const embH = embMaxY - embMinY;
  const embSize = Math.max(embW, embH) + 30;
  const embCenterX = Math.floor((embMinX + embMaxX) / 2);
  const embCenterY = Math.floor((embMinY + embMaxY) / 2);
  const embCropX = Math.max(0, Math.floor(embCenterX - embSize / 2));
  const embCropY = Math.max(0, Math.floor(embCenterY - embSize / 2));

  const faviconBuffer = await sharp(outData, { raw: { width, height, channels: 4 } })
    .extract({
      left: embCropX,
      top: embCropY,
      width: Math.min(width - embCropX, embSize),
      height: Math.min(height - embCropY, embSize)
    })
    .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(faviconBuffer).toFile("public/favicon.png");
  await sharp(faviconBuffer).resize(32, 32).toFile("public/favicon.ico");

  console.log("Assets trimmed and created successfully.");
}

run().catch(console.error);
