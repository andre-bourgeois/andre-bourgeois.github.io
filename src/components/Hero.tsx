
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="animate-fade-in max-w-4xl">
          <span className="eyebrow">01 · André Bourgeois</span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Good technology leaves <em style={{ fontStyle: 'normal', color: 'var(--mist-teal)' }}>no</em> fingerprints.
          </h1>

          <div className="mb-8">
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed min-h-[2.5rem]">
              <TypingAnimation />
            </p>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: 'var(--ink-1)' }}>
              I design technology that blends seamlessly into the world around us.
              Intentional, impactful, and invisible.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button
              onClick={() => scrollToSection('about')}
              className="px-7 py-3 rounded-lg text-base font-medium transition-colors duration-200"
              style={{ background: 'var(--deep-teal)', color: 'var(--bone)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--slate-teal)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--deep-teal)')}
            >
              Explore my work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-1 py-3 text-base font-medium transition-colors duration-200"
              style={{ color: 'var(--deep-teal)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--mist-teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--deep-teal)')}
            >
              Let's connect →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
