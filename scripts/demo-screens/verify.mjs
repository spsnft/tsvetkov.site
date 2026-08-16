// One-off verification: screenshots the live /hms See-System section at 390px.
// Not part of the repeatable asset pipeline — run manually against `npm run dev`.
import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:3000/en/hms';
const out = process.argv[3] || '/tmp/see-system-390.png';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });
const section = page.locator('#see-system');
await section.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await section.screenshot({ path: out });
console.log('Wrote', out);
await browser.close();
