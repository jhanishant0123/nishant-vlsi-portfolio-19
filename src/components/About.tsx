import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    "RTL Design", "ASIC Verification", "SystemVerilog", "UVM", 
    "RISC-V", "Verilog", "FPGA", "Digital Design",
    "Cadence Tools", "VLSI", "Pipeline Architecture", "Memory Design"
  ];

  const technicalSkills = {
    "Languages": ["C/C++", "Python", "Verilog", "SystemVerilog"],
    "HDL & Tools": ["Vivado", "Cadence Virtuoso", "ModelSim", "QuestaSim"],
    "Methodologies": ["UVM", "Assertion Based Verification"],
    "VLSI Concepts": ["Digital Electronics", "STA", "Computer Architecture", "CMOS VLSI"]
  };

  return (
    <section id="about" className="py-20 relative">
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
            About{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                I'm a passionate <span className="text-primary font-semibold">VLSI Engineer</span> with
                expertise in digital design and verification. Currently pursuing my journey in 
                semiconductor technology with hands-on experience in{' '}
                <span className="text-orange-400 font-bold underline hover:text-orange-300 transition-colors">
                  RTL Design
                </span>{' '}
                and{' '}
                <span className="text-teal-400 font-bold underline hover:text-teal-300 transition-colors">
                  ASIC Verification
                </span>.
              </p>
              
              <p>
                My focus areas include <span className="text-secondary font-semibold">RISC-V processor design</span>,{' '}
                <span className="text-blue-400 font-bold underline hover:text-blue-300 transition-colors">
                  Memory Architecture
                </span>, and advanced verification methodologies using{' '}
                <span className="text-red-400 font-bold underline hover:text-red-300 transition-colors">
                  UVM
                </span>. 
                I love building efficient digital systems and exploring the intricacies of chip design.
              </p>
              
              <p>
                With experience in both frontend and backend VLSI flows, I'm committed to 
                creating innovative solutions in the semiconductor industry.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="relative overflow-hidden"
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-card border border-primary/20 hover:border-primary/40 transition-smooth cursor-default relative group"
                      style={{ color: '#FFFDD0' }}
                    >
                      {/* Red fill effect from bottom */}
                      <motion.div
                        className="absolute inset-0 bg-red-500"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ originY: 1 }}
                      />
                      <span className="relative z-10 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl relative profile-pic-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/lovable-uploads/d25c1102-7354-4fe3-a463-a69b7d62a09a.png"
                  alt="Nishant Kumar Jha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Grid */}
        <motion.div
          id="expertise"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Technical{' '}
            <span className="gradient-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technicalSkills).map(([category, skillList], index) => {
              // Define hover colors for each box
              const hoverGradients = [
                'from-red-600 to-red-800',     // Languages
                'from-green-600 to-green-800', // HDL & Tools  
                'from-blue-600 to-blue-800',   // Methodologies
                'from-yellow-600 to-yellow-800' // VLSI Concepts
              ];
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 h-full bg-card/50 border-border hover:border-primary/30 transition-smooth relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${hoverGradients[index]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left`} />
                    <div className="relative z-10">
                      <h4 className="font-semibold text-lg mb-4 text-primary group-hover:text-white transition-colors">
                        {category}
                      </h4>
                      <ul className="space-y-2">
                        {skillList.map((skill) => (
                          <li
                            key={skill}
                            className="text-sm text-muted-foreground hover:text-foreground group-hover:text-white transition-colors font-mono"
                          >
                            • {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;