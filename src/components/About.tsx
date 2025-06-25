import React from 'react';

const GradientDefs = () => (
  <defs>
    <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F24F22" stopOpacity="0.8" />
      <stop offset="33%" stopColor="#ED1A25" stopOpacity="0.8" />
      <stop offset="66%" stopColor="#612D90" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#314CA3" stopOpacity="0.8" />
    </linearGradient>
  </defs>
);

// Building icon (Lucide React Building)
const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#brand-gradient)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <GradientDefs />
    <path d="M3 22V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12" />
    <path d="M7 22v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
    <path d="M12 14v-4" />
    <path d="M10 22v-2" />
    <path d="M14 22v-2" />
  </svg>
);

// Cpu icon (Lucide React Cpu)
const CpuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#brand-gradient)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <GradientDefs />
    <rect x="7" y="7" width="10" height="10" rx="2" ry="2" />
    <path d="M12 9v6" />
    <path d="M9 12h6" />
    <path d="M4 12h1" />
    <path d="M19 12h1" />
    <path d="M12 4v1" />
    <path d="M12 19v1" />
    <path d="M7 7l-1-1" />
    <path d="M17 7l1-1" />
    <path d="M7 17l-1 1" />
    <path d="M17 17l1 1" />
  </svg>
);

// Bot icon (Lucide React Bot)
const BotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#brand-gradient)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <GradientDefs />
    <rect x="7" y="2" width="10" height="20" rx="5" ry="5" />
    <circle cx="12" cy="14" r="4" />
    <path d="M9 10h0" />
    <path d="M15 10h0" />
  </svg>
);

// BrainCircuit icon (Lucide React BrainCircuit)
const BrainCircuitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#brand-gradient)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <GradientDefs />
    <path d="M9 2a7 7 0 0 0-7 7c0 3.5 2.5 5.5 4 7 1.5 1.5 4 3.5 4 3.5s2.5-2 4-3.5c1.5-1.5 4-3.5 4-7a7 7 0 0 0-7-7" />
    <circle cx="9" cy="9" r="1" fill="url(#brand-gradient)" stroke="none" />
    <circle cx="15" cy="9" r="1" fill="url(#brand-gradient)" stroke="none" />
    <circle cx="12" cy="15" r="1" fill="url(#brand-gradient)" stroke="none" />
    <path d="M9 9l3 6" />
    <path d="M15 9l-3 6" />
  </svg>
);

// Users icon (Lucide React Users)
const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#brand-gradient)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <GradientDefs />
    <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
    <circle cx="9" cy="7" r="4" />
    <circle cx="17" cy="7" r="4" />
  </svg>
);

// Lightbulb icon (Lucide React Lightbulb)
const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#brand-gradient)"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <GradientDefs />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 1 7 7c0 3.5-2.5 5.5-4 7-1.5-1.5-4-3.5-4-7a7 7 0 0 1 7-7z" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connecting Innovation to Impact
            </h2>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Your built assets and business processes are <strong className="text-[#ED1A25]">dynamic, living systems</strong>.
                They're inseparable from the technology that fuels them and the people who use them. They need to evolve in ways
                that are informed by data and centred around the user.
              </p>

              <p>
                Today, the digital world is accelerating faster than the physical world can respond. My work lives at the intersection
                of these worlds. I help organisations bridge the gap, transforming emerging technology into grounded, real-world outcomes.
              </p>

              <p>
                When done right, this technology disappears into the experience, delivering value without drawing attention to itself.
                Whether I'm shaping solutions with company leadership, building alongside engineering teams, or exploring ideas through my own
                research, my focus is always the same: building technology that quietly elevates the experience.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Core Philosophy</h3>
              <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-foreground/90">
                "True value from technology isn't seen. It's felt. It should shape spaces and experiences
                without spectacle, and drive results that speak for themselves."
              </blockquote>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 w-fit">
                <BuildingIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Smart Buildings</h3>
              <p className="text-sm text-muted-foreground">
                Designing intelligent systems that adapt to human needs and environmental conditions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 w-fit">
                <CpuIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Internet of Things</h3>
              <p className="text-sm text-muted-foreground">
                Creating connected ecosystems that turn data into actionable insights.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 w-fit">
                <BotIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Robotics</h3>
              <p className="text-sm text-muted-foreground">
                Researching autonomous coordination and control in multi-agent systems.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 w-fit">
                <BrainCircuitIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the applications and impacts of generative and edge AI.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 w-fit">
                <UsersIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Technology Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Guiding teams and organisations through complex technology decisions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 w-fit">
                <LightbulbIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Innovation Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Making sense of emerging technology and its real-world opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
