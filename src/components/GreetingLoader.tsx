import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GreetingLoaderProps {
  onComplete: () => void;
}

const GreetingLoader = ({ onComplete }: GreetingLoaderProps) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [loadingPercent, setLoadingPercent] = useState(0);
  
  const greetings = [
    "WELCOME",
    "HELLO EVERYONE 👋",
    "ಸ್ವಾಗತ",
    "नमस्ते 👋",
    "WELCOME TO NISHANT'S WORLD OF VLSI."
  ];

  useEffect(() => {
    // Loading percentage animation
    const percentInterval = setInterval(() => {
      setLoadingPercent(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(percentInterval);
          return prev;
        }
      });
    }, 50); // Complete in 5 seconds

    const greetingInterval = setInterval(() => {
      setCurrentGreeting(prev => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(greetingInterval);
          return prev;
        }
      });
    }, 1000); // 5 seconds / 5 greetings = 1 second each

    return () => {
      clearInterval(greetingInterval);
      clearInterval(percentInterval);
    };
  }, []);

  useEffect(() => {
    if (loadingPercent === 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loadingPercent, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center z-10">
        <div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentGreeting}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-4xl md:text-6xl font-bold mb-8 glitter-text-yellow"
            >
              {greetings[currentGreeting]}
            </motion.h1>
          </AnimatePresence>
          <motion.div
            className="text-2xl md:text-3xl font-bold"
            style={{ color: '#FF0000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {loadingPercent}%
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GreetingLoader;