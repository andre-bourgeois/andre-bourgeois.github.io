
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

  const getTagColor = (index: number) => {
    const colors = [
      { bg: 'bg-[#F24F22]/20', text: 'text-[#F24F22]', border: 'border-[#F24F22]/30' },
      { bg: 'bg-[#ED1A25]/20', text: 'text-[#ED1A25]', border: 'border-[#ED1A25]/30' },
      { bg: 'bg-[#612D90]/20', text: 'text-[#612D90]', border: 'border-[#612D90]/30' },
      { bg: 'bg-[#314CA3]/20', text: 'text-[#314CA3]', border: 'border-[#314CA3]/30' }
    ];
    return colors[index % colors.length];
  };

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
        
        <div className="space-y-8">
          {professionalWork.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  
                  <div className="flex items-start gap-6 lg:flex-1">
                    <div className="bg-gradient-to-r from-[#F24F22] via-[#ED1A25] via-[#612D90] to-[#314CA3] p-3 rounded-lg">
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
                          const tagColor = getTagColor(tagIndex);
                          return (
                            <span 
                              key={tagIndex}
                              className={`${tagColor.bg} ${tagColor.text} border ${tagColor.border} px-3 py-1 rounded-full text-sm font-medium`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  
                  <div className="lg:w-80 space-y-4">
                    <div className="bg-gradient-to-r from-[#F24F22] via-[#ED1A25] via-[#612D90] to-[#314CA3] rounded-lg p-4">
                      <p className="text-sm font-medium text-white mb-1">Key Outcome</p>
                      <p className="text-white font-semibold">{project.outcome}</p>
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
        
      </div>
    </section>
  );
};

export default Professional;
