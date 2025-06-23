
import { Building, Cpu, Lightbulb, Users, BrainCircuit, Workflow, Bot } from 'lucide-react';

const About = () => {
  const getIconStyle = (iconName: string) => {
    let svgPath = '';
    
    switch (iconName) {
      case 'Building':
        svgPath = 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z M6 12h4 M6 16h4 M16 16h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2 M16 8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2 M16 22v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4';
        break;
      case 'Cpu':
        svgPath = 'M4 16v-2.38C4 11.5 2.97 10.5 3 8.5a4.5 4.5 0 0 1 4.5-4.5c2 .03 3-.97 5.12-1H15a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2z M9 9h.01 M9 13h.01 M13 9h.01 M13 13h.01';
        break;
      case 'Bot':
        svgPath = 'M12 8V4H8 M16 8V4h4 M16 16v4h4 M8 16v4H4 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M8.5 17.5l7-7 M15.5 17.5l-7-7';
        break;
      case 'BrainCircuit':
        svgPath = 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z M9 12h.01 M15 12h.01 M12 16h.01 M12 8h.01';
        break;
      case 'Users':
        svgPath = 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75';
        break;
      case 'Lightbulb':
        svgPath = 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5 M9 18h6 M10 22h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z';
        break;
      default:
        svgPath = '';
    }

    return {
      width: '32px',
      height: '32px',
      background: 'linear-gradient(135deg, #F24F22 0%, #ED1A25 33%, #612D90 66%, #314CA3 100%)',
      WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='${svgPath}'/></svg>`
      )}") center/contain no-repeat`,
      mask: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='${svgPath}'/></svg>`
      )}") center/contain no-repeat`,
    };
  };

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
                Your built assets and business processes are <strong className="text-foreground">dynamic, living systems</strong>.
                They're inseparable from the technology that fuels them and the people who use them. They need to evolve in ways
                that are informed by data and centred around the user.
              </p>
              
              <p>
                Today, the digital world is accelerating faster than the physical world can respond. My work lives at the intersection
                of these worlds. I help organisations bridge the gap, transforming emerging technology into grounded, real-world outcomes.
              </p>
              
              <p>
                When done right, this technology disappears into the experience, delivering value without drawing attention to itself.
                Whether I’m shaping solutions with company leadership, building alongside engineering teams, or exploring ideas through my own
                research, my focus is always the same: building technology that quietly elevates the experience.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Core Philosophy</h3>
              <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-foreground/90">
              “True value from technology isn’t seen. It’s felt. It should shape spaces and experiences
              without spectacle, and drive results that speak for themselves.”
              </blockquote>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={getIconStyle('Building')} className="mb-4" />
              <h3 className="font-semibold mb-2">Smart Buildings</h3>
              <p className="text-sm text-muted-foreground">
                Designing intelligent systems that adapt to human needs and environmental conditions.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={getIconStyle('Cpu')} className="mb-4" />
              <h3 className="font-semibold mb-2">Internet of Things</h3>
              <p className="text-sm text-muted-foreground">
                Creating connected ecosystems that turn data into actionable insights.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={getIconStyle('Bot')} className="mb-4" />
              <h3 className="font-semibold mb-2">Robotics</h3>
              <p className="text-sm text-muted-foreground">
                Researching autonomous coordination and control in multi-agent systems.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={getIconStyle('BrainCircuit')} className="mb-4" />
              <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the applications and impacts of generative and edge AI.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={getIconStyle('Users')} className="mb-4" />
              <h3 className="font-semibold mb-2">Technology Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Guiding teams and organisations through complex technology decisions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div style={getIconStyle('Lightbulb')} className="mb-4" />
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
