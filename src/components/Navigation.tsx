import { motion } from 'framer-motion';
import { useState } from 'react';

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '#hero', color: 'bg-violet-500' },
    { name: 'About', href: '#about', color: 'bg-red-500' },
    { name: 'Expertise', href: '#expertise', color: 'bg-blue-500' },
    { name: 'Projects', href: '#projects', color: 'bg-green-500' },
    { name: 'Experience', href: '#experience', color: 'bg-yellow-500' },
    { name: 'Education', href: '#education', color: 'bg-orange-500' },
    { name: 'Connect', href: '#contact', color: 'bg-pink-500' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={refreshPage}
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-red-500">𝐍</span>
          <span className="text-white">𝐈𝐒𝐇𝐀𝐍𝐓</span>
        </motion.button>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative px-4 py-2 text-foreground font-medium transition-colors overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Color fill effect on hover */}
              <motion.div
                className={`absolute inset-0 ${item.color}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />
              <span className="relative z-10">{item.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button (for future implementation) */}
        <div className="md:hidden">
          <button className="text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;