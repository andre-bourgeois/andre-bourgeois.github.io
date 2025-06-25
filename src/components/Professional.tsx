
import { ArrowRight, Building, Monitor } from 'lucide-react';

const Professional = () => {
  return (
    <section id="professional" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional 
            <span className="text-primary"> Work</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content - Left Aligned */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              For nearly a decade, I've built my career on the simple belief that organisations can 
              understand their built assets and business processes like technology products. 
              Technology has become such a fundamental driver in how organisations deliver value - 
              to both their customers and employees - that it's difficult to tell where the systems 
              end and the experiences begin. If these problems were puzzles, they'd be all ocean.
            </p>
            <p>
              As a Solutions Architect, I thrive on exploring these systems and experiences. I'm driven 
              by my desire to understand the real-world applications of frontier technology. I live to 
              solve the core problems we face every day in the places we spend our lives.
            </p>
            <p>
              More concretely, through my work as a Solutions Architect at Hereworks, I play a crucial 
              role in designing and implementing smart buildings, transforming traditional workplaces 
              into integrated, intelligent, and responsive environments. I translate high-level business 
              objectives into actionable strategies and technology designs aligned with my clients' 
              unique aspirations. My aim is to demystify the path to digital transformation and empower 
              organisations to harness the full potential of informed, intentional technology investments. 
            </p>
          </div>
          
          <div className="relative w-full aspect-[3/4] max-w-lg mx-auto">
            <img 
              src="/headshot.JPG"
              alt="Andre Bourgeois"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F24F22]/20 via-transparent to-[#314CA3]/20 rounded-lg"></div>
          </div>
        </div>
        
        {/* Centered Learn More Button */}
        <div className="flex justify-center mt-12">
          <button onClick={() => window.open("https://www.linkedin.com/in/andrelbourgeois", "_blank", "noopener,noreferrer")}
            className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-medium bg-background">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Professional;
