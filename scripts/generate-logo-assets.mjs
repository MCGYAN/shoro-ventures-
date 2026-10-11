import sharp from 'sharp';
import fs from 'fs';

const NAVY = '#142B4A';
const GOLD = '#D4AF37';
const WHITE = '#FFFFFF';
const GREY = '#F3F5F7';

const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

/** SV monogram drawn as geometric strokes inside a 200×200 box. */
function monogramPaths({ s, v, frame }) {
  return `
    <rect x="16" y="16" width="168" height="168" fill="none" stroke="${frame}" stroke-width="4"/>
    <path d="M96 66 C88 56 52 54 50 78 C48 100 98 98 98 122 C98 146 58 148 46 134"
          fill="none" stroke="${s}" stroke-width="13" stroke-linecap="square" stroke-linejoin="miter"/>
    <path d="M110 60 L132 136 L154 60" fill="none" stroke="${v}" stroke-width="13"
          stroke-linecap="square" stroke-linejoin="bevel"/>`;
}

function monogramSvg(size, { bg = null, s = NAVY, v = GOLD, frame = NAVY, pad = 0 } = {}) {
  const inner = 200 + pad * 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${-pad} ${-pad} ${inner} ${inner}">
  ${bg ? `<rect x="${-pad}" y="${-pad}" width="${inner}" height="${inner}" fill="${bg}"/>` : ''}
  ${monogramPaths({ s, v, frame })}
</svg>`;
}

/** Horizontal lockup: monogram + SHORO / VENTURES wordmark. */
function lockupSvg({ word, sub, s, v, frame, rule }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="880" height="320" viewBox="0 0 880 320">
  <g transform="translate(20 20) scale(1.4)">${monogramPaths({ s, v, frame })}</g>
  <text x="340" y="175" font-family="${FONT}" font-weight="700" font-size="124" letter-spacing="22" fill="${word}">SHORO</text>
  <rect x="344" y="203" width="70" height="4" fill="${rule}"/>
  <text x="432" y="222" font-family="${FONT}" font-weight="600" font-size="44" letter-spacing="17" fill="${sub}">VENTURES</text>
</svg>`;
}

const png = (svg) => sharp(Buffer.from(svg)).png();

const lightLockup = lockupSvg({ word: NAVY, sub: GOLD, s: NAVY, v: GOLD, frame: NAVY, rule: GOLD });
const darkLockup = lockupSvg({ word: WHITE, sub: GOLD, s: WHITE, v: GOLD, frame: GOLD, rule: GOLD });

fs.writeFileSync('public/logo.svg', lightLockup);
fs.writeFileSync('public/logo-mark.svg', monogramSvg(512));

await png(lightLockup).toFile('public/logo.png');
await png(lightLockup).toFile('public/logo-header.png');
await png(darkLockup).toFile('public/logo-footer.png');
await png(monogramSvg(512)).toFile('public/logo-mark.png');

for (const [size, file] of [
  [512, 'public/icon-512.png'],
  [192, 'public/icon-192.png'],
  [180, 'public/apple-touch-icon.png'],
  [32, 'public/favicon.png'],
]) {
  await png(monogramSvg(size, { bg: NAVY, s: WHITE, v: GOLD, frame: GOLD, pad: 30 })).toFile(file);
}
const favicon = monogramSvg(32, { bg: NAVY, s: WHITE, v: GOLD, frame: NAVY, pad: 6 });
await png(favicon).toFile('public/favicon.ico');
await png(favicon).toFile('app/favicon.ico');

await png(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="${GOLD}" stroke-opacity="0.35" stroke-width="2"/>
  <g transform="translate(160 155)">${darkLockup.replace(/<\/?svg[^>]*>/g, '')}</g>
  <text x="600" y="520" text-anchor="middle" font-family="${FONT}" font-size="30" letter-spacing="10" fill="${GREY}" fill-opacity="0.85">STYLE THAT SPEAKS.</text>
</svg>`).toFile('public/og-image.png');

await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E3D66"/>
      <stop offset="60%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="#0B1A2E"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#bg)"/>
  <g opacity="0.07" transform="translate(1080 140) scale(4)">${monogramPaths({ s: WHITE, v: GOLD, frame: WHITE })}</g>
  <rect x="0" y="1072" width="1920" height="8" fill="${GOLD}" opacity="0.6"/>
</svg>`))
  .jpeg({ quality: 85 })
  .toFile('public/hero.jpg');

console.log('Shoro Ventures brand assets written to public/');
