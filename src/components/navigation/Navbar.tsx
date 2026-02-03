import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui-custom/ThemeToggle';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-theme-primary/90 backdrop-blur-lg border-b border-theme'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-nexus-red rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl font-heading">N</span>
              </div>
              <span className="text-theme-primary font-heading font-bold text-xl tracking-tight">
                NEXUS<span className="text-nexus-red">.</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-sm font-medium transition-colors duration-300 animated-underline ${
                    currentPage === link.id
                      ? 'text-nexus-red'
                      : 'text-theme-secondary hover:text-theme-primary'
                  }`}
                >
                  {link.name}
                  {currentPage === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nexus-red"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Side - Theme Toggle & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <motion.button
                onClick={() => handleNavClick('contact')}
                className="px-6 py-2.5 bg-nexus-red text-white text-sm font-semibold rounded-lg hover:bg-theme-primary hover:text-nexus-red transition-all duration-300 border border-nexus-red hover:border-nexus-red"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                className="text-theme-primary p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-theme-primary/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-3xl font-heading font-bold transition-colors duration-300 ${
                    currentPage === link.id ? 'text-nexus-red' : 'text-theme-primary'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavClick('contact')}
                className="mt-8 px-8 py-4 bg-nexus-red text-white text-lg font-semibold rounded-lg"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
