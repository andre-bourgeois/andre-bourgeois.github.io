
const About = () => {
  const tiles = [
    { icon: '/icons/building-icon.svg', title: 'Smart buildings',         desc: 'Intelligent systems that adapt to human needs and environmental conditions.' },
    { icon: '/icons/cpu-icon.svg',      title: 'Internet of things',      desc: 'Connected ecosystems that turn data into actionable insights.' },
    { icon: '/icons/bot-icon.svg',      title: 'Robotics',                desc: 'Autonomous coordination and control in multi-agent systems.' },
    { icon: '/icons/brain-icon.svg',    title: 'Artificial intelligence', desc: 'The applications and impacts of generative and edge AI.' },
    { icon: '/icons/users-icon.svg',    title: 'Technology leadership',   desc: 'Guiding teams and organisations through complex technology decisions.' },
    { icon: '/icons/bulb-icon.svg',     title: 'Innovation strategy',     desc: 'Making sense of emerging technology and its real-world opportunities.' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="eyebrow">02 · About</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Innovation in practice
            </h2>

            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--ink-1)' }}>
              <p>
                Your built assets and business processes are{' '}
                <strong style={{ color: 'var(--brass)', fontWeight: 600 }}>dynamic, living systems</strong>.
                They're inseparable from the technology that fuels them and the people who use them. They need to evolve in ways
                that are informed by data and centred around the user.
              </p>

              <p>
                Today, the digital world is accelerating faster than the physical world can respond. My work lives in this gap.
                I help organisations make sense of emerging technology and translate it into grounded, real-world outcomes.
              </p>

              <p>
                When done right,{' '}
                <strong style={{ color: 'var(--mist-teal)', fontWeight: 600 }}>this technology disappears into the experience</strong>,
                delivering value without drawing attention to itself. The context might change - whether I'm advising leadership teams,
                coordinating engineering efforts, or conducting independent research - but the focus never does: building technology
                that quietly elevates the experience.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Core philosophy</h3>
              <blockquote
                className="pl-6 text-lg leading-relaxed"
                style={{
                  borderLeft: '2px solid var(--mist-teal)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  color: 'var(--ink-1)',
                  letterSpacing: '-0.02em',
                }}
              >
                "True value from technology isn't seen. It's felt. It should shape spaces and experiences
                without spectacle, and drive results that speak for themselves."
              </blockquote>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-2 gap-6">
            {tiles.map(tile => (
              <div
                key={tile.title}
                className="rounded-lg p-6 border transition-all duration-300 cursor-default"
                style={{ background: 'var(--cream)', borderColor: 'var(--rule)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-3px)';
                  el.style.boxShadow = 'var(--shadow-lg)';
                  el.style.borderColor = 'var(--mist-teal)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = '';
                  el.style.boxShadow = '';
                  el.style.borderColor = 'var(--rule)';
                }}
              >
                <div className="mb-4">
                  <img src={tile.icon} alt={tile.title} className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2 text-base" style={{ letterSpacing: '-0.02em' }}>{tile.title}</h3>
                <p className="text-sm leading-snug" style={{ color: 'var(--ink-3)' }}>{tile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
