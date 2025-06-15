
import { ArrowRight, Building, Monitor } from 'lucide-react';

const Professional = () => {
  const professionalWork = [
    {
      title: "Adaptive Building Intelligence Platform",
      description: "IoT-driven system that learns occupancy patterns and optimizes HVAC, lighting, and security in real-time. Deployed across 12 commercial buildings.",
      icon: Building,
      tags: ["IoT", "Machine Learning", "Building Automation"],
      outcome: "32% energy reduction, 89% occupant satisfaction increase"
    },
  ];

  return (
    <section id="professional" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional 
            <span className="text-primary"> Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise solutions that demonstrate technology's power to enhance spaces 
            and experiences at scale.
          </p>
        </div>
        <div className="space-y-6 text-center text-lg text-foreground leading-relaxed">
          <p>
            Case studies coming soon.
          </p>
        </div>
        {/*
        <div className="space-y-8">
          {professionalWork.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  
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

                  
                  <div className="lg:w-80 space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-primary mb-1">Key Outcome</p>
                      <p className="text-foreground font-semibold">{project.outcome}</p>
                    </div>
                    
                    <button className="w-full lg:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2 group-hover:gap-3">
                      View Case Study
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Professional;
