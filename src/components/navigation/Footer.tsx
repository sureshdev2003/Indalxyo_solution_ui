import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp, Youtube } from 'lucide-react';

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

  return (
    <footer className="bg-theme-primary border-t border-theme relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <motion.div
              onClick={() => handleNavClick('home')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6 cursor-pointer"
            >
              {/* LOGO */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black">
                <img
                  src="https://res.cloudinary.com/dfd3sbnvd/image/upload/v1770447047/logo_zyzipv.png"
                  alt="Indalyxo Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* BRAND NAME */}
              <div className="leading-tight">
                <p className="text-theme-primary font-heading font-semibold text-lg">
                  Indalyxo
                </p>
                <p className="text-theme-secondary text-sm">
                  Solutions
                </p>
              </div>
            </motion.div>

            <p className="text-theme-secondary mb-6 max-w-sm">
              Transforming ideas into digital reality. We build innovative solutions
              that drive business growth and user engagement.
            </p>

            {/* SOCIAL */}
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/indalyxo-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-theme-card flex items-center justify-center text-theme-secondary hover:bg-nexus-red hover:text-white transition"
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/indalyxo.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-theme-card flex items-center justify-center text-theme-secondary hover:bg-nexus-red hover:text-white transition"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@indalyxopodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-theme-card flex items-center justify-center text-theme-secondary hover:bg-nexus-red hover:text-white transition"
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-theme-primary font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-theme-secondary">
              <li>About Us</li>
              <li>Services</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-theme-primary font-heading font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-theme-secondary">
              <li>Web Development</li>
              <li>App Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-theme-primary font-heading font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-theme-secondary text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-nexus-red" />
                No:81, Pothigai Nagar, Tirunelveli, Tamil Nadu-627007
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-nexus-red" />
                indalyxosolutions@gmail.com
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-nexus-red" />
                +91 9600162710
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-theme flex flex-col md:flex-row items-center justify-between">
          <p className="text-theme-muted text-sm">
            © 2026 Indalyxo Solutions. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-nexus-red flex items-center justify-center text-white"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
