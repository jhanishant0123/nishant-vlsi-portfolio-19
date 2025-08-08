import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Users, Heart, Star } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      role: "Marketing Executive",
      organization: "Silicon Society",
      icon: <Star className="h-6 w-6" />,
      description: "Led marketing initiatives for technical events and workshops, successfully promoting VLSI and semiconductor-focused activities to student community.",
      color: "text-primary",
      hoverClass: "activity-star"
    },
    {
      role: "NSS Volunteer",
      organization: "Social Outreach",
      icon: <Heart className="h-6 w-6" />,
      description: "Actively participated in social service activities, contributing to community development and educational initiatives in rural areas.",
      color: "text-secondary",
      hoverClass: "activity-heart"
    },
    {
      role: "Volunteer",
      organization: "Equilibrio Solasta Cultural Fest",
      icon: <Users className="h-6 w-6" />,
      description: "Coordinated and managed cultural fest activities, ensuring smooth execution of events and enhancing college cultural engagement.",
      color: "text-primary-glow",
      hoverClass: "activity-users"
    }
  ];

  return (
    <section id="activities" className="py-20 relative">
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
            Activities &{' '}
            <span className="gradient-secondary bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond academics - my involvement in community service and leadership roles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className={`p-8 h-full bg-card/50 border-border hover:border-primary/30 hover:shadow-glow transition-smooth group text-center activity-box box-${index + 1} ${activity.hoverClass} relative overflow-hidden`}>
                <div className="shine-overlay"></div>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col items-center relative z-10"
                >
                  {/* Icon */}
                  <motion.div
                    className={`p-4 rounded-full bg-background border-2 border-current mb-6 ${activity.color} icon-container`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {activity.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {activity.role}
                    </h3>
                    
                    <h4 className={`text-lg font-semibold mb-4 ${activity.color}`}>
                      {activity.organization}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {activity.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Activities;