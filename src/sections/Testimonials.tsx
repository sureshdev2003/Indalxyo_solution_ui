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

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: 'Michael Roberts',
      role: 'CEO, TechVentures Inc.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Nexus transformed our digital presence completely. Their team delivered a stunning website that increased our conversions by 150%. The attention to detail and technical expertise is unmatched.',
    },
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Working with Nexus was an absolute pleasure. They understood our vision from day one and delivered beyond our expectations. Our app has received incredible feedback from users.',
    },
    {
      name: 'David Thompson',
      role: 'Founder, StartupHub',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The team at Nexus is incredibly talented and professional. They took our complex requirements and turned them into an elegant, user-friendly solution. Highly recommended!',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO, InnovateLabs',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Nexus delivered our cloud infrastructure migration flawlessly. Their expertise in DevOps and automation saved us countless hours and significantly reduced our operational costs.',
    },
    {
      name: 'James Wilson',
      role: 'Product Manager, ScaleUp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'From design to development, Nexus provided end-to-end excellence. Their UI/UX team created an interface that our users love, and the development was rock-solid.',
    },
  ];

  // Auto-play functionality
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
    <section ref={sectionRef} className="bg-theme-secondary py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nexus-red/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-nexus-red font-semibold text-sm tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6">
            WHAT OUR <span className="gradient-text">CLIENTS</span> SAY
          </h2>
          <p className="text-theme-secondary text-lg max-w-3xl mx-auto">
            Do not just take our word for it. Here is what our clients have to say about 
            working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Main Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                    {/* Quote icon */}
                    <Quote className="text-nexus-red mb-6" size={40} />

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-nexus-red fill-nexus-red" size={20} />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-theme-secondary text-lg md:text-xl mb-8 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-nexus-red">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-theme-primary font-heading font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-nexus-red text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-theme-card flex items-center justify-center text-theme-primary hover:bg-nexus-red hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-nexus-red' 
                      : 'w-2 bg-theme-muted hover:bg-theme-secondary'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-theme-card flex items-center justify-center text-theme-primary hover:bg-nexus-red hover:text-white transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Stats */}
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
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-nexus-red mb-2">
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-theme-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
