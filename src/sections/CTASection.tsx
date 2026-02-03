import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onPageChange: (page: string) => void;
}

export default function CTASection({ onPageChange }: CTASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section ref={sectionRef} className="bg-theme-primary py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexus-red/10 rounded-full blur-3xl" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(225, 6, 0, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(225, 6, 0, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <Sparkles className="text-nexus-red/50" size={32} />
          </div>
          <div className="absolute bottom-4 left-4">
            <Sparkles className="text-nexus-red/30" size={24} />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-nexus-red/20 mb-8"
          >
            <span className="w-2 h-2 bg-nexus-red rounded-full mr-2 animate-pulse" />
            <span className="text-nexus-red text-sm font-medium">
              Start Your Journey Today
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6"
          >
            READY TO <span className="gradient-text">TRANSFORM</span>
            <br />
            YOUR BUSINESS?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-theme-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Let us discuss your project and create something extraordinary together. 
            Our team is ready to bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => onPageChange('contact')}
              className="btn-primary flex items-center gap-2 group text-lg px-10 py-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => onPageChange('services')}
              className="btn-outline flex items-center gap-2 text-lg px-10 py-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-theme"
          >
            <p className="text-theme-muted text-sm mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company, index) => (
                <span
                  key={index}
                  className="text-theme-secondary font-heading font-bold text-xl"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-theme-primary mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-theme-secondary">
                Get the latest insights, tips, and trends in digital technology delivered 
                straight to your inbox.
              </p>
            </div>

            <div>
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 text-nexus-red"
                >
                  <CheckCircle size={24} />
                  <span className="font-medium">Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-muted" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 rounded-lg bg-theme-card border border-theme text-theme-primary placeholder-theme-muted focus:border-nexus-red focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn-primary px-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Email Us', value: 'hello@nexus.com', href: 'mailto:hello@nexus.com' },
            { label: 'Call Us', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
            { label: 'Visit Us', value: 'Silicon Valley, CA', href: '#' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="glass rounded-xl p-6 text-center hover:border-nexus-red/50 transition-colors group"
            >
              <p className="text-theme-muted text-sm mb-1">{item.label}</p>
              <p className="text-theme-primary font-semibold group-hover:text-nexus-red transition-colors">
                {item.value}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
