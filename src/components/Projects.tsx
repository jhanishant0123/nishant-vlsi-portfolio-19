import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import projectDetailsImage from '@/assets/project-details-image.png';
import project2DetailImage from '@/assets/project-2-detail.png';
import project3DetailImage from '@/assets/project-3-detail.png';
import project4DetailImage from '@/assets/project-4-detail.png';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const projects = [
    {
      title: "RISC-V 5 Stage Pipelined Processor",
      description: "Designed a 5-stage pipelined RISC-V processor with data and control hazard handling, forwarding, and testbenches",
      tech: ["Verilog", "SystemVerilog", "RISC-V", "RTL Design", "Pipelining"],
      highlights: [
        "Implemented 5-stage pipeline (IF, ID, EX, MEM, WB)",
        "Hazard detection and data forwarding",
        "Branch prediction optimization",
        "Complete instruction set support"
      ],
      github: "https://github.com/jhanishant0123/RISC-V-Based-5-Stage-Pipelined-Processor",
      demo: "modal",
      image: "/lovable-uploads/project-1.png",
      hasImage: true
    },
    {
      title: "UVM-Based Verification of RV32I Core",
      description: "Comprehensive verification environment using Universal Verification Methodology for RISC-V RV32I core validation.",
      tech: ["SystemVerilog", "UVM", "Verification", "Coverage", "Assertions"],
      highlights: [
        "100% functional coverage achieved",
        "Constrained random test generation",
        "Assertion-based verification",
        "Comprehensive test suite development"
      ],
      github: "https://github.com/jhanishant0123/UVM-Based-Verification-of-RV32I-RISC-V-Core/tree/main",
      demo: "modal",
      image: "/lovable-uploads/project-2.png",
      hasImage: true,
      detailImage: project2DetailImage
    },
    {
      title: "Single & Dual Port RAM Design",
      description: "High-performance memory design implementations with optimized read/write operations and configurable parameters.",
      tech: ["Verilog", "Memory Design", "SRAM", "RTL", "Synthesis"],
      highlights: [
        "Configurable memory parameters",
        "Optimized timing constraints",
        "Low power design techniques",
        "Comprehensive test benches"
      ],
      github: "https://github.com/jhanishant0123/Single-and-Dual-Port-RAM",
      demo: "modal",
      image: "/lovable-uploads/project-3.png",
      hasImage: true,
      detailImage: project3DetailImage
    },
    {
      title: "64-bit SRAM Design in Cadence",
      description: "Full custom layout design of 64-bit SRAM memory using Cadence Virtuoso with complete physical verification.",
      tech: ["Cadence Virtuoso", "Layout Design", "DRC", "LVS", "Parasitic Extraction"],
      highlights: [
        "Custom cell library development",
        "Physical design optimization",
        "DRC and LVS clean implementation",
        "Performance characterization"
      ],
      github: "https://github.com/jhanishant0123/64-BIT-SRAM-MEMORY-DESIGN",
      demo: "modal",
      image: "/lovable-uploads/project-4.png",
      hasImage: true,
      detailImage: project4DetailImage
    }
  ];

  useEffect(() => {
    projectCardsRef.current.forEach((card, index) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 25,
          speed: 400,
          glare: false,
          perspective: 1000,
          "mouse-event-element": card as any,
        });
      }
    });

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card && (card as any).vanillaTilt) {
          (card as any).vanillaTilt.destroy();
        }
      });
    };
  }, []);

  const handleViewDetails = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 relative">
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
            Featured{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my hands-on experience in VLSI design and verification projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <Card 
                ref={(el) => {
                  if (el) projectCardsRef.current[index] = el;
                }}
                className={`h-full futuristic-project-card glassmorphism-card border-border hover:border-primary/30 transition-smooth overflow-hidden project-card-3d ${index === 0 ? 'proj-glow-green' : index === 1 ? 'proj-glow-blue' : index === 2 ? 'proj-glow-orange' : 'proj-glow-red'}`}
              >
                <div className="h-full flex flex-col project-card-inner">
                  <div className="shine-overlay"></div>
                  {/* Project Image */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-background/90 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 transition-all duration-300 group-hover:text-primary group-hover:[text-shadow:0_0_10px_rgba(6,182,212,0.8)]">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground group-hover:[text-shadow:0_0_5px_rgba(255,255,255,0.3)]">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 font-mono hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] hover:border-primary/60"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6 flex-grow">
                      <h4 className="text-sm font-semibold mb-3 text-secondary transition-all duration-300 group-hover:text-primary group-hover:[text-shadow:0_0_8px_rgba(6,182,212,0.6)]">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:text-cyan-400" />
                            <span className="transition-all duration-300 group-hover:[text-shadow:0_0_3px_rgba(255,255,255,0.2)]">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border mt-auto z-10 relative">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 project-button-3d border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      
                      <Button
                        size="sm"
                        className="flex-1 project-button-3d gradient-primary hover:glow-primary transition-smooth"
                        onClick={() => handleViewDetails(index)}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Single Modal for all projects */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <div className="space-y-6 p-4">
            {selectedProject !== null && (
              <>
                <img
                  src={projects[selectedProject].detailImage || projectDetailsImage}
                  alt="Project Details"
                  className="w-full h-auto rounded-lg"
                />
                <div className="text-center">
                  <p className="glitter-text text-xl md:text-2xl">
                    Thanks for showing interest in knowing more about my project, It will be updated soon here.
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;