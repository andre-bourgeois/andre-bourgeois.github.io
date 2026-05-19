export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

function parseFrontmatter(raw: string): { meta: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const content = match[2].trim();
  const meta: Record<string, string | string[]> = {};

  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else {
      meta[key] = value.replace(/^['"]|['"]$/g, '');
    }
  }

  return { meta, content };
}

const rawFiles = import.meta.glob('/src/articles/*.md', { as: 'raw', eager: true });

function buildArticles(): Article[] {
  return Object.entries(rawFiles)
    .map(([path, raw]) => {
      const slug = path.split('/').pop()!.replace('.md', '');
      const { meta, content } = parseFrontmatter(raw as string);
      return {
        slug,
        title: (meta.title as string) || slug,
        date: (meta.date as string) || '',
        tags: (meta.tags as string[]) || [],
        excerpt: (meta.excerpt as string) || '',
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const _articles = buildArticles();

export function getAllArticles(): Article[] {
  return _articles;
}

export function getLatestArticles(n = 3): Article[] {
  return _articles.slice(0, n);
}

export function getArticle(slug: string): Article | undefined {
  return _articles.find(a => a.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set(_articles.flatMap(a => a.tags));
  return Array.from(tags).sort();
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
