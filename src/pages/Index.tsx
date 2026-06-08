import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="scroll-smooth bg-white text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
