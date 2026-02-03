import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@nexus.com',
      href: 'mailto:hello@nexus.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Tech Street, Silicon Valley, CA 94025',
      href: '#',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-theme-primary py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nexus-red/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-nexus-red font-semibold text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6">
              LET&apos;S <span className="gradient-text">TALK</span>
            </h2>
            <p className="text-theme-secondary text-lg mb-10">
              Have a project in mind? We would love to hear from you. Send us a message 
              and we will respond as soon as possible.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-nexus-red/20 flex items-center justify-center group-hover:bg-nexus-red transition-colors duration-300">
                    <item.icon className="text-nexus-red group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-theme-muted text-sm">{item.label}</p>
                    <p className="text-theme-primary font-medium group-hover:text-nexus-red transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-2xl overflow-hidden h-64"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639436474726!2d-122.083746884692!3d37.421999979825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-theme-primary mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-nexus-red/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-nexus-red" size={40} />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-theme-primary mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-theme-secondary">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-theme-secondary text-sm mb-2">
                      Your Name <span className="text-nexus-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-theme-card rounded-lg border ${
                        errors.name ? 'border-nexus-red' : 'border-theme'
                      } text-theme-primary placeholder-theme-muted focus:border-nexus-red focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-nexus-red text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-theme-secondary text-sm mb-2">
                      Email Address <span className="text-nexus-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 bg-theme-card rounded-lg border ${
                        errors.email ? 'border-nexus-red' : 'border-theme'
                      } text-theme-primary placeholder-theme-muted focus:border-nexus-red focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-nexus-red text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-theme-secondary text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full px-4 py-3 bg-theme-card rounded-lg border border-theme text-theme-primary placeholder-theme-muted focus:border-nexus-red focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-theme-secondary text-sm mb-2">
                      Your Message <span className="text-nexus-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className={`w-full px-4 py-3 bg-theme-card rounded-lg border ${
                        errors.message ? 'border-nexus-red' : 'border-theme'
                      } text-theme-primary placeholder-theme-muted focus:border-nexus-red focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-nexus-red text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
