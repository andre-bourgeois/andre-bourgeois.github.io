
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover:text-primary transition-colors"
          >
            <img 
              src="/logo-light.png" // or "/logo.png"
              alt="André Bourgeois logo"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('thinking')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Thinking
            </button>
            <button 
              onClick={() => scrollToSection('professional')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Professional
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('thinking')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Thinking
              </button>
              <button 
                onClick={() => scrollToSection('professional')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Professional
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-fit"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
