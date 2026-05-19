
const Professional = () => {
  return (
    <section id="professional" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="eyebrow">03 · Professional Work</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            A Decade at the Frontier
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--ink-1)' }}>
            <p>
              For nearly a decade, I've built my career on the simple belief that organisations should
              understand their built assets and business processes like technology products - as living
              systems that can be instrumented, iterated, and improved. Technology has become so fundamental
              to how organisations deliver value that it's now difficult to tell where the systems end and
              the experiences begin.
            </p>
            <p>
              Through my work, I'm drawn to the difficult problems that arise when we try to squeeze theory
              into phsyical constraints. I'm driven by my desire to understand the real-world applications of
              frontier technology and I live to solve the core problems we face every day in the places we
              spend our lives.
            </p>
            <p>
              In my day-to-day, I design and implement digital buildings - transforming traditional real estate
              into integrated, intelligent, and responsive environments. I translate high-level business
              objectives into actionable strategies and technology designs that are grounded in what clients
              actually need, not just what's making it's rounds on the latest Hype Cycle. The goal is always
              the same: demystify the path to digital transformation and ensure organisations make informed,
              intentional technology investments.
            </p>
          </div>

          <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden"
            style={{ boxShadow: 'var(--shadow-xl)' }}>
            <img
              src="/headshot.JPG"
              alt="André Bourgeois"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgb(90 67 87 / 0.04) 0%, rgb(31 75 83 / 0.03) 60%, rgb(10 46 54 / 0.04) 100%)', pointerEvents: 'none' }}
            />
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => window.open("https://www.linkedin.com/in/andrelbourgeois", "_blank", "noopener,noreferrer")}
            className="px-8 py-3 rounded-lg text-base font-medium border transition-colors duration-200"
            style={{ background: 'transparent', color: 'var(--deep-teal)', borderColor: 'var(--deep-teal)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--deep-teal)';
              e.currentTarget.style.color = 'var(--bone)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--deep-teal)';
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Professional;
