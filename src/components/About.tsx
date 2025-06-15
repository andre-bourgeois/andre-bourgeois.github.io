import { Building, Cpu, Lightbulb, Users, BrainCircuit, Workflow, Bot } from 'lucide-react';

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
                Your built assets and business processes are <strong className="text-foreground">dynamic, living systems</strong>.
                They're inseparable from the technology that fuels them and the people who use them. They need to evolve in ways
                that are informed by data and centred around the user.
              </p>
              
              <p>
                Today, the digital world is accelerating faster than the physical world can respond. My work lives at the intersection
                of these worlds. <br /> I help organisations bridge the gap, transforming emerging technology into grounded, real-world outcomes.
              </p>
              
              <p>
                When done right, this technology disappears into the experience, delivering value without drawing attention to itself.
                Whether I’m shaping solutions with company leadership, building alongside tech teams, or exploring ideas through my own
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
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Smart Buildings</h3>
              <p className="text-sm text-muted-foreground">
                Designing intelligent systems that adapt to human needs and environmental conditions.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Cpu className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Internet of Things</h3>
              <p className="text-sm text-muted-foreground">
                Creating connected ecosystems that turn data into actionable insights.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Bot className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Robotics</h3>
              <p className="text-sm text-muted-foreground">
                Researching autonomous coordination and control in multi-agent systems.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BrainCircuit className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the applications and impacts of generative and edge AI.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Technology Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Guiding teams and organisations through complex technology decisions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Lightbulb className="w-8 h-8 text-primary mb-4" />
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
