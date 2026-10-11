import sharp from 'sharp';
import fs from 'fs';

const src = 'public/logo-source.png';
if (!fs.existsSync(src)) {
  console.error('Missing public/logo-source.png');
  process.exit(1);
}

const meta = await sharp(src).metadata();
const w = meta.width;
const h = meta.height;

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Knock out outer black canvas only — keep original emblem + real wordmark
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r < 18 && g < 18 && b < 18) data[i + 3] = 0;
}

const transparentFull = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).png().toBuffer();

// Header / main: real logo on transparent (for ivory)
await sharp(transparentFull).png().toFile('public/logo.png');
await sharp(transparentFull).png().toFile('public/logo-header.png');

// Footer: real logo, charcoal wordmark → gold (emblem untouched)
const footerData = Buffer.from(data);
const wordmarkStartY = Math.floor(info.height * 0.58);
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * 4;
    if (footerData[i + 3] < 20) continue;
    if (y < wordmarkStartY) continue;
    const r = footerData[i];
    const g = footerData[i + 1];
    const b = footerData[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max < 80 && max - min < 30) {
      footerData[i] = 216;
      footerData[i + 1] = 176;
      footerData[i + 2] = 106;
    }
  }
}
const footerLogo = await sharp(footerData, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).png().toBuffer();
await sharp(footerLogo).png().toFile('public/logo-footer.png');

// Circular emblem only (icons)
const emblemH = Math.round(h * 0.62);
const emblemRaw = await sharp(src)
  .extract({ left: 0, top: 0, width: w, height: emblemH })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const eData = emblemRaw.data;
const eInfo = emblemRaw.info;
const cx = eInfo.width / 2;
const cy = eInfo.height / 2;
const radius = Math.min(cx, cy) * 0.92;

for (let y = 0; y < eInfo.height; y++) {
  for (let x = 0; x < eInfo.width; x++) {
    const i = (y * eInfo.width + x) * 4;
    const dx = x - cx;
    const dy = y - cy;
    if (dx * dx + dy * dy > radius * radius) eData[i + 3] = 0;
  }
}

const emblem = await sharp(eData, {
  raw: { width: eInfo.width, height: eInfo.height, channels: 4 },
}).png().toBuffer();

await sharp(emblem).png().toFile('public/logo-mark.png');

await sharp(emblem)
  .resize(192, 192, { fit: 'contain', background: { r: 74, g: 24, b: 61, alpha: 1 } })
  .png()
  .toFile('public/icon-192.png');
await sharp(emblem)
  .resize(512, 512, { fit: 'contain', background: { r: 74, g: 24, b: 61, alpha: 1 } })
  .png()
  .toFile('public/icon-512.png');
await sharp(emblem)
  .resize(180, 180, { fit: 'contain', background: { r: 74, g: 24, b: 61, alpha: 1 } })
  .png()
  .toFile('public/apple-touch-icon.png');
await sharp(emblem)
  .resize(32, 32, { fit: 'contain', background: { r: 74, g: 24, b: 61, alpha: 1 } })
  .png()
  .toFile('public/favicon.png');
fs.copyFileSync('public/favicon.png', 'public/favicon.ico');

// OG
const ogBg = await sharp({
  create: { width: 1200, height: 630, channels: 3, background: { r: 74, g: 24, b: 61 } },
}).png().toBuffer();
const ogLogo = await sharp(footerLogo)
  .resize(420, 520, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
await sharp(ogBg)
  .composite([{ input: ogLogo, top: 55, left: 390 }])
  .png()
  .toFile('public/og-image.png');

// Hero photo lives at public/hero.jpg — do not overwrite it here.

console.log('Brand assets ready', { w, h });
