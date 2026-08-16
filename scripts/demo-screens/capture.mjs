// Screenshots the static HTML mockups in this directory into /public/hms/screens.
// Run: node scripts/demo-screens/capture.mjs [name...]
// With no args, captures all four screens.
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../../public/hms/screens');
fs.mkdirSync(outDir, { recursive: true });

// Mobile screens capture their natural content height (fullPage) — the
// carousel in SeeSystem.tsx unifies slide heights and fades overflow via
// CSS, so the PNGs themselves don't need to be pre-cropped to 844px.
const SCREENS = [
  {
    name: 'guest-booking',
    file: 'guest-booking.html',
    viewport: { width: 390, height: 844 },
    fullPage: true,
  },
  {
    name: 'dashboard-mobile',
    file: 'dashboard-mobile.html',
    viewport: { width: 390, height: 844 },
    fullPage: true,
  },
  {
    name: 'dashboard-desktop',
    file: 'dashboard-desktop.html',
    viewport: { width: 1280, height: 800 },
    fullPage: false,
  },
  {
    name: 'confirmation-email',
    file: 'confirmation-email.html',
    viewport: { width: 390, height: 844 },
    fullPage: true,
  },
];

const requested = process.argv.slice(2);
const targets = requested.length
  ? SCREENS.filter((s) => requested.includes(s.name))
  : SCREENS;

if (!targets.length) {
  console.error('No matching screens for:', requested.join(', '));
  process.exit(1);
}

const browser = await chromium.launch();
for (const screen of targets) {
  const page = await browser.newPage({
    viewport: screen.viewport,
    deviceScaleFactor: 3,
  });
  const filePath = path.join(__dirname, screen.file);
  await page.goto(`file://${filePath}`);
  await page.evaluate(() => document.fonts.ready);
  const outPath = path.join(outDir, `${screen.name}.png`);
  await page.screenshot({ path: outPath, fullPage: screen.fullPage });
  console.log('Wrote', path.relative(process.cwd(), outPath));
  await page.close();
}
await browser.close();
