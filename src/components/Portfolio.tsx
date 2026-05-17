import { motion } from 'motion/react';
import { ExternalLink, Github, Search } from 'lucide-react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'E-commerce Redesign',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Stripe', 'Tailwind']
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Recharts']
  },
  {
    title: 'Mobile App Concept',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    tags: ['Framer', 'UI/UX', 'Design']
  },
  {
    title: 'Creator Portfolio',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    tags: ['Motion', 'Portfolio', 'Webflow']
  },
  {
    title: 'AI Analytics Tool',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1551288569-ad20601f0797?auto=format&fit=crop&q=80&w=800',
    tags: ['Gemini API', 'PostgreSQL', 'Auth']
  },
  {
    title: 'Brand Refresh',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    tags: ['Logo', 'Strategy', 'Visuals']
  }
];

const categories = ['All', 'Website Design', 'Web Apps', 'Branding', 'Social Media Campaigns'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-display font-bold uppercase tracking-widest text-sm"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              Our Recent <span className="text-primary">Work</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white neon-glow shadow-primary/20' 
                    : 'bg-bg-secondary text-dark/40 border border-gray-100 hover:text-dark/70 hover:bg-gray-200 transition-all'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden bg-bg-secondary border border-gray-100 shadow-sm"
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-2">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-mono text-white/90 border border-white/10">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-left">
                  <Link to="/contact" className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-primary transition-colors border border-white/10 text-white">
                    <ExternalLink size={18} />
                  </Link>
                  <Link to="/contact" className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-primary transition-colors border border-white/10 text-white">
                    <Github size={18} />
                  </Link>
                  <Link to="/contact" className="ml-auto flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors">
                    View Project <Search size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
