
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Connect = () => {
  return (
    <section id="connect" className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Build Something 
          <span className="text-accent">Remarkable</span>
        </h2>
        
        <p className="text-xl text-secondary-foreground/80 mb-12 leading-relaxed">
          Whether you're a startup founder exploring smart building technology, 
          a CTO planning your IoT strategy, or a business leader ready to transform 
          your spaces—I'd love to hear about your vision.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:andre@example.com"
            className="bg-background text-foreground p-6 rounded-lg hover:scale-105 transition-all group"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              andre@example.com
            </p>
          </a>

          <a 
            href="https://linkedin.com/in/andrebourgeois"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-foreground p-6 rounded-lg hover:scale-105 transition-all group"
          >
            <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              Professional Network
            </p>
          </a>

          <a 
            href="https://twitter.com/andrebourgeois"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-foreground p-6 rounded-lg hover:scale-105 transition-all group"
          >
            <Twitter className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Twitter</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              Daily Insights
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8 border border-background/20">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start a Conversation?</h3>
          <p className="text-secondary-foreground/80 mb-6">
            I'm always interested in discussing new challenges, sharing insights, 
            or exploring potential collaborations.
          </p>
          <a 
            href="mailto:andre@example.com"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-all font-medium group"
          >
            Get In Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
