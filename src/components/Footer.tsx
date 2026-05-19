
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const socials = [
    {
      href: "https://www.linkedin.com/in/andrelbourgeois",
      label: "LinkedIn",
      icon: <Linkedin size={24} />,
    },
    {
      href: "#",
      label: "Bluesky",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
        </svg>
      ),
    },
    {
      href: "#",
      label: "Substack",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      ),
    },
    {
      href: "https://github.com/andre-bourgeois",
      label: "GitHub",
      icon: <Github size={24} />,
    },
  ];

  return (
    <footer className="border-t py-12 relative z-10 bg-background/65 backdrop-blur-md" style={{ borderColor: 'var(--rule)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-left">
            <h3
              className="text-lg font-semibold mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em', color: 'var(--ink-1)' }}
            >
              André Bourgeois
            </h3>
            <p className="text-sm" style={{ color: 'var(--ink-3)' }}>
              Solutions Architect &amp; Digital Innovator
            </p>
          </div>

          {/* Copyright */}
          <div className="text-left md:text-center">
            <p
              className="text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: 'var(--ink-3)' }}
            >
              © 2026 André Bourgeois.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex justify-start md:justify-end items-center gap-4 md:ml-auto">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="transition-colors duration-200"
                style={{ color: 'var(--ink-2)', display: 'inline-flex' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--brass)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
