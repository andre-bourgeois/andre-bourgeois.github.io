
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
  ];

  return (
    <section id="thinking" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thinking & 
            <span className="text-primary"> Writing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology, space, and human experience. 
            Thoughts on building technology that serves people.
          </p>
        </div>
        <div className="space-y-6 text-center text-lg text-foreground leading-relaxed">
          <p>
            Articles coming soon.
          </p>
        </div>
        {/*
        <div className="grid md:grid-cols-2 gap-8">
          {thoughts.map((thought, index) => (
            <article 
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-sm mb-4">
                <div 
                  className="w-8 h-8 rounded flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to right, #F24F22, #ED1A25, #612D90, #314CA3)',
                    WebkitMask: `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>')}")`,
                    mask: `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>')}")`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: '16px 16px',
                    maskSize: '16px 16px'
                  }}
                />
                <span className="bg-[#F24F22]/20 text-[#F24F22] border border-[#F24F22]/30 px-2 py-1 rounded-full text-xs font-medium">
                  {thought.category}
                </span>
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
          <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-medium bg-background">
            View All Articles
          </button>
        </div>
        */}
          
      </div>
    </section>
  );
};

export default Thinking;
