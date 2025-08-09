import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import linkedinIcon from "@/assets/icons/linkedin-color.png";
import githubIcon from "@/assets/icons/github-color.png";
import emailIcon from "@/assets/icons/email-color.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_z8crbwq", // Service ID
        "template_2wqdxf6", // Template ID
        {
          to_Nishant_Kumar_Jha: "Nishant Kumar Jha",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "BZ4P0V0_1zjNmdA3R" // Public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-16 px-4" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Let’s Connect</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side - Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <a
            href="https://www.linkedin.com/in/nishant-jha777/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/jhanishant0123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
          </a>
          <a href="mailto:jhanishant0123@gmail.com" aria-label="Send email">
            <img src={emailIcon} alt="Email" className="w-10 h-10" />
          </a>
        </div>

        {/* Right side - Form */}
        <Card className="p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </Card>
      </div>
    </section>
  );
}
