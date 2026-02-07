import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

/* ---------- TYPEWRITER CONFIG ---------- */
const WORD = ' INDALYXO';
const TYPE_SPEED = 120;     // typing speed (ms)
const RETYPE_DELAY = 5000; // every 5 seconds

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [typedText, setTypedText] = useState('');

  /* ---------- TYPEWRITER EFFECT ---------- */
  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setTypedText('');
      index = 0;

      typingInterval = setInterval(() => {
        if (index < WORD.length) {
          setTypedText((prev) => prev + WORD.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          restartTimeout = setTimeout(startTyping, RETYPE_DELAY);
        }
      }, TYPE_SPEED);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(restartTimeout);
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Akilandam',
      role: 'CEO, Nellai Connect.',
      image: '',
      rating: 5,
      text:
        'The development process was smooth from start to finish. Communication was excellent, and they provided quick support whenever we needed updates.',
    },
    {
      name: 'Jerome Abel',
      role: 'Director, TechSolutions',
      image: '',
      rating: 4,
      text:
        'We needed a scalable web application, and they delivered exactly what we wanted using modern technologies.',
    },
    {
      name: 'Jacin',
      role: 'Co-Founder',
      image: '',
      rating: 5,
      text:
        'After launching the new website built by this team, our online presence increased significantly.',
    },
  ];

  /* ---------- AUTOPLAY ---------- */
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-theme-secondary py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* ---------- HEADER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-nexus-red font-semibold text-sm uppercase block mb-4">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6">
            WHAT OUR CLIENTS SAY IN
            <br />
            <span className="block mt-2 text-nexus-red tracking-wide min-h-[1.2em]">
              {typedText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </h2>

          <p className="text-theme-secondary text-lg max-w-3xl mx-auto">
            Do not just take our word for it. Discover why clients trust us as one of the best IT companies for delivering reliable, innovative, and scalable digital solutions.
          </p>
        </motion.div>

        {/* ---------- CAROUSEL ---------- */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                  <Quote className="text-nexus-red mb-6" size={40} />

                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="text-nexus-red fill-nexus-red"
                        size={20}
                      />
                    ))}
                  </div>

                  <p className="text-theme-secondary text-lg mb-8 leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div>
                    <h4 className="text-theme-primary font-bold">{t.name}</h4>
                    <p className="text-nexus-red text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- NAV ---------- */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrev}
            className="w-12 h-12 rounded-full bg-theme-card flex items-center justify-center hover:bg-nexus-red hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-8 bg-nexus-red' : 'w-2 bg-theme-muted'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full bg-theme-card flex items-center justify-center hover:bg-nexus-red hover:text-white transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* ---------- STATS ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '4.9', label: 'Average Rating', suffix: '/5' },
            { value: '150', label: 'Happy Clients', suffix: '+' },
            { value: '98', label: 'Retention Rate', suffix: '%' },
            { value: '500', label: 'Projects Delivered', suffix: '+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-nexus-red mb-2">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-theme-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
