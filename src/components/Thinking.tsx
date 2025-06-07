
import { ArrowRight, Book, Pen, Share } from 'lucide-react';

const Thinking = () => {
  const thoughts = [
    {
      title: "Buildings as Products: The Service-Oriented Architecture Revolution",
      excerpt: "Why we need to stop thinking about buildings as static infrastructure and start treating them like evolving digital products.",
      readTime: "8 min read",
      category: "Architecture"
    },
    {
      title: "The Invisible Interface: When IoT Gets It Right",
      excerpt: "Exploring the design principles that make smart systems truly smart—by making them disappear entirely.",
      readTime: "6 min read",
      category: "IoT Design"
    },
    {
      title: "Digital Twins in Practice: Beyond the Hype",
      excerpt: "Real-world applications and lessons learned from implementing digital twin technology in commercial environments.",
      readTime: "10 min read",
      category: "Digital Twins"
    },
    {
      title: "The Data-Driven Building: From Sensors to Insights",
      excerpt: "How to transform building telemetry into actionable intelligence that improves both operations and occupant experience.",
      readTime: "7 min read",
      category: "Data Strategy"
    }
  ];

  return (
    <section id="thinking" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thinking & 
            <span className="text-primary">Writing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology, space, and human experience. 
            Thoughts on building systems that serve people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {thoughts.map((thought, index) => (
            <article 
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-sm text-primary mb-4">
                <Book size={16} />
                <span>{thought.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{thought.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {thought.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {thought.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <button className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight size={16} />
                </button>
                
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Share size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 font-medium flex items-center gap-2 mx-auto">
            <Pen size={20} />
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Thinking;
