import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, User } from 'lucide-react';
import { useState, useRef } from 'react';

// InteractiveCard (shared pattern)
function InteractiveCard({ children, glowClass = "", fillClass = "", className = "" }: { children: React.ReactNode; glowClass?: string; fillClass?: string; className?: string }) {
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    el.style.setProperty('--mx', `${px}%`);
    el.style.setProperty('--my', `${py}%`);
  };

  return (
    <motion.div
      ref={ref}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      className={`card-effect ${hovering ? "hovering" : ""} ${glowClass} ${className} rounded-lg`}
      whileHover={{ scale: 1.035, y: -8 }}
      transition={{ type: "tween", duration: 0.32, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <div className="card-fill" aria-hidden="true">
        <div className={`fill-bar ${fillClass}`} />
      </div>

      <div className="card-content">
        {children}
      </div>
    </motion.div>
  );
}

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    college: "Guru Ghasidas Vishwavidyalaya",
    year: "2022 - 2026",
    location: "Bilaspur, Chhattisgarh",
    cgpa: "7.32/10.0"
  };

  const coursework = [
    {
      title: "Multi-Core Computer Architecture",
      instructor: "Prof. John Jose",
      platform: "NPTEL",
      institution: "CSE · IIT Guwahati",
      description: "Covers multicore system design, cache coherence, interconnects, and memory hierarchy.",
      colorClass: "coursework-green"
    },
    {
      title: "Low Power VLSI Design",
      instructor: "Prof. Indranil Sengupta",
      platform: "NPTEL",
      institution: "CSE · IIT Kharagpur", 
      description: "Focuses on power estimation, optimization, and techniques in digital VLSI circuits.",
      colorClass: "coursework-yellow"
    },
    {
      title: "VLSI Design Flow: RTL to GDS",
      instructor: "Prof. Sneh Saurabh",
      platform: "NPTEL",
      institution: "ECE · IIIT Delhi",
      description: "Explains complete VLSI design process from RTL coding to GDSII tape-out.",
      colorClass: "coursework-blue"
    },
    {
      title: "CMOS Digital VLSI Design",
      instructor: "Prof. Sudeb Das Gupta",
      platform: "NPTEL",
      institution: "ECE · IIT Roorkee",
      description: "Covers MOSFET behavior, CMOS logic, layout design, timing, and digital IC implementation.",
      colorClass: "coursework-brown"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education &{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Coursework
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and specialized learning in VLSI and digital design
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <InteractiveCard glowClass="card-color-darkyellow" fillClass="fill-blue-edu" className="p-8 bg-card/50 border border-border transition-smooth relative">
            <div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-lg text-primary font-semibold">
                    {education.college}
                  </p>
                  <p className="text-muted-foreground">
                    {education.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-secondary">
                    {education.year}
                  </p>
                  <div className="flex items-center gap-2 justify-end">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-primary font-mono">
                      CGPA: {education.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* Coursework Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-secondary" />
            <h3 className="text-2xl font-bold">Relevant Coursework</h3>
          </div>

              <div className="grid md:grid-cols-2 gap-6">
                {coursework.map((c, idx) => (
                  <InteractiveCard
                    key={c.title}
                    glowClass={
                      c.colorClass === "coursework-green" ? "card-color-sky" :
                      c.colorClass === "coursework-yellow" ? "card-color-red" :
                      c.colorClass === "coursework-blue" ? "card-color-white" :
                      c.colorClass === "coursework-brown" ? "card-color-darkyellow" : "card-color-sky"
                    }
                    fillClass={
                      c.colorClass === "coursework-green" ? "fill-green" :
                      c.colorClass === "coursework-yellow" ? "fill-yellow" :
                      c.colorClass === "coursework-blue" ? "fill-blue" :
                      c.colorClass === "coursework-brown" ? "fill-brown" : "fill-blue"
                    }
                    className="p-6 h-full bg-card/50 border border-border transition-smooth relative no-shine"
                  >
                    <div className="h-full flex flex-col">
                  {/* Course Header */}
                  <div className="mb-2">
                    <h4 className="font-bold text-lg mb-2">
                      {c.title}
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {c.instructor && (
                        <div className="flex items-center gap-2">
                          👤 {c.instructor}
                        </div>
                      )}
                      {(c.platform || c.institution) && (
                        <div className="flex items-center gap-2">
                          🏫 {c.institution} · {c.platform}
                        </div>
                      )}
                      {c.description && (
                        <div className="flex items-center gap-2">
                          📝 {c.description}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;