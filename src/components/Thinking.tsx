import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { getLatestArticles } from '@/lib/articles';

const Thinking = () => {
  const latest = getLatestArticles(3);

  return (
    <section id="thinking" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="eyebrow">05 · Thinking</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thinking &amp; Writing
          </h2>
          <p className="text-xl max-w-2xl" style={{ color: 'var(--ink-3)' }}>
            Notes on emerging technology — AI, spatial computing, IoT, robotics — and
            the work of making technology disappear into everyday life.
          </p>
        </div>

        {latest.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {latest.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            <Link
              to="/thinking"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border font-medium transition-colors duration-200"
              style={{ background: 'transparent', color: 'var(--deep-teal)', borderColor: 'var(--deep-teal)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--deep-teal)';
                (e.currentTarget as HTMLElement).style.color = 'var(--bone)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'var(--deep-teal)';
              }}
            >
              View all articles <ArrowRight size={16} />
            </Link>
          </>
        ) : (
          <p
            className="text-sm font-medium uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: 'var(--brass)' }}
          >
            Articles coming soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default Thinking;
