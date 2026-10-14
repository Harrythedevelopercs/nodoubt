import sharp from "sharp";

async function generateFavicon() {
  const logo = sharp("public/logo.png");
  const meta = await logo.metadata();
  console.log("logo.png metadata:", meta);

  // In public/logo.png:
  // width: 686 (was 646 + 40 pad)
  // height: 509 (was 469 + 40 pad)
  // The emblem is in the top ~60% of the image
  // Let's crop from top to y = Math.floor(meta.height * 0.62)
  const emblemH = Math.floor(meta.height * 0.62);
  const emblemBuffer = await sharp("public/logo.png")
    .extract({
      left: 0,
      top: 0,
      width: meta.width,
      height: emblemH
    })
    .toBuffer();

  // Find exact tight bounds of the emblem
  const { data, info } = await sharp(emblemBuffer).raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx + 3] > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Emblem bounds: [${minX}, ${minY}] to [${maxX}, ${maxY}] (${maxX - minX}x${maxY - minY})`);

  const w = maxX - minX;
  const h = maxY - minY;
  const size = Math.max(w, h);
  
  // Center in square with slight padding
  const squareBuffer = await sharp(emblemBuffer)
    .extract({
      left: minX,
      top: minY,
      width: w,
      height: h
    })
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // Resize to favicon sizes
  await sharp(squareBuffer).resize(192, 192).png().toFile("public/favicon-192.png");
  await sharp(squareBuffer).resize(64, 64).png().toFile("public/favicon.png");
  await sharp(squareBuffer).resize(32, 32).toFile("public/favicon.ico");

  console.log("Favicon created cleanly.");
}

generateFavicon().catch(console.error);
