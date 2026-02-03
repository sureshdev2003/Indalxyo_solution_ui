import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, ArrowUp } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', id: 'about' },
      { name: 'Services', id: 'services' },
      { name: 'Testimonials', id: 'testimonials' },
      { name: 'Contact', id: 'contact' },
    ],
    services: [
      { name: 'Web Development', id: 'services' },
      { name: 'App Development', id: 'services' },
      { name: 'UI/UX Design', id: 'services' },
      { name: 'Digital Marketing', id: 'services' },
    ],
    support: [
      { name: 'FAQ', id: 'contact' },
      { name: 'Privacy Policy', id: 'contact' },
      { name: 'Terms of Service', id: 'contact' },
    ],
  };

  return (
    <footer className="bg-theme-primary border-t border-theme relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => handleNavClick('home')}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-nexus-red rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-2xl font-heading">N</span>
              </div>
              <span className="text-theme-primary font-heading font-bold text-2xl tracking-tight">
                NEXUS<span className="text-nexus-red">.</span>
              </span>
            </motion.div>
            <p className="text-theme-secondary mb-6 max-w-sm">
              Transforming ideas into digital reality. We build innovative solutions that drive business growth and user engagement.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-theme-card flex items-center justify-center text-theme-secondary hover:bg-nexus-red hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-theme-primary font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-theme-secondary hover:text-nexus-red transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-theme-primary font-heading font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-theme-secondary hover:text-nexus-red transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-theme-primary font-heading font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-nexus-red mt-1 flex-shrink-0" size={18} />
                <span className="text-theme-secondary text-sm">
                  123 Tech Street, Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-nexus-red flex-shrink-0" size={18} />
                <a href="mailto:hello@nexus.com" className="text-theme-secondary text-sm hover:text-nexus-red transition-colors">
                  hello@nexus.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-nexus-red flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-theme-secondary text-sm hover:text-nexus-red transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-theme flex flex-col md:flex-row items-center justify-between">
          <p className="text-theme-muted text-sm mb-4 md:mb-0">
            © 2026 Nexus Digital Solutions. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-nexus-red flex items-center justify-center text-white hover:bg-theme-primary hover:text-nexus-red border border-nexus-red transition-all duration-300"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
