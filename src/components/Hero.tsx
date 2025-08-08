import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImage from '@/assets/profile-image.png';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Aspiring VLSI Frontend Engineer | RTL Design • ASIC Verification • Digital Architect";

  useEffect(() => {
    let index = 0;
    let isTyping = true;

    const typeWriter = () => {
      if (isTyping) {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
          setTimeout(typeWriter, 100);
        } else {
          setTimeout(() => {
            isTyping = false;
            typeWriter();
          }, 2000);
        }
      } else {
        if (index > 0) {
          setTypedText(fullText.slice(0, index - 1));
          index--;
          setTimeout(typeWriter, 50);
        } else {
          setTimeout(() => {
            isTyping = true;
            typeWriter();
          }, 500);
        }
      }
    };

    typeWriter();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Circuit Background Pattern */}
      <div className="absolute inset-0 circuit-bg" />
      
      {/* Floating Circuit Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border border-primary-glow rounded-lg animate-float opacity-30" />
      <div className="absolute bottom-32 right-32 w-12 h-12 border border-secondary rounded animate-float opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-primary-glow rounded-full animate-pulse opacity-40" />

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hey! I'm{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Nishant Kumar Jha
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="gradient-primary hover:glow-primary transition-smooth font-medium"
              asChild
            >
              <a href="https://drive.google.com/file/d/1JDWpSjzlBzhJXZD2BkZU-MWaKhromfgx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <a href="https://github.com/jhanishant0123" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth"
              asChild
            >
              <a href="https://www.linkedin.com/in/nishant-jha777/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              className="w-80 h-80 rounded-full overflow-hidden border-4"
              style={{ borderColor: '#87CEEB' }}
              animate={{ 
                boxShadow: [
                  '0 0 50px #87CEEB',
                  '0 0 100px #87CEEB',
                  '0 0 50px #87CEEB'
                ],
                y: [0, -15, 0]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img
                src={profileImage}
                alt="Nishant anime VLSI"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;