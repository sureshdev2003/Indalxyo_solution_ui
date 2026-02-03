import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and create lasting impact.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading digital transformation partner, recognized for excellence and innovation.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Integrity, innovation, and client success are at the core of everything we do.',
    },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Miller',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'James Wilson',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  const timeline = [
    { year: '2016', event: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2018', event: 'First 100 Clients', description: 'Reached milestone of 100 satisfied clients' },
    { year: '2020', event: 'Global Expansion', description: 'Expanded services to international markets' },
    { year: '2023', event: 'Innovation Award', description: 'Recognized as top digital agency' },
    { year: '2026', event: '500+ Projects', description: 'Successfully delivered 500+ projects worldwide' },
  ];

  return (
    <section ref={sectionRef} className="bg-theme-primary py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-nexus-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-nexus-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-nexus-red font-semibold text-sm tracking-wider uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6">
            WHO WE <span className="gradient-text">ARE</span>
          </h2>
          <p className="text-theme-secondary text-lg max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to 
            creating exceptional digital experiences that drive business growth.
          </p>
        </motion.div>

        {/* Mission/Vision/Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 card-hover group"
            >
              <div className="w-16 h-16 rounded-xl bg-nexus-red/20 flex items-center justify-center mb-6 group-hover:bg-nexus-red transition-colors duration-300">
                <item.icon className="text-nexus-red group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-theme-primary mb-4">{item.title}</h3>
              <p className="text-theme-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {[
            { icon: Award, value: '50+', label: 'Awards Won' },
            { icon: Users, value: '150+', label: 'Team Members' },
            { icon: Zap, value: '500+', label: 'Projects Done' },
            { icon: Target, value: '98%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="glass-red rounded-2xl p-6 text-center">
              <stat.icon className="text-nexus-red mx-auto mb-3" size={28} />
              <div className="text-3xl font-heading font-bold text-theme-primary mb-1">{stat.value}</div>
              <div className="text-theme-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-heading font-bold text-theme-primary text-center mb-12">
            Our <span className="text-nexus-red">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-nexus-red via-nexus-red/50 to-transparent" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="glass rounded-xl p-6 inline-block">
                      <span className="text-nexus-red font-heading font-bold text-xl">{item.year}</span>
                      <h4 className="text-theme-primary font-semibold mt-2">{item.event}</h4>
                      <p className="text-theme-secondary text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-nexus-red rounded-full border-4 border-theme-primary" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-3xl font-heading font-bold text-theme-primary text-center mb-12">
            Meet Our <span className="text-nexus-red">Team</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <div className="aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-primary via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-nexus-red/0 group-hover:bg-nexus-red/20 transition-colors duration-300" />
                </div>
                <h4 className="text-theme-primary font-heading font-semibold text-lg">{member.name}</h4>
                <p className="text-nexus-red text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
