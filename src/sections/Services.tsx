import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Code2,        // Web Development
  Smartphone,   // App Development
  Database,     // Data Migration
  TrendingUp,   // Digital Marketing
  Cpu,          // AI & Automation
  Palette,      // UI/UX Design
  ArrowRight,
  Check,
  X,
} from 'lucide-react';


interface Service {
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  color: string;
  image: string;
}


interface ServiceProps {
  onPageChange: (page: string) => void;
}
export default function Services({ onPageChange }: ServiceProps) {

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<Service | null>(null);


  const services: Service[] = [
    {
      icon: Code2,
      title: 'Web Development',
      shortDesc:
        'Scalable and robust web applications built with cutting-edge technologies.',
      fullDesc:
        'We create high-performance, responsive websites and web applications using modern frameworks like React, Next.js, and Vue. Our solutions are optimized for speed, security, and scalability.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'CMS Development',
        'API Integration',
        'Progressive Web Apps',
        'Performance Optimization',
      ],
      color: '#E10600',
      image:
        'https://res.cloudinary.com/dkbtx5r9v/image/upload/v1770115088/web_tlxnxy.avif',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      shortDesc:
        'Native and cross-platform mobile solutions for iOS and Android.',
      fullDesc:
        'From concept to launch, we build intuitive mobile applications using React Native and Flutter with a focus on performance and UX.',
      features: [
        'iOS App Development',
        'Android App Development',
        'React Native Apps',
        'Flutter Development',
        'App Maintenance',
        'App Store Optimization',
      ],
      color: '#E10600',
      image:
        'https://res.cloudinary.com/dfd3sbnvd/image/upload/v1770103436/Mobile-App-Development_sbkq2k.webp',
    },
    {
      icon: Database,
      title: 'Data Migration',
      shortDesc: 'Secure and seamless data migration across platforms.',
      fullDesc:
        'We ensure accurate, secure, and downtime-free data migration between databases, servers, and cloud platforms while maintaining data integrity.',
      features: [
        'Database Migration',
        'Cloud Data Migration',
        'Legacy System Migration',
        'Zero Data Loss',
        'Security & Compliance',
        'Post-Migration Support',
      ],
      color: '#E10600',
      image:
        'https://res.cloudinary.com/dfd3sbnvd/image/upload/v1770103579/Data-migration_-AI-ethics_0000_shutterstock_2297034367_m2bbvd.jpg',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      shortDesc: 'Data-driven strategies that drive growth and engagement.',
      fullDesc:
        'We help businesses grow through SEO, social media marketing, PPC advertising, and analytics-driven strategies.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting',
      ],
      color: '#E10600',
      image:
        'https://res.cloudinary.com/dfd3sbnvd/image/upload/v1770103837/trends-in-digital-marketing_eohgqg.png',
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      shortDesc: 'Intelligent automation powered by modern AI technologies.',
      fullDesc:
        'We build AI-driven automation solutions that improve efficiency, reduce costs, and scale business operations.',
      features: [
        'AI Process Automation',
        'Machine Learning Models',
        'Chatbots & Virtual Assistants',
        'Workflow Automation',
        'Predictive Analytics',
        'System Integration',
      ],
      color: '#E10600',
      image:
        'https://res.cloudinary.com/dkbtx5r9v/image/upload/v1770114999/ai.jpg_cez7ti.jpg',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDesc:
        'User-centric UI/UX design that enhances usability and engagement.',
      fullDesc:
        'We design intuitive, visually appealing, and user-focused digital experiences through research, wireframing, prototyping, and usability testing.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'UI Design for Web & Mobile',
        'UX Strategy & Flow Design',
        'Design Systems & Style Guides',
        'Usability Testing & Optimization',
      ],
      color: '#E10600',
      image:
        'https://res.cloudinary.com/dfd3sbnvd/image/upload/v1770104216/ui_i3yd0k.avif',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-theme-primary py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-nexus-red font-semibold text-sm uppercase block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WHAT WE <span className="gradient-text">OFFER</span>
          </h2>
          <p className="text-theme-secondary max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8 cursor-pointer border border-transparent hover:border-nexus-red/50"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-16 h-16 rounded-xl bg-nexus-red/20 flex items-center justify-center mb-6">
                <service.icon className="text-nexus-red" size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-theme-secondary mb-6">
                {service.shortDesc}
              </p>

              <div className="flex items-center text-nexus-red font-semibold">
                Learn More <ArrowRight className="ml-2" size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="w-full h-52 rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CLOSE */}
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                onClick={() => setSelectedService(null)}
              >
                <X size={20} />
              </button>

              <h3 className="text-3xl font-bold mb-4 text-black">
                {selectedService.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {selectedService.fullDesc}
              </p>

              <h4 className="text-xl font-semibold mb-4 text-black">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {selectedService.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-nexus-red" size={16} />
                    <span className='text-black'>{feature}</span>
                  </div>
                ))}
              </div>
              <button
  className="btn-primary w-full"
  onClick={() => {
    setSelectedService(null);      // close modal
    onPageChange('contact');       // switch to contact page
  }}
>
  Get Started with {selectedService.title}
</button>



            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}