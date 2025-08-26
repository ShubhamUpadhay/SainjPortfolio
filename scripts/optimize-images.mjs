import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "public/main.jpeg";
const OUT = "public";
const widths = [640, 1024, 1600];

// ensure source exists
if (!fs.existsSync(SRC)) {
  console.error(`Source not found: ${SRC}`);
  process.exit(1);
}

const base = path.basename(SRC).replace(/\.(jpg|jpeg|png|webp|avif)$/i, "");

for (const w of widths) {
  const img = sharp(SRC).resize(w);

  await img.clone().toFormat("avif", { quality: 45 })
    .toFile(path.join(OUT, `${base}-${w}.avif`));

  await img.clone().webp({ quality: 78 })
    .toFile(path.join(OUT, `${base}-${w}.webp`));

  await img.clone().jpeg({ quality: 78, mozjpeg: true })
    .toFile(path.join(OUT, `${base}-${w}.jpg`));

  console.log(`✓ Wrote ${base}-${w}.{avif,webp,jpg}`);
}

// also print the intrinsic aspect to set width/height in JSX
const meta = await sharp(SRC).metadata();
console.log(`Aspect: ${meta.width}x${meta.height}`);
