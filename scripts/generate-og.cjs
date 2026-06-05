#!/usr/bin/env node
// Post-build script: injects per-route Open Graph meta tags into static HTML files.
// LinkedIn's crawler doesn't execute JS, so each route needs its own HTML with the right tags.
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://andrebourgeois.me';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DIST = path.join(__dirname, '..', 'dist');
const ARTICLES_SRC = path.join(__dirname, '..', 'src', 'articles');

function parseFrontmatter(raw) {
  const stripped = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
  const match = stripped.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const meta = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
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
  // Strip existing title, description, og:, and twitter: tags from the template
  let result = html
    .replace(/<title>[^<]*<\/title>\n?/g, '')
    .replace(/<meta\s+name="description"[^>]*\/>\n?/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*\/>\n?/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*\/>\n?/gi, '');
  // Inject fresh tags right after <head>
  return result.replace('<head>', '<head>\n' + tags);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

// Homepage
fs.writeFileSync(
  path.join(DIST, 'index.html'),
  injectMeta(baseHtml, buildMetaTags({
    title: 'André Bourgeois — Frontier Technology & Real-world Impact',
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
    title: 'Articles — André Bourgeois',
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
  const raw = fs.readFileSync(path.join(ARTICLES_SRC, file), 'utf-8');
  const meta = parseFrontmatter(raw);

  const title = (meta.title ? `${meta.title} — André Bourgeois` : slug);
  const description = meta.excerpt || meta.subtitle || '';
  // Support optional `image: /path/to/image.png` in frontmatter for per-article OG images
  const image = meta.image ? `${SITE_URL}${meta.image}` : DEFAULT_IMAGE;
  const url = `${SITE_URL}/articles/${slug}`;

  const articleDir = path.join(articlesDistDir, slug);
  ensureDir(articleDir);
  fs.writeFileSync(
    path.join(articleDir, 'index.html'),
    injectMeta(baseHtml, buildMetaTags({ title, description, url, image, type: 'article' }))
  );
  console.log(`  ✓ /articles/${slug}`);
}

console.log('\nOG meta injection complete.');
