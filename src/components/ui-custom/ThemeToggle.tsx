import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full glass flex items-center justify-center overflow-hidden group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          backgroundColor: isLight ? '#FDB813' : '#4B5563',
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icons container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun Icon */}
        <motion.div
          initial={false}
          animate={{
            rotate: isLight ? 0 : -90,
            scale: isLight ? 1 : 0,
            opacity: isLight ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-white" />
        </motion.div>
        
        {/* Moon Icon */}
        <motion.div
          initial={false}
          animate={{
            rotate: isLight ? 90 : 0,
            scale: isLight ? 0 : 1,
            opacity: isLight ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-white" />
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          boxShadow: isLight 
            ? '0 0 20px rgba(253, 184, 19, 0.5)' 
            : '0 0 20px rgba(75, 85, 99, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
