
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Thinking from '@/components/Thinking';
import Professional from '@/components/Professional';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Professional />
        <Projects />
        <Thinking />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
