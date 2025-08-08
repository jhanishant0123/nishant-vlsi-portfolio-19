import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// Import colourful icons
import LinkedinColor from '@/assets/icons/linkedin-color.png';
import GithubColor from '@/assets/icons/github-color.png';
import EmailColor from '@/assets/icons/email-color.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || !formData.message.trim()) {
      toast({ title: "Please fill out all fields correctly.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_z8crbwq',
        'template_2wqdxf6',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'BZ4P0V0_1zjNmdA3R'
      );
      toast({ title: "Your message has been sent!", description: "Thank you for reaching out." });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({ title: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, label: "Email", value: "jhanishant0123@gmail.com", href: "mailto:jhanishant0123@gmail.com", color: "text-primary" },
    { icon: <Phone className="h-6 w-6" />, label: "Phone", value: "+91 6201163500", href: "tel:+916201163500", color: "text-secondary" },
    { icon: <MapPin className="h-6 w-6" />, label: "Location", value: "Bilaspur, Chhattisgarh", href: "#", color: "text-primary-glow" }
  ];

  const socialLinks = [
    { icon: <img src={LinkedinColor} alt="LinkedIn" className="h-6 w-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/nishant-jha777/", color: "hover:opacity-80" },
    { icon: <img src={GithubColor} alt="GitHub" className="h-6 w-6" />, label: "GitHub", href: "https://github.com/jhanishant0123", color: "hover:opacity-80" },
    { icon: <img src={EmailColor} alt="Email" className="h-6 w-6" />, label: "Email", href: "mailto:jhanishant0123@gmail.com", color: "hover:opacity-80" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 circuit-bg opacity-5" />
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {`Let's `}<span className="gradient-primary bg-clip-text text-transparent">Connect</span> 🤝
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss VLSI opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="p-8 bg-card/50 border-border hover:border-primary/30">
              <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} />
                <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary text-lg py-6">
                  {isSubmitting ? 'Sending...' : (<><Send className="mr-2 h-5 w-5" />Send Message</>)}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} className="group flex items-center gap-4 p-4 rounded-lg bg-card/30 border hover:border-primary/30">
                  <div className={`${info.color} group-hover:scale-110 transition-transform`}>{info.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-semibold">Follow Me</h4>
              <div className="flex gap-4 mt-2">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg bg-card/30 border hover:border-primary/30 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
