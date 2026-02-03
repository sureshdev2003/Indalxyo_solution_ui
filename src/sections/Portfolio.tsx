import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onPageChange: (page: string) => void;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  stats: { label: string; value: string }[];
}

export default function Portfolio({ onPageChange }: PortfolioProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'app', 'design'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern shopping experience with AI recommendations',
      fullDescription: 'A full-featured e-commerce platform built with Next.js and Node.js. Features include real-time inventory, AI-powered product recommendations, secure payment processing, and a comprehensive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      github: '#',
      stats: [
        { label: 'Conversion Rate', value: '+150%' },
        { label: 'Page Load', value: '0.8s' },
        { label: 'Users', value: '50K+' },
      ],
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'app',
      description: 'Cross-platform mobile app for health monitoring',
      fullDescription: 'A React Native fitness app that tracks workouts, nutrition, and health metrics. Integrates with wearable devices and provides personalized coaching recommendations.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase', 'HealthKit', 'TensorFlow'],
      link: '#',
      github: '#',
      stats: [
        { label: 'Downloads', value: '100K+' },
        { label: 'Rating', value: '4.8★' },
        { label: 'Retention', value: '65%' },
      ],
    },
    {
      id: 3,
      title: 'Banking Dashboard',
      category: 'design',
      description: 'Intuitive financial management interface',
      fullDescription: 'A comprehensive banking dashboard designed for enterprise clients. Features real-time transaction monitoring, fraud detection alerts, and detailed analytics reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Figma', 'React', 'D3.js', 'WebSocket'],
      link: '#',
      stats: [
        { label: 'User Satisfaction', value: '94%' },
        { label: 'Tasks Completed', value: '3x Faster' },
        { label: 'Error Rate', value: '-80%' },
      ],
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'web',
      description: 'Community-driven content sharing platform',
      fullDescription: 'A modern social platform with real-time messaging, content creation tools, and advanced moderation features. Built to handle millions of concurrent users.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Go', 'Redis', 'WebRTC'],
      link: '#',
      github: '#',
      stats: [
        { label: 'Active Users', value: '1M+' },
        { label: 'Messages/Day', value: '10M+' },
        { label: 'Uptime', value: '99.99%' },
      ],
    },
    {
      id: 5,
      title: 'Healthcare Portal',
      category: 'app',
      description: 'Patient management and telemedicine solution',
      fullDescription: 'A HIPAA-compliant healthcare platform enabling virtual consultations, appointment scheduling, and electronic health records management.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      link: '#',
      stats: [
        { label: 'Patients Served', value: '500K+' },
        { label: 'Consultations', value: '2M+' },
        { label: 'Satisfaction', value: '96%' },
      ],
    },
    {
      id: 6,
      title: 'Brand Identity System',
      category: 'design',
      description: 'Complete visual identity for tech startup',
      fullDescription: 'A comprehensive brand identity system including logo design, color palette, typography guidelines, and marketing collateral for a Series B startup.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Figma', 'Illustrator', 'After Effects'],
      link: '#',
      stats: [
        { label: 'Brand Recognition', value: '+200%' },
        { label: 'Design Assets', value: '500+' },
        { label: 'Time Saved', value: '40hrs/wk' },
      ],
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section ref={sectionRef} className="bg-theme-secondary py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nexus-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-nexus-red font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-theme-primary mb-6">
            FEATURED <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-theme-secondary text-lg max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses 
            achieve their digital goals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-nexus-red text-white'
                  : 'glass text-theme-secondary hover:text-theme-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass rounded-2xl overflow-hidden card-hover">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-theme-primary via-transparent to-transparent opacity-60" />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-nexus-red/0 group-hover:bg-nexus-red/20 transition-colors duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="text-nexus-red" size={24} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-nexus-red text-sm font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-theme-primary mt-2 mb-2 group-hover:text-nexus-red transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-theme-secondary text-sm">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-theme-card text-theme-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-theme-secondary mb-6">
            Want to see more of our work?
          </p>
          <motion.button
            onClick={() => onPageChange('contact')}
            className="btn-primary inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-theme-primary/95 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-primary via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-theme-primary/80 flex items-center justify-center text-theme-primary hover:bg-nexus-red hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-nexus-red text-sm font-medium uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-heading font-bold text-theme-primary mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-theme-secondary text-lg mb-6">
                  {selectedProject.fullDescription}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {selectedProject.stats.map((stat, index) => (
                    <div key={index} className="glass rounded-xl p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-nexus-red">
                        {stat.value}
                      </div>
                      <div className="text-theme-muted text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-nexus-red/20 text-nexus-red"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      className="btn-outline flex items-center gap-2"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
