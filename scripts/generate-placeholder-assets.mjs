import sharp from 'sharp';

const PLUM = '#4A183D';
const GOLD = '#D8B06A';
const IVORY = '#FFF8F2';
const CHARCOAL = '#1E1E1E';

function wordmark({ width, height, color, label = 'YOUR LOGO' }) {
  const fontSize = Math.round(height * 0.2);
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect x="${width * 0.04}" y="${height * 0.08}" width="${width * 0.92}" height="${height * 0.84}" rx="${height * 0.12}"
        fill="none" stroke="${color}" stroke-width="${Math.max(2, height * 0.025)}" stroke-dasharray="${height * 0.08} ${height * 0.05}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}" letter-spacing="${fontSize * 0.12}" fill="${color}">${label}</text>
</svg>`);
}

function monogram(size, bg, fg) {
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" fill="${bg}"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.34}" fill="none" stroke="${fg}" stroke-width="${Math.max(1, size * 0.03)}"/>
  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="${size * 0.36}" fill="${fg}">S</text>
</svg>`);
}

await sharp(wordmark({ width: 800, height: 400, color: CHARCOAL })).png().toFile('public/logo.png');
await sharp(wordmark({ width: 800, height: 400, color: CHARCOAL })).png().toFile('public/logo-header.png');
await sharp(wordmark({ width: 800, height: 400, color: GOLD })).png().toFile('public/logo-footer.png');

const transparentMark = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
  <circle cx="256" cy="256" r="200" fill="${PLUM}"/>
  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="200" fill="${GOLD}">S</text>
</svg>`);
await sharp(transparentMark).png().toFile('public/logo-mark.png');

for (const [size, file] of [
  [512, 'public/icon-512.png'],
  [192, 'public/icon-192.png'],
  [180, 'public/apple-touch-icon.png'],
  [32, 'public/favicon.png'],
]) {
  await sharp(monogram(size, PLUM, GOLD)).png().toFile(file);
}
await sharp(monogram(32, PLUM, GOLD)).png().toFile('public/favicon.ico');
await sharp(monogram(32, PLUM, GOLD)).png().toFile('app/favicon.ico');

await sharp(Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${PLUM}"/>
  <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="72" letter-spacing="8" fill="${GOLD}">YOUR STORE NAME</text>
  <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="28" fill="${IVORY}" opacity="0.8">Your tagline goes here</text>
</svg>`))
  .png()
  .toFile('public/og-image.png');

await sharp(Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${IVORY}"/>
      <stop offset="55%" stop-color="#E8C7CF"/>
      <stop offset="100%" stop-color="${GOLD}"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#g)"/>
  <text x="72%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="40" letter-spacing="6" fill="${PLUM}" opacity="0.45">REPLACE public/hero.jpg</text>
</svg>`))
  .jpeg({ quality: 82 })
  .toFile('public/hero.jpg');

console.log('Placeholder assets written to public/');
