
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Solutions Architect</span>
            <span className="block text-primary">Digital Innovator</span>
          </h1>
          
          {/* Philosophy Statement */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Good technology leaves no fingerprints.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I design systems that disappear into experience—creating clarity and value 
              at the intersection of <span className="text-primary font-medium">smart buildings</span>, 
              <span className="text-primary font-medium">IoT</span>, and 
              <span className="text-primary font-medium">emerging tech</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 font-medium"
            >
              Explore My Work
            </button>
            <a 
              href="#connect"
              className="text-foreground/80 hover:text-primary transition-colors font-medium underline underline-offset-4"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rotate-12 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
