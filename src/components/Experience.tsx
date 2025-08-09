import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
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

const Experience = () => {
  const experiences = [
    {
      role: "Digital Design & VLSI Intern",
      organization: "Codec Technologies Pvt. Ltd. (AICTE & ICAC Approved)",
      duration: "Jun 2025 – Jul 2025",
      type: "internship",
      description: "Completed a one-month industry-aligned internship focused on core concepts of Digital Electronics and VLSI Design. Gained in-depth exposure to digital logic design, hardware description languages, and practical applications in VLSI workflows.",
      achievements: [
        "Developed a solid understanding of digital circuit theory and VLSI fundamentals",
        "Worked on Verilog-based design of digital modules",
        "Understood FPGA design flow and basic ASIC concepts",
        "Demonstrated strong problem-solving skills in practical lab tasks",
        "Received personalized mentorship and a Letter of Recommendation for outstanding performance"
      ],
      tech: ["Digital Logic Design", "Verilog HDL", "FPGA Concepts", "ASIC Design Basics", "Simulation & Testing Tools"]
    },
    {
      role: "VLSI RTL Design & Verification Trainee",
      organization: "VLSIGuru Institute in collaboration with Synopsys",
      duration: "Jul 2025",
      type: "training",
      description: "Completed an industry-focused, hands-on workshop on RTL Design and Functional Verification using Synopsys EDA tools. This program provided in-depth exposure to ASIC design flow, verification methodologies, and industry-grade tools used in professional VLSI environments.",
      achievements: [
        "Understood the complete ASIC Design Flow from specification to verification",
        "Designed and verified an Asynchronous FIFO using Verilog HDL",
        "Set up SystemVerilog-UVM testbench from scratch",
        "Performed advanced Lint, CDC (Clock Domain Crossing), and UPF (Power Intent) checks",
        "Achieved functional and code coverage through well-structured testbenches",
        "Completed daily hands-on labs on Synopsys tools under expert guidance",
        "Earned a joint certification from VLSIGuru and Synopsys"
      ],
      tech: ["Verilog HDL", "SystemVerilog", "UVM (Universal Verification Methodology)", "Synopsys Design Compiler", "VCS, Verdi", "Lint, CDC, UPF Checks", "ASIC Design & Verification Flow"]
    },
    {
      role: "VLSI for Beginners",
      organization: "NIELIT Calicut",
      duration: "June 2025 - July 2025",
      type: "training",
      description: "Completed an intensive beginner-level course on VLSI fundamentals, emphasizing Verilog HDL, FPGA design, and digital logic prototyping using Xilinx Vivado. Gained foundational to intermediate knowledge in HDL-based design workflows and hardware prototyping methodologies.",
      achievements: [
        "Understood the VLSI design flow and industry applications",
        "Developed Verilog programs for combinational and sequential logic circuits",
        "Simulated and synthesized logic on Vivado using FPGA development boards",
        "Participated in guided hands-on sessions with access to remote hardware labs",
        "Qualified the course exit test with certification"
      ],
      tech: ["Verilog HDL", "FPGA Design", "Digital Logic", "Xilinx Vivado", "Remote Hardware Lab (on-demand access)"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return <Briefcase className="h-6 w-6" />;
      case 'training':
        return <GraduationCap className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'text-primary';
      case 'training':
        return 'text-secondary';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
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
            Professional{' '}
            <span className="gradient-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in VLSI and digital design through internships and specialized training
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary-glow" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Node */}
                  <div className={`relative z-10 p-3 rounded-full bg-background border-2 border-current ${getIconColor(exp.type)}`}>
                    {getIcon(exp.type)}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1"
                  >
                    <InteractiveCard
                      glowClass={`${index === 0 ? 'card-color-orange' : index === 1 ? 'card-color-red' : 'card-color-darkyellow'}`}
                      className={`p-8 bg-card/50 border border-border hover:border-primary/30 transition-smooth relative`}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-mono">{exp.duration}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-primary mb-4">
                          {exp.organization}
                        </h4>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold mb-3 text-secondary">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h5 className="text-sm font-semibold mb-3 text-secondary">
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-smooth font-mono"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </InteractiveCard>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;