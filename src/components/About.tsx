import { Building, Cpu, Lightbulb, Users, BrainCircuit, Workflow, Bot } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building the Future of 
              <span className="text-primary block">Connected Spaces</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I believe buildings and businesses are <strong className="text-foreground">dynamic systems</strong>, 
                not static infrastructure. They should be treated like products: constantly iterating, 
                evolving, informed by data, and centered around the user.
              </p>
              
              <p>
                My work spans <strong className="text-primary">smart buildings</strong>, 
                <strong className="text-primary"> IoT systems</strong>, and emerging technologies 
                like robotics and digital twins. I help organizations understand and implement 
                advanced technology that creates real value in real-world environments.
              </p>
              
              <p>
                Whether I'm architecting solutions for startup founders, advising CTOs, 
                or collaborating with tech teams, my focus remains constant: technology 
                that enhances without drawing attention to itself.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Core Philosophy</h3>
              <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-foreground/90">
                "When done right technology disappears into the experience,
                delivering value without drawing attention to itself."
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
