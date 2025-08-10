import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import linkedinIcon from "@/assets/icons/linkedin-color.png";
import githubIcon from "@/assets/icons/github-color.png";
import emailIcon from "@/assets/icons/email-color.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 object-contain" />,
      href: "https://www.linkedin.com/in/nishant-jha777/",
      label: "LinkedIn",
      color: "hover:shadow-lg"
    },
    {
      icon: <img src={githubIcon} alt="GitHub" className="h-6 w-6 object-contain" />,
      href: "https://github.com/jhanishant0123",
      label: "GitHub",
      color: "hover:shadow-lg"
    },
    {
      icon: <img src={emailIcon} alt="Email - Gmail compose" className="h-6 w-6 object-contain" />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=jhanishant0123@gmail.com",
      label: "Email",
      color: "hover:shadow-lg",
      onClick: (e) => {
        if (!/Chrome|Firefox/i.test(window.navigator.userAgent)) {
          e.preventDefault();
          window.location.href = 'mailto:jhanishant0123@gmail.com';
        }
      }
    }
  ];

  return (
    <footer className="bg-card/30 border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground"
          >
            <p className="text-sm">
              © 2025{' '}
              <span className="text-primary font-semibold">
                Nishant Kumar Jha
              </span>
              . All rights reserved.
            </p>
          </motion.div>

          {/* Built With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>{' '}
              using{' '}
              <span className="font-mono text-primary">React.js</span>,{' '}
              <span className="font-mono text-secondary">Tailwind CSS</span> &{' '}
              <span className="font-mono text-primary-glow">Framer Motion</span>
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg bg-background/50 border border-border transition-smooth ${social.color}`}
                onClick={social.onClick}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-8 origin-center"
        />

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-6"
        >
          <p className="text-xs text-muted-foreground">
            Passionate about VLSI Design • Digital Innovation • Semiconductor Technology
          </p>
        </motion.div>
      </div>

      {/* Floating Circuit Elements */}
      <div className="absolute top-4 left-4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-primary-glow/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </footer>
  );
};

export default Footer;