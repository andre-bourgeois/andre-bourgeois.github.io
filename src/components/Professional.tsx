
const Professional = () => {
  return (
    <section id="professional" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="eyebrow">03 · Professional work</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional work
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--ink-1)' }}>
            <p>
              For nearly a decade, I've built my career on the simple belief that organisations can
              understand their built assets and business processes like technology products.
              Technology has become such a fundamental driver in how organisations deliver value —
              to both their customers and employees — that it's difficult to tell where the systems
              end and the experiences begin. If these problems were puzzles, they'd be all ocean.
            </p>
            <p>
              As a Solutions Architect, I thrive on exploring these systems and experiences. I'm driven
              by my desire to understand the real-world applications of frontier technology. I live to
              solve the core problems we face every day in the places we spend our lives.
            </p>
            <p>
              More concretely, through my work as a Solutions Architect at Hereworks, I play a crucial
              role in designing and implementing smart buildings, transforming traditional workplaces
              into integrated, intelligent, and responsive environments. I translate high-level business
              objectives into actionable strategies and technology designs aligned with my clients'
              unique aspirations. My aim is to demystify the path to digital transformation and empower
              organisations to harness the full potential of informed, intentional technology investments.
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
              style={{ background: 'var(--brand-gradient-soft)', pointerEvents: 'none' }}
            />
          </div>
        </div>

        <div className="flex justify-center mt-12">
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
