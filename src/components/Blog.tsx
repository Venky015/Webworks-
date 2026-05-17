import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Filter } from 'lucide-react';

const categories = ['All', 'Business Growth', 'Design', 'SEO', 'Web Dev'];

const posts = [
  {
    title: 'How to Scale Your Local Business with Modern Web Apps',
    excerpt: 'Discover why professional booking systems and customer portals are changing the game for local service providers...',
    date: 'May 10, 2026',
    author: 'Venkat Jadhav',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Business Growth'
  },
  {
    title: 'Top 5 Design Trends That Will Dominate 2026',
    excerpt: 'Futuristic gradients, glassmorphism, and AI-driven interfaces are leading the way. Here is what you need to know...',
    date: 'May 05, 2026',
    author: 'Venkat Jadhav',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    category: 'Design'
  },
  {
    title: 'SEO Secrets: Ranking on Page 1 in 30 Days',
    excerpt: 'A step-by-step guide on optimizing your content and technical SEO to beat the competition and gain visibility...',
    date: 'April 28, 2026',
    author: 'Venkat Jadhav',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20a?auto=format&fit=crop&q=80&w=800',
    category: 'SEO'
  },
  {
    title: 'Mastering React Server Components',
    excerpt: 'Learn how RSCs are revolutionizing the way we build performant web applications with minimal client-side JS...',
    date: 'April 20, 2026',
    author: 'Venkat Jadhav',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    category: 'Web Dev'
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="py-24 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4 max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-display font-bold uppercase tracking-widest text-sm"
            >
              Knowledge Base
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-dark"
            >
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Digital Strategies</span>
            </motion.h2>
          </div>
          <button className="text-dark/60 hover:text-primary font-bold flex items-center gap-2 group transition-all">
            See All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Section */}
        <div className="flex flex-wrap gap-4 mb-16">
          <div className="flex items-center gap-2 mr-4 text-dark/40 font-bold uppercase tracking-widest text-xs">
            <Filter size={16} className="text-primary" /> Filter By:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                  : 'bg-white text-dark/60 border-gray-100 hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-primary/20 transition-all flex flex-col shadow-sm hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-gray-100 text-dark">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between text-dark">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-dark/40 font-semibold uppercase tracking-wider">
                      <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                      <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-dark/50 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-gray-50 mt-8">
                    <button className="text-dark font-bold flex items-center gap-2 group/btn hover:text-primary transition-colors">
                      Read More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform text-primary" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
