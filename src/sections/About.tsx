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
      description: 'To be a trusted global technology partner that transforms ideas into impactful solutions, helping businesses and educational institutions thrive in the digital era.',
    },
    {
      icon: Heart,
      title: 'Services',
      description: 'From AI & Automation to Software Development, Data Analytics, Digital Marketing and Web Development — we offer complete IT solutions to help your business grow and stay competitive.',
    },
  ];

const leadership = [
  {
    name: 'ShreeRam MuthuDev',
    role: 'Founder & Managing Director',
    description:
      'When I started the company, my vision was clear — to build a company that stands for quality, reliability, and trust. Our journey is built on strong values, customer satisfaction, and continuous improvement.',
    image:
      'https://res.cloudinary.com/dkbtx5r9v/image/upload/v1770111088/IMG_4595.JPG_rxhy62.jpg',
  },
  {
    name: 'Jachin',
    role: 'Director',
    description:
      'Customer satisfaction has always been at the heart of everything we do. From product design to after-sales support, we focus on building long-term relationships.',
    image:
      'https://res.cloudinary.com/dkbtx5r9v/image/upload/v1770197619/IMG-20250911-WA0000.jpg_a13riv.jpg',
  },
  {
    name: 'Suresh C',
    role: 'Director',
    description:
      'We combine modern technology with years of industry experience. Every product we deliver reflects our commitment to excellence and innovation.',
    image:
      '',
  },
  {
    name: 'Ramkumar B',
    role: 'Director',
    description:
      'We combine modern technology with years of industry experience. Every product we deliver reflects our commitment to excellence and innovation.',
    image:
      'https://res.cloudinary.com/dkbtx5r9v/image/upload/v1770112001/aragonai-18f7d91c-9f2c-4997-b242-94816b1db625_sub7io.jpg',
  },
    {
    name: 'Roshan C',
    role: 'Director',
    description:
      'We combine modern technology with years of industry experience. Every product we deliver reflects our commitment to excellence and innovation.',
    image:
      'https://res.cloudinary.com/dkbtx5r9v/image/upload/v1770112233/1733809644914.jpg_aj8r2d.jpg',
  },
];


  const timeline = [
    { year: '2025', event: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2026', event: '10+ Projects', description: 'Successfully delivered 10+ projects worldwide' },
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
            { icon: Award, value: '5+', label: 'Awards Won' },
            { icon: Users, value: '10+', label: 'Team Members' },
            { icon: Zap, value: '25+', label: 'Projects Done' },
            { icon: Target, value: '90%', label: 'Success Rate' },
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

{/* Leadership Section */}
<section className="bg-theme-primary py-24">
  <div className="max-w-7xl mx-auto px-6 space-y-32">
    {leadership.map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* TEXT SIDE */}
        <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
          <span className="text-xs uppercase tracking-widest text-nexus-red font-semibold block mb-3">
            Leadership
          </span>

          <h3 className="text-4xl md:text-5xl font-heading font-bold text-theme-primary leading-tight mb-6">
            {member.role}
          </h3>

          <p className="text-theme-secondary text-lg leading-relaxed max-w-xl mb-6">
            “{member.description}”
          </p>

          <p className="font-heading font-semibold text-theme-primary">
            {member.name}
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
          <div className="relative w-full max-w-md mx-auto">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      </div>
    </section>
  );
}
