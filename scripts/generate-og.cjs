#!/usr/bin/env node
// Post-build script: generates the OG image and injects per-route Open Graph meta tags.
// LinkedIn's crawler doesn't execute JS, so each route needs its own HTML with the right tags.
const fs   = require('fs');
const path = require('path');

const SITE_URL    = 'https://andrebourgeois.me';
const DEFAULT_IMAGE = `${SITE_URL}/og-card.png`;
const DIST        = path.join(__dirname, '..', 'dist');
const PUBLIC      = path.join(__dirname, '..', 'public');
const ARTICLES_SRC = path.join(__dirname, '..', 'src', 'articles');

// ---------------------------------------------------------------------------
// 1. Generate og-card.png — logo centred on bone background, 1200×627
// ---------------------------------------------------------------------------
async function generateOgImage() {
  const sharp = require('sharp');
  const logoPath = path.join(PUBLIC, 'logo.png');
  // Write directly to dist/ — vite build already ran and copied the old public/og-card.png,
  // so we must overwrite dist/ here to get the freshly generated dimensions into the deploy.
  const outPath  = path.join(DIST, 'og-card.png');

  const W = 1200, H = 627;
  const LOGO_H = 520; // tall enough to stay crisp when LinkedIn scales the card down

  // Resize logo with Lanczos kernel then sharpen edges
  const logoResized = await sharp(logoPath)
    .resize({ height: LOGO_H, fit: 'inside', kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.6, m1: 1.0, m2: 0.5 })
    .toBuffer();

  const { width: lw, height: lh } = await sharp(logoResized).metadata();
  const left = Math.round((W - lw) / 2);
  const top  = Math.round((H - lh) / 2);

  await sharp({
    create: { width: W, height: H, channels: 4, background: { r: 250, g: 250, b: 250, alpha: 1 } },
  })
    .composite([{ input: logoResized, left, top }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`  ✓ og-card.png (${W}×${H})`);
}

// ---------------------------------------------------------------------------
// 2. Inject per-route OG tags into static HTML
// ---------------------------------------------------------------------------
function parseFrontmatter(raw) {
  const stripped = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
  const match = stripped.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const meta = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key   = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    } else {
      meta[key] = value.replace(/^['"]|['"]$/g, '');
    }
  }
  return meta;
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildMetaTags({ title, description, url, image, type }) {
  return [
    `  <title>${esc(title)}</title>`,
    `  <meta name="description" content="${esc(description)}" />`,
    `  <meta property="og:title" content="${esc(title)}" />`,
    `  <meta property="og:description" content="${esc(description)}" />`,
    `  <meta property="og:type" content="${type || 'website'}" />`,
    `  <meta property="og:url" content="${esc(url)}" />`,
    `  <meta property="og:image" content="${esc(image)}" />`,
    `  <meta property="og:site_name" content="André Bourgeois" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${esc(title)}" />`,
    `  <meta name="twitter:description" content="${esc(description)}" />`,
    `  <meta name="twitter:image" content="${esc(image)}" />`,
  ].join('\n');
}

function injectMeta(html, tags) {
  let result = html
    .replace(/<title>[^<]*<\/title>\n?/g, '')
    .replace(/<meta\s+name="description"[^>]*\/>\n?/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*\/>\n?/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*\/>\n?/gi, '');
  return result.replace('<head>', '<head>\n' + tags);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function injectAllRoutes() {
  const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  // Homepage
  fs.writeFileSync(
    path.join(DIST, 'index.html'),
    injectMeta(baseHtml, buildMetaTags({
      title: 'André Bourgeois',
      description: 'I help organisations bridge the gap between frontier technology and the real world, building technology that is intentional, impactful, and invisible.',
      url: SITE_URL,
      image: DEFAULT_IMAGE,
      type: 'website',
    }))
  );
  console.log('  ✓ homepage');

  // Articles listing
  const articlesDistDir = path.join(DIST, 'articles');
  ensureDir(articlesDistDir);
  fs.writeFileSync(
    path.join(articlesDistDir, 'index.html'),
    injectMeta(baseHtml, buildMetaTags({
      title: 'Articles',
      description: 'Thinking on frontier technology, digital infrastructure, and the gap between where technology is and where it needs to be.',
      url: `${SITE_URL}/articles`,
      image: DEFAULT_IMAGE,
      type: 'website',
    }))
  );
  console.log('  ✓ /articles');

  // Per-article pages
  const mdFiles = fs.readdirSync(ARTICLES_SRC).filter(f => f.endsWith('.md'));
  for (const file of mdFiles) {
    const slug = file.replace('.md', '');
    const raw  = fs.readFileSync(path.join(ARTICLES_SRC, file), 'utf-8');
    const meta = parseFrontmatter(raw);

    const title       = meta.title || slug;
    const description = meta.excerpt || meta.subtitle || '';
    // Support optional `image: /path/to/image.png` in article frontmatter
    const image = meta.image ? `${SITE_URL}${meta.image}` : DEFAULT_IMAGE;
    const url   = `${SITE_URL}/articles/${slug}`;

    const articleDir = path.join(articlesDistDir, slug);
    ensureDir(articleDir);
    fs.writeFileSync(
      path.join(articleDir, 'index.html'),
      injectMeta(baseHtml, buildMetaTags({ title, description, url, image, type: 'article' }))
    );
    console.log(`  ✓ /articles/${slug}`);
  }
}

(async () => {
  await generateOgImage();
  await injectAllRoutes();
  console.log('\nOG meta injection complete.');
})();
