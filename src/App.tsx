import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Portfolio from './sections/Portfolio';
import CTASection from './sections/CTASection';
import About from './sections/About';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

// Page transition wrapper
function PageTransition({ children, isVisible }: { children: React.ReactNode; isVisible: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-theme-primary flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-20 h-20 bg-nexus-red rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-4xl font-heading">IS</span>
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="w-64 h-1 bg-theme-card rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-full bg-nexus-red"
        />
      </div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-theme-secondary mt-4 text-sm"
      >
        Loading experience...
      </motion.p>
    </motion.div>
  );
}

// Home Page Component - Enhanced with more sections
function HomePage({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <main>
      <Hero onPageChange={onPageChange} />
      
      {/* Features Section */}
      <Features onPageChange={onPageChange} />
      
      {/* Portfolio Section */}
      <Portfolio onPageChange={onPageChange} />
      
      {/* Quick Services Preview */}
      <section className="bg-theme-secondary py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-nexus-red font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-theme-primary">
              Services We <span className="gradient-text">Provide</span>
            </h2>
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', desc: 'Scalable web applications', icon: '🌐' },
              { title: 'App Development', desc: 'Native & cross-platform apps', icon: '📱' },
              { title: 'UI/UX Design', desc: 'User-centric design solutions', icon: '🎨' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center card-hover cursor-pointer"
                onClick={() => onPageChange('services')}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold text-theme-primary mb-2">{service.title}</h3>
                <p className="text-theme-secondary">{service.desc}</p>
              </motion.div>
            ))}
          </div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <motion.button
              onClick={() => onPageChange('services')}
              className="btn-outline inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA & Newsletter Section */}
      <CTASection onPageChange={onPageChange} />
    </main>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Handle page change with scroll to top
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current page content
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <About />;
      case 'services':
         return <Services onPageChange={handlePageChange} />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-primary transition-colors duration-300">
        {/* Loading Screen */}
        <AnimatePresence>
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {/* Main Content */}
        {!isLoading && (
          <>
            <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
            
            <PageTransition isVisible={true}>
              {renderPage()}
            </PageTransition>
            
            <Footer onPageChange={handlePageChange} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
