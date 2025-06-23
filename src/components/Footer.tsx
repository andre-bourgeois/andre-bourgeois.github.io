
import { Github, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0A0A0A' }}>André Bourgeois</h3>
            <p style={{ color: '#0A0A0A' }}>
              Solutions Architect & Digital Innovator
            </p>
          </div>
          
          {/* Middle Column */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sm mb-2" style={{ color: '#0A0A0A' }}>
              © 2025 André Bourgeois. All rights reserved.
            </p>
          </div>
          
          {/* Right Column - Social Icons */}
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/andrelbourgeois"
              target="_blank"
              className="text-[#0A0A0A] hover:text-[#314CA3] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#"
              target="_blank"
              className="text-[#0A0A0A] hover:text-[#ED1A25] transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="#"
              target="_blank"
              className="text-[#0A0A0A] hover:text-[#F24F22] transition-colors duration-200"
              aria-label="Substack"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/andre-bourgeois"
              target="_blank"
              className="text-[#0A0A0A] hover:text-[#612D90] transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
