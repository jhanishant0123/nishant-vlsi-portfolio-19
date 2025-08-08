import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import GreetingLoader from '@/components/GreetingLoader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  // Enable smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {showLoader && (
          <GreetingLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {!showLoader && (
        <>
          <Navigation />
          <main className="relative">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Activities />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
