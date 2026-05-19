import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleLogoClick = () => {
    if (isHome) {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const handleNavLink = (sectionId: string) => {
    setIsOpen(false);
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    { id: 'about',        label: 'About' },
    { id: 'professional', label: 'Work' },
    { id: 'projects',     label: 'Projects' },
    { id: 'thinking',     label: 'Thinking' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/65 backdrop-blur-md border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="André Bourgeois logo"
              className="h-9 w-auto"
            />
            <span
              className="hidden sm:block text-sm font-semibold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--ink-1)', letterSpacing: '-0.02em' }}
            >
              André Bourgeois
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavLink(link.id)}
                className="text-sm transition-colors duration-150"
                style={{ color: 'var(--ink-2)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--brass)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavLink('contact')}
              className="text-sm font-medium px-4 py-2 rounded-md transition-colors duration-150"
              style={{ background: 'var(--deep-teal)', color: 'var(--bone)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--slate-teal)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--deep-teal)')}
            >
              Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--ink-1)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavLink(link.id)}
                  className="text-left text-sm transition-colors duration-150"
                  style={{ color: 'var(--ink-2)' }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavLink('contact')}
                className="text-sm font-medium px-4 py-2 rounded-md w-fit transition-colors duration-150"
                style={{ background: 'var(--deep-teal)', color: 'var(--bone)' }}
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
