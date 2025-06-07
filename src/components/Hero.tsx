
import { ArrowDown } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import BackgroundParticles from './BackgroundParticles';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Minimal Grid Background with Gradient Fade */}
      <div className="absolute inset-0">
        <div className="blueprint-grid-minimal opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/20 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-background/60 via-background/20 to-background/0"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-background/20 to-background/0"></div>
      </div>
      
      {/* Background Particles */}
      <BackgroundParticles />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center justify-center">
          {/* Centered Content */}
          <div className="animate-fade-in text-center max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block">Solutions Architect</span>
              <span className="block text-primary">Digital Innovator</span>
            </h1>
            
            {/* Philosophy Statement with Typing Animation */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed min-h-[2.5rem]">
                <TypingAnimation />
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                I design systems that disappear into experience—creating clarity and value 
                at the intersection of <span className="text-primary font-medium">smart buildings</span>, 
                <span className="text-primary font-medium">IoT</span>, and 
                <span className="text-primary font-medium">emerging tech</span>.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
