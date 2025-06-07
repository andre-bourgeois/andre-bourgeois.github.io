
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">André Bourgeois</h3>
            <p className="text-muted-foreground">
              Solutions Architect & Digital Innovator
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              Good technology leaves no fingerprints
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 André Bourgeois. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
