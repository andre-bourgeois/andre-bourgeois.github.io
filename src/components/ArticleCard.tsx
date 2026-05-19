import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ArticleMeta } from '@/lib/articles';
import { formatDate } from '@/lib/articles';

interface ArticleCardProps {
  article: ArticleMeta;
}

const tagStyles: Record<string, { background: string; color: string; border: string }> = {
  default: { background: 'rgba(92,126,131,0.12)', color: '#1F4B53', border: 'rgba(92,126,131,0.35)' },
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article
      className="rounded-lg border p-6 transition-all duration-300 cursor-default flex flex-col gap-4"
      style={{ background: 'var(--cream)', borderColor: 'var(--rule)' }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-3px)';
        el.style.boxShadow = 'var(--shadow-xl)';
        el.style.borderColor = 'var(--mist-teal)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.transform = '';
        el.style.boxShadow = '';
        el.style.borderColor = 'var(--rule)';
      }}
    >
      <div className="flex-1">
        <p
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: 'var(--brass)' }}
        >
          {formatDate(article.date)}
        </p>

        <h3
          className="text-xl font-semibold mb-2 leading-snug"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.025em', color: 'var(--ink-1)' }}
        >
          {article.title}
        </h3>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-2)' }}>
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                background: tagStyles.default.background,
                color: tagStyles.default.color,
                borderColor: tagStyles.default.border,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        to={`/articles/${article.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
        style={{ color: 'var(--deep-teal)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--mist-teal)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--deep-teal)')}
      >
        Read article <ArrowRight size={14} />
      </Link>
    </article>
  );
};

export default ArticleCard;
