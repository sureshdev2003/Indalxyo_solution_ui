import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Headphones,
  ArrowRight
} from 'lucide-react';

interface FeaturesProps {
  onPageChange: (page: string) => void;
}

export default function Features({ onPageChange }: FeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensuring your applications load in milliseconds, not seconds.',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Enterprise-grade security built into every solution we create.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on schedule, every time.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from startup to enterprise.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock support to keep your business running smoothly.',
    },
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
          className="text-center mb-16"
        >
          <span className="text-nexus-red font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6">
            FEATURES THAT <span className="gradient-text">SET US APART</span>
          </h2>
          <p className="text-theme-secondary text-lg max-w-3xl mx-auto">
            We combine technical expertise with creative innovation to deliver 
            solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full card-hover">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-nexus-red/20 flex items-center justify-center mb-6 group-hover:bg-nexus-red transition-colors duration-300">
                  <feature.icon className="text-nexus-red group-hover:text-white transition-colors" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-theme-primary mb-3 group-hover:text-nexus-red transition-colors">
                  {feature.title}
                </h3>
                <p className="text-theme-secondary">{feature.description}</p>
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
          <motion.button
            onClick={() => onPageChange('services')}
            className="btn-primary inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
