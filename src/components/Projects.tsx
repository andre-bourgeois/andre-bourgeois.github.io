
import { ArrowRight, Cpu, Zap, Bike } from 'lucide-react';

const tagStyles = {
  teal:  { background: 'rgba(92,126,131,0.12)', color: '#1F4B53', border: 'rgba(92,126,131,0.35)' },
  slate: { background: 'rgba(31,75,83,0.10)',   color: '#1F4B53', border: 'rgba(31,75,83,0.30)' },
  plum:  { background: 'rgba(90,67,87,0.14)',   color: '#3F2F3D', border: 'rgba(90,67,87,0.35)' },
};

type TagColor = keyof typeof tagStyles;

interface Tag {
  name: string;
  color: TagColor;
}

interface Project {
  title: string;
  description: string;
  Icon: React.ElementType;
  tags: Tag[];
  outcome: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "Park My Bike",
    description: "An edge-AI model that detects bicycles at cycle bays, helping riders find available parking across London without relying on centralised infrastructure.",
    Icon: Bike,
    tags: [
      { name: "Edge Computing",   color: "teal" },
      { name: "Object Detection", color: "plum" },
      { name: "IoT Architecture", color: "slate" },
    ],
    outcome: "An object-detection model suitable for deployment onto edge devices.",
    repo: "https://github.com/andre-bourgeois/park-my-bike?tab=readme-ov-file",
  },
  {
    title: "IR Occupancy",
    description: "Testing the feasibility of infrared beam-break sensors for occupancy monitoring - a low-cost alternative to the expensive, AI-driven devices that have become the default.",
    Icon: Zap,
    tags: [
      { name: "Custom PCB",           color: "plum" },
      { name: "Occupancy Monitoring", color: "teal" },
      { name: "IoT Architecture",     color: "slate" },
    ],
    outcome: "A low-cost, off-the-shelf method of occupancy monitoring.",
    repo: "https://github.com/andre-bourgeois/ir-beam-break-occupancy-monitor",
  },
];

const Projects = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="eyebrow">04 · Personal Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personal Projects
          </h2>
          <p className="text-xl max-w-2xl" style={{ color: 'var(--ink-3)' }}>
            Experimental and open-source work exploring new possibilities with emerging technology.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="rounded-lg border overflow-hidden transition-all duration-300 cursor-default"
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
              <div className="p-8 flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Icon + main content */}
                <div className="flex items-start gap-6 lg:flex-1">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ background: 'var(--brand-gradient)' }}
                  >
                    <project.Icon className="w-7 h-7" style={{ color: 'var(--bone)' }} />
                  </div>

                  <div className="flex-1">
                    <span
                      className="block text-xs font-medium uppercase mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: 'var(--brass)' }}
                    >
                      {String(index + 1).padStart(2, '0')} · Project
                    </span>
                    <h3 className="text-2xl font-semibold mb-3" style={{ letterSpacing: '-0.025em' }}>
                      {project.title}
                    </h3>
                    <p className="leading-relaxed mb-4" style={{ color: 'var(--ink-2)' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => {
                        const s = tagStyles[tag.color];
                        return (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm font-medium border"
                            style={{ background: s.background, color: s.color, borderColor: s.border }}
                          >
                            {tag.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Aside: outcome + CTA */}
                <div className="lg:w-72 flex flex-col gap-4">
                  <div
                    className="rounded-lg p-4 border"
                    style={{ background: 'var(--bg-1, var(--bone))', borderColor: 'var(--rule)' }}
                  >
                    <p
                      className="text-xs font-medium uppercase mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: 'var(--brass)' }}
                    >
                      Key outcome
                    </p>
                    <p className="font-medium leading-snug" style={{ color: 'var(--ink-1)' }}>
                      {project.outcome}
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(project.repo, "_blank", "noopener,noreferrer")}
                    className="w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                    style={{ background: 'var(--deep-teal)', color: 'var(--bone)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--slate-teal)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--deep-teal)')}
                  >
                    View project <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-6" style={{ color: 'var(--ink-3)' }}>
            Have a problem that needs a fresh approach?
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-lg border font-medium transition-colors duration-200"
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
            Discuss your project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
