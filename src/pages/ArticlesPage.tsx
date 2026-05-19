import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles, getAllTags } from '@/lib/articles';

const ArticlesPage = () => {
  const articles = getAllArticles();
  const tags = getAllTags();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(
    () => activeTag ? articles.filter(a => a.tags.includes(activeTag)) : articles,
    [activeTag, articles]
  );

  return (
    <div className="min-h-screen bg-background relative">
      <div className="grid-bg" aria-hidden="true" />
      <div className="relative z-10">
        <Navigation />

        <main className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="mb-16">
              <span className="eyebrow">Articles</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Everything I've Written
              </h1>
              <p className="text-xl max-w-2xl" style={{ color: 'var(--ink-3)' }}>
                A complete archive of my writing on frontier technology, smart buildings,
                and the challenge of making complex systems work quietly in the real world.
              </p>
            </div>

            {/* Tag filters */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                <button
                  onClick={() => setActiveTag(null)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150"
                  style={{
                    background: activeTag === null ? 'var(--deep-teal)' : 'transparent',
                    color: activeTag === null ? 'var(--bone)' : 'var(--ink-2)',
                    borderColor: activeTag === null ? 'var(--deep-teal)' : 'var(--rule)',
                  }}
                >
                  All
                </button>
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150"
                    style={{
                      background: activeTag === tag ? 'var(--deep-teal)' : 'transparent',
                      color: activeTag === tag ? 'var(--bone)' : 'var(--ink-2)',
                      borderColor: activeTag === tag ? 'var(--deep-teal)' : 'var(--rule)',
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            {/* Articles grid */}
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(article => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <p
                className="text-sm font-medium uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: 'var(--brass)' }}
              >
                No articles match that filter.
              </p>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ArticlesPage;
