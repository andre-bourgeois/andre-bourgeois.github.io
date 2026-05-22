import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getArticle, formatDate } from '@/lib/articles';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <Navigate to="/articles" replace />;

  return (
    <div className="min-h-screen bg-background relative">
      <div className="grid-bg" aria-hidden="true" />
      <div className="relative z-10">
        <Navigation />

        <main className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-6">

            {/* Back link */}
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium mb-12 transition-colors duration-150"
              style={{ color: 'var(--ink-3)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--deep-teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-3)')}
            >
              <ArrowLeft size={14} /> All articles
            </Link>

            {/* Article header */}
            <header className="mb-12">
              <p
                className="text-xs font-medium uppercase mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: 'var(--brass)' }}
              >
                {formatDate(article.date)}
              </p>

              <h1
                className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.035em', color: 'var(--ink-1)' }}
              >
                {article.title}
              </h1>

              {article.subtitle && (
                <p className="text-xl font-medium mb-4 leading-snug" style={{ color: 'var(--mist-teal)' }}>
                  {article.subtitle}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      background: 'rgba(92,126,131,0.12)',
                      color: '#1F4B53',
                      borderColor: 'rgba(92,126,131,0.35)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </header>

            {/* Article body */}
            <div
              className="prose prose-lg max-w-none"
              style={{
                '--tw-prose-body': 'var(--ink-1)',
                '--tw-prose-headings': 'var(--ink-1)',
                '--tw-prose-lead': 'var(--ink-2)',
                '--tw-prose-links': 'var(--deep-teal)',
                '--tw-prose-bold': 'var(--ink-1)',
                '--tw-prose-counters': 'var(--ink-3)',
                '--tw-prose-bullets': 'var(--mist-teal)',
                '--tw-prose-hr': 'var(--rule)',
                '--tw-prose-quotes': 'var(--ink-1)',
                '--tw-prose-quote-borders': 'var(--mist-teal)',
                '--tw-prose-captions': 'var(--ink-3)',
                '--tw-prose-code': 'var(--deep-teal)',
                '--tw-prose-pre-code': 'var(--bone)',
                '--tw-prose-pre-bg': 'var(--deep-teal)',
                '--tw-prose-th-borders': 'var(--rule)',
                '--tw-prose-td-borders': 'var(--rule)',
                fontFamily: "'Inter', system-ui, sans-serif",
              } as React.CSSProperties}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ArticlePage;
