import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Colorful icons
import linkedinIcon from "@/assets/icons/linkedin-color.png";
import githubIcon from "@/assets/icons/github-color.png";
import emailIcon from "@/assets/icons/email-color.png";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormHover, setIsFormHover] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
      !formData.message.trim()
    ) {
      toast({ title: "Please fill out all fields correctly.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_z8crbwq",
        "template_2wqdxf6",
        {
          to_Nishant_Kumar_Jha: "Nishant Kumar Jha",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "BZ4P0V0_1zjNmdA3R"
      );

      toast({ title: "Your message has been sent!", description: "Thank you for reaching out." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-white">Let’s </span>
            <span className="text-sky-400">Connect 🤝</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or have a VLSI opportunities? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <div
            className={`card-effect card-color-sky no-shine rounded-xl border border-transparent ${isFormHover ? 'hovering' : ''}`}
            onMouseEnter={() => setIsFormHover(true)}
            onMouseLeave={() => setIsFormHover(false)}
          >
            <Card className="p-8 bg-card/50 border border-border">
              <h3 className="text-3xl font-semibold text-center mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-white placeholder:text-gray-400"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-white placeholder:text-gray-400"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="text-white placeholder:text-gray-400 resize-none"
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Follow Me and Highlight moved to bottom */}
        <div className="mt-12 space-y-6">
          <h3 className="text-3xl font-semibold text-center">Follow Me</h3>

          {/* Icons Row */}
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/nishant-jha777/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-3 rounded-lg bg-card/30 border border-border transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-10 w-10 object-contain drop-shadow" />
            </a>
            <a
              href="https://github.com/jhanishant0123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-3 rounded-lg bg-card/30 border border-border transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img src={githubIcon} alt="GitHub" className="h-10 w-10 object-contain drop-shadow" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jhanishant0123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email"
              className="p-3 rounded-lg bg-card/30 border border-border transition-transform hover:scale-105 hover:shadow-lg"
              onClick={(e) => {
                if (!/Chrome|Firefox/i.test(window.navigator.userAgent)) {
                  e.preventDefault();
                  window.location.href = 'mailto:jhanishant0123@gmail.com';
                }
              }}
            >
              <img src={emailIcon} alt="Email - Gmail compose" className="h-10 w-10 object-contain drop-shadow" />
            </a>
          </div>

          {/* Highlight Paragraph */}
          <div className="w-full max-w-4xl mx-auto p-5 md:p-6 rounded-lg bg-background/40 border border-yellow-400/20">
            <p className="text-yellow-400 drop-shadow text-center">
              I&apos;m always excited to discuss new opportunities in VLSI Design, Collaborate on Innovative projects, or simply connect with fellow engineers in the semiconductor industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
