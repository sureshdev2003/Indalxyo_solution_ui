import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Cloud, 
  ArrowRight,
  Check,
  X
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  color: string;
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Code2,
      title: 'Web Development',
      shortDesc: 'Scalable and robust web applications built with cutting-edge technologies.',
      fullDesc: 'We create high-performance, responsive websites and web applications using modern frameworks like React, Next.js, and Vue. Our solutions are optimized for speed, security, and scalability.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'CMS Development',
        'API Integration',
        'Progressive Web Apps',
        'Performance Optimization',
      ],
      color: '#E10600',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      shortDesc: 'Native and cross-platform mobile solutions for iOS and Android.',
      fullDesc: 'From concept to launch, we build intuitive mobile applications that provide exceptional user experiences. We develop both native apps and cross-platform solutions using React Native and Flutter.',
      features: [
        'iOS App Development',
        'Android App Development',
        'React Native Apps',
        'Flutter Development',
        'App Maintenance',
        'App Store Optimization',
      ],
      color: '#E10600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDesc: 'User-centric design that converts visitors into customers.',
      fullDesc: 'Our design team creates visually stunning and highly functional interfaces. We focus on user research, wireframing, prototyping, and testing to ensure the best possible user experience.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Design Systems',
        'Usability Testing',
      ],
      color: '#E10600',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      shortDesc: 'Data-driven strategies that drive growth and engagement.',
      fullDesc: 'We help businesses reach their target audience through comprehensive digital marketing strategies. From SEO to social media, we maximize your online presence and ROI.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting',
      ],
      color: '#E10600',
    },
    {
      icon: Cloud,
      title: 'Cloud & Automation',
      shortDesc: 'Secure and efficient cloud infrastructure solutions.',
      fullDesc: 'We provide end-to-end cloud services including migration, infrastructure setup, and automation. Our solutions ensure scalability, security, and cost-efficiency.',
      features: [
        'Cloud Migration',
        'AWS/Azure/GCP Setup',
        'DevOps Automation',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        '24/7 Monitoring',
      ],
      color: '#E10600',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-theme-primary py-20 md:py-32 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(225, 6, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(225, 6, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nexus-red/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-nexus-red font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6">
            WHAT WE <span className="gradient-text">OFFER</span>
          </h2>
          <p className="text-theme-secondary text-lg max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. 
            From development to marketing, we have got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div 
                className="glass rounded-2xl p-8 h-full card-hover cursor-pointer border border-transparent hover:border-nexus-red/50 transition-all duration-500"
                onClick={() => setSelectedService(service)}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon 
                    className="text-nexus-red transition-colors duration-300" 
                    size={28}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-theme-primary mb-4 group-hover:text-nexus-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-theme-secondary mb-6">{service.shortDesc}</p>

                {/* Learn more link */}
                <div className="flex items-center text-nexus-red font-semibold group/link">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight 
                    size={18} 
                    className="group-hover/link:translate-x-2 transition-transform"
                  />
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${service.color}20, transparent 70%)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-theme-secondary mb-6">
            Need a custom solution? Let us discuss your project.
          </p>
          <button className="btn-primary">
            Get a Free Quote
          </button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-theme-primary/95 backdrop-blur-lg"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-nexus-red/20">
                    <selectedService.icon 
                      className="text-nexus-red"
                      size={28}
                    />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-theme-primary">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full bg-theme-card flex items-center justify-center text-theme-primary hover:bg-nexus-red hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Description */}
              <p className="text-theme-secondary text-lg mb-8">{selectedService.fullDesc}</p>

              {/* Features */}
              <h4 className="text-theme-primary font-heading font-semibold text-xl mb-4">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-nexus-red/20 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-nexus-red" />
                    </div>
                    <span className="text-theme-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="btn-primary w-full">
                Get Started with {selectedService.title}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
