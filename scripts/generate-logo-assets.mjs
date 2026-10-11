import sharp from 'sharp';
import fs from 'fs';

/**
 * Builds every logo/icon asset from public/logo-source.png.
 * The source is a single-colour logo on a flat background; luminance difference
 * from the background becomes the alpha mask, then each part is recoloured.
 */

const SRC = 'public/logo-source.png';
const NAVY = [20, 43, 74];
const GOLD = [212, 175, 55];
const WHITE = [255, 255, 255];
const NAVY_HEX = '#142B4A';
const GOLD_HEX = '#D4AF37';

if (!fs.existsSync(SRC)) {
  console.error(`Missing ${SRC}`);
  process.exit(1);
}

const { data: grey, info } = await sharp(SRC).greyscale().raw().toBuffer({ resolveWithObject: true });
const W = info.width;
const H = info.height;

const bg = grey[0];
let fg = bg;
for (const v of grey) if (Math.abs(v - bg) > Math.abs(fg - bg)) fg = v;
const lo = 1;
const hi = Math.max(lo + 1, Math.round(Math.abs(fg - bg) * 0.5));

const alpha = new Uint8ClampedArray(W * H);
for (let i = 0; i < grey.length; i++) {
  const d = Math.abs(grey[i] - bg);
  alpha[i] = d <= lo ? 0 : d >= hi ? 255 : Math.round(((d - lo) / (hi - lo)) * 255);
}

/** Split the logo into horizontal bands separated by empty rows: monogram, wordmark, sub-line. */
const bands = [];
let start = -1;
for (let y = 0; y <= H; y++) {
  let filled = false;
  if (y < H) for (let x = 0; x < W; x++) if (alpha[y * W + x] > 128) { filled = true; break; }
  if (filled && start < 0) start = y;
  if (!filled && start >= 0) { bands.push([start, y - 1]); start = -1; }
}
if (bands.length < 3) {
  console.error(`Expected 3 bands (monogram, SHORO, VENTURES), found ${bands.length}`);
  process.exit(1);
}
const [markBand, wordBand, subBand] = bands;

function bandBox([y0, y1]) {
  let x0 = W, x1 = -1;
  for (let y = y0; y <= y1; y++) for (let x = 0; x < W; x++) {
    if (alpha[y * W + x] > 0) { if (x < x0) x0 = x; if (x > x1) x1 = x; }
  }
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

/** RGBA buffer for a region, coloured per band. */
function layer(box, colorForY) {
  const out = Buffer.alloc(box.width * box.height * 4);
  for (let y = 0; y < box.height; y++) {
    const c = colorForY(box.top + y);
    for (let x = 0; x < box.width; x++) {
      const a = alpha[(box.top + y) * W + box.left + x];
      const o = (y * box.width + x) * 4;
      out[o] = c[0]; out[o + 1] = c[1]; out[o + 2] = c[2]; out[o + 3] = a;
    }
  }
  return sharp(out, { raw: { width: box.width, height: box.height, channels: 4 } }).png().toBuffer();
}

const markBox = bandBox(markBand);
const textBox = (() => {
  const a = bandBox(wordBand), b = bandBox(subBand);
  const left = Math.min(a.left, b.left);
  return { left, top: a.top, width: Math.max(a.left + a.width, b.left + b.width) - left, height: b.top + b.height - a.top };
})();
const fullBox = (() => {
  const left = Math.min(markBox.left, textBox.left);
  const right = Math.max(markBox.left + markBox.width, textBox.left + textBox.width);
  return { left, top: markBox.top, width: right - left, height: textBox.top + textBox.height - markBox.top };
})();

const palette = (main, sub) => (y) => (y >= subBand[0] ? sub : main);
const light = palette(NAVY, GOLD);
const dark = palette(WHITE, GOLD);

const pad = (buf, p) => sharp(buf).extend({ top: p, bottom: p, left: p, right: p, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

/** Stacked logo exactly as designed. */
const stackedLight = await pad(await layer(fullBox, light), 24);
const stackedDark = await pad(await layer(fullBox, dark), 24);

/** Horizontal lockup for the header: monogram left, wordmark right. */
async function horizontal(colorFn) {
  const mark = await layer(markBox, colorFn);
  const text = await layer(textBox, colorFn);
  const gap = Math.round(markBox.height * 0.18);
  const width = markBox.width + gap + textBox.width;
  const height = Math.max(markBox.height, textBox.height);
  const img = await sharp({ create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: mark, left: 0, top: Math.round((height - markBox.height) / 2) },
      { input: text, left: markBox.width + gap, top: Math.round((height - textBox.height) / 2) },
    ])
    .png()
    .toBuffer();
  return pad(img, 16);
}

await sharp(stackedLight).toFile('public/logo.png');
await sharp(await horizontal(light)).toFile('public/logo-header.png');
await sharp(stackedDark).toFile('public/logo-footer.png');

const markNavy = await layer(markBox, () => NAVY);
const markGold = await layer(markBox, () => GOLD);
await sharp(await pad(markNavy, 16)).toFile('public/logo-mark.png');

async function icon(size, file, inset = 0.18) {
  const inner = Math.round(size * (1 - inset * 2));
  const mark = await sharp(markGold).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: NAVY_HEX } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(file);
}
await icon(512, 'public/icon-512.png', 0.2);
await icon(192, 'public/icon-192.png');
await icon(180, 'public/apple-touch-icon.png');
await icon(32, 'public/favicon.png', 0.1);
fs.copyFileSync('public/favicon.png', 'public/favicon.ico');
fs.copyFileSync('public/favicon.png', 'app/favicon.ico');

const ogLogo = await sharp(stackedDark).resize(560, 330, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
const ogFrame = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="${GOLD_HEX}" stroke-opacity="0.35" stroke-width="2"/>
  <text x="600" y="520" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="28" letter-spacing="10" fill="#F3F5F7" fill-opacity="0.85">STYLE THAT SPEAKS.</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 4, background: NAVY_HEX } })
  .composite([{ input: ogFrame, left: 0, top: 0 }, { input: ogLogo, left: 320, top: 105 }])
  .png()
  .toFile('public/og-image.png');

console.log('Logo assets generated from', SRC, { bands, size: [W, H] });
