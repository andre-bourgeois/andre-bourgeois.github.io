import { Building, Cpu, Lightbulb, Users, BrainCircuit, Bot } from 'lucide-react';

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
          <div className="grid grid-cols-2 gap-10 relative">
            {/* Hidden SVG definitions for gradients */}
            <svg
              className="absolute w-0 h-0"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F24F22" />
                  <stop offset="33%" stopColor="#ED1A25" />
                  <stop offset="66%" stopColor="#612D90" />
                  <stop offset="100%" stopColor="#314CA3" />
                </linearGradient>
              </defs>
            </svg>

            {[
              {
                Icon: Building,
                title: 'Smart Buildings',
                description: 'Designing intelligent systems that adapt to human needs and environmental conditions.',
              },
              {
                Icon: Cpu,
                title: 'Internet of Things',
                description: 'Creating connected ecosystems that turn data into actionable insights.',
              },
              {
                Icon: Bot,
                title: 'Robotics',
                description: 'Researching autonomous coordination and control in multi-agent systems.',
              },
              {
                Icon: BrainCircuit,
                title: 'Artificial Intelligence',
                description: 'Exploring the applications and impacts of generative and edge AI.',
              },
              {
                Icon: Users,
                title: 'Technology Leadership',
                description: 'Guiding teams and organisations through complex technology decisions.',
              },
              {
                Icon: Lightbulb,
                title: 'Innovation Strategy',
                description: 'Making sense of emerging technology and its real-world opportunities.',
              },
            ].map(({ Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 w-fit">
                  <Icon
                    className="w-8 h-8"
                    stroke="url(#icon-gradient)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
