
import { ArrowRight, Cpu, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Distributed IoT Architecture",
      description: "Scalable edge computing framework for processing building telemetry data locally while maintaining cloud connectivity for insights.",
      icon: Cpu,
      tags: ["Edge Computing", "IoT Architecture", "Data Processing"],
      outcome: "99.9% uptime, sub-100ms response times"
    },
    {
      title: "Robotic Space Management System",
      description: "Autonomous robots integrated with building systems for cleaning, security patrols, and inventory management in commercial spaces.",
      icon: Zap,
      tags: ["Robotics", "Automation", "Space Management"],
      outcome: "60% operational cost reduction"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personal 
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experimental and open-source projects that explore new possibilities 
            in connected systems and automation.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-6 lg:flex-1">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Outcome and CTA */}
                  <div className="lg:w-80 space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-primary mb-1">Key Outcome</p>
                      <p className="text-foreground font-semibold">{project.outcome}</p>
                    </div>
                    
                    <button className="w-full lg:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2 group-hover:gap-3">
                      View Project
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on your next project?
          </p>
          <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-medium bg-background">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
