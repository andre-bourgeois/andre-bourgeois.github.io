
import { ArrowRight, Cpu, Zap, Bike } from 'lucide-react';

const Projects = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Color mapping for tag styling
  const tagColorMap = {
    orange: { bg: 'bg-[#F24F22]/20', text: 'text-[#F24F22]', border: 'border-[#F24F22]/30' },
    red: { bg: 'bg-[#ED1A25]/20', text: 'text-[#ED1A25]', border: 'border-[#ED1A25]/30' },
    purple: { bg: 'bg-[#612D90]/20', text: 'text-[#612D90]', border: 'border-[#612D90]/30' },
    blue: { bg: 'bg-[#314CA3]/20', text: 'text-[#314CA3]', border: 'border-[#314CA3]/30' },
    default: { bg: 'bg-gray-500/20', text: 'text-gray-500', border: 'border-gray-500/30' }
  };
  
  const projects = [
    {
      title: "Park My Bike",
      description: "An edge-AI model designed to detect bicycles at bicycle bays, with the goal of helping riders determine the location and amount of available parking around London.",
      icon: Bike,
      tags: [
        { name: "Edge Computing", color: "orange" },
        { name: "Object Detection", color: "blue" },
        { name: "IoT Architecture", color: "red" }
      ],
      outcome: "An object-detection model suitable for deployment onto edge devices.",
      repo: "https://github.com/andre-bourgeois/park-my-bike?tab=readme-ov-file"
    },
    {
      title: "IR Occupancy",
      description: "Testing the feasability of using infrared beam-break sensors for occupancy monitoring, in contrast to the expensive, AI-driven devices that are commonly used today.",
      icon: Zap,
      tags: [
        { name: "Custom PCB", color: "purple" },
        { name: "Occupancy Monitoring", color: "orange" },
        { name: "IoT Architecture", color: "blue" }
      ],
      outcome: "A low-cost, off-the-shelf method of occupancy monitoring.",
      repo: "https://github.com/andre-bourgeois/ir-beam-break-occupancy-monitor"
    },
  ];

  const getTagStyle = (tag) => {
    // Support both string and object formats for backward compatibility
    const colorKey = typeof tag === 'string' ? 'default' : (tag.color || 'default');
    return tagColorMap[colorKey] || tagColorMap.default;
  };

  const getTagName = (tag) => {
    return typeof tag === 'string' ? tag : tag.name;
  };

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
            with emerging technology.
          </p>
        </div>
        <div className="space-y-6 text-center text-lg text-foreground leading-relaxed">
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  
                  <div className="flex items-start gap-6 lg:flex-1">
                    <div className="bg-gradient-to-br from-[#F24F22]/80 via-[#ED1A25]/80 via-[#612D90]/80 to-[#314CA3]/80 p-3 rounded-lg">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => {
                          const tagStyle = getTagStyle(tag);
                          return (
                            <span 
                              key={tagIndex}
                              className={`${tagStyle.bg} ${tagStyle.text} border ${tagStyle.border} px-3 py-1 rounded-full text-sm font-medium`}
                            >
                              {getTagName(tag)}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-80 space-y-4">
                    <div className="bg-gradient-to-br from-[#F24F22]/80 via-[#ED1A25]/80 via-[#612D90]/80 to-[#314CA3]/80 rounded-lg p-4">
                      <p className="text-sm font-medium text-white mb-1">Key Outcome</p>
                      <p className="text-white font-semibold">{project.outcome}</p>
                    </div>
                    <button onClick={() => window.open(project.repo, "_blank", "noopener,noreferrer")}
                      className="w-full lg:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2 group-hover:gap-3">
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
          <button
            onClick={scrollToContact}
            className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-medium bg-background">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
