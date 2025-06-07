
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Thinking from '@/components/Thinking';
import Work from '@/components/Work';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Thinking />
      <Work />
      <Connect />
      <Footer />
    </div>
  );
};

export default Index;
