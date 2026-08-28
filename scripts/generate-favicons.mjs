// Generates the favicon/app-icon set and default OG share images from the
// real Novixa Aqar brand mark (public/images/logo.svg). Run with:
//   npm run gen:favicons
//
// Output is committed to the repo (these are small, deterministic brand
// assets — no need to regenerate on every build; see docs/DESIGN_SYSTEM.md).
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const logoPath = resolve(root, 'public/images/logo.svg');

const NAVY = '#0F172A';
const BLUE = '#2563EB';
const ACCENT = '#10B981';

async function ensureDir(path) {
  await mkdir(path, { recursive: true });
}

async function generateIconSet() {
  const logoSvg = await readFile(logoPath);

  await ensureDir(resolve(root, 'public/icons'));

  // Favicon PNG sizes -> favicon.ico
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) => sharp(logoSvg).resize(size, size).png().toBuffer())
  );
  const ico = await pngToIco(pngBuffers);
  await writeFile(resolve(root, 'public/favicon.ico'), ico);
  console.log('✓ favicon.ico');

  // Apple touch icon (opaque background required, logo already has one)
  await sharp(logoSvg).resize(180, 180).png().toFile(resolve(root, 'public/apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png');

  // PWA/manifest icons
  await sharp(logoSvg).resize(192, 192).png().toFile(resolve(root, 'public/icons/icon-192.png'));
  await sharp(logoSvg).resize(512, 512).png().toFile(resolve(root, 'public/icons/icon-512.png'));
  console.log('✓ icons/icon-192.png, icons/icon-512.png');
}

function ogSvg({ dir, headline, tagline, wordmarkTop, wordmarkBottom }) {
  const isRtl = dir === 'rtl';
  const textAnchor = 'middle';
  const cx = 1200 / 2;
  const fontFamily = isRtl
    ? "'Cairo','Tahoma','Segoe UI',sans-serif"
    : "'Outfit','Segoe UI',sans-serif";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="${NAVY}"/>
        <stop offset="1" stop-color="#132038"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect x="0" y="0" width="1200" height="10" fill="${BLUE}"/>
    <rect x="0" y="620" width="1200" height="10" fill="${ACCENT}"/>

    <!-- brand mark -->
    <g transform="translate(${cx - 44}, 96)">
      <rect width="88" height="88" rx="19" fill="${NAVY}" stroke="#334155" stroke-width="2"/>
      <path d="M44 16 L71.5 38.5 V69 H52.5 V52.5 H35.5 V69 H16.5 V38.5 Z" fill="${BLUE}" transform="scale(0.9) translate(4.9,4.9)"/>
      <path d="M44 16 L71.5 38.5 H62 L44 25.4 L26 38.5 H16.5 Z" fill="${ACCENT}" transform="scale(0.9) translate(4.9,4.9)"/>
    </g>

    <text x="${cx}" y="256" text-anchor="${textAnchor}" font-family="${fontFamily}" font-size="30" font-weight="700" letter-spacing="2" fill="#94a3b8">${wordmarkTop}</text>
    <text x="${cx}" y="330" text-anchor="${textAnchor}" font-family="${fontFamily}" font-size="64" font-weight="800" fill="#ffffff">${headline}</text>
    <text x="${cx}" y="390" text-anchor="${textAnchor}" font-family="${fontFamily}" font-size="30" font-weight="500" fill="#cbd5e1">${tagline}</text>

    <text x="${cx}" y="560" text-anchor="${textAnchor}" font-family="${fontFamily}" font-size="24" font-weight="700" fill="#e2e8f0">${wordmarkBottom}</text>
  </svg>`;
}

async function generateOgImages() {
  await ensureDir(resolve(root, 'public/images/og'));

  const variants = [
    {
      file: 'aqar-default-ar.jpg',
      dir: 'rtl',
      wordmarkTop: 'نوفيكسا',
      headline: 'نوفيكسا عقار',
      tagline: 'اكتشف العقار المناسب لك في اليمن',
      wordmarkBottom: 'novixa-aqar.example',
    },
    {
      file: 'aqar-default-en.jpg',
      dir: 'ltr',
      wordmarkTop: 'NOVIXA',
      headline: 'Novixa Aqar',
      tagline: 'Discover the right property in Yemen',
      wordmarkBottom: 'novixa-aqar.example',
    },
  ];

  for (const variant of variants) {
    const svg = Buffer.from(ogSvg(variant));
    await sharp(svg).jpeg({ quality: 90 }).toFile(resolve(root, 'public/images/og', variant.file));
    console.log(`✓ images/og/${variant.file}`);
  }
}

async function main() {
  await generateIconSet();
  await generateOgImages();
  console.log('\nAll brand assets generated.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
