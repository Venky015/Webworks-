import { motion } from 'motion/react';
import { 
  Code2, Layout, Share2, Megaphone, 
  PenTool, Palette, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Website Development',
    icon: <Code2 className="w-8 h-8" />,
    description: 'Custom business websites, high-converting landing pages, and scalable E-commerce stores built with modern tech.',
    features: ['React & Next.js', 'Responsive Design', 'SEO Ready', 'Fast Performance'],
    color: 'from-primary/10 to-accent/10'
  },
  {
    title: 'Web App Development',
    icon: <Layout className="w-8 h-8" />,
    description: 'Advanced booking systems, interactive admin dashboards, and automation tools to streamline your operations.',
    features: ['Custom Logic', 'User Portals', 'Data Analytics', 'API Integration'],
    color: 'from-accent/10 to-primary/10'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-display font-bold uppercase tracking-widest text-sm"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Solutions</span> for Your Growth
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.concat([
            {
              title: 'Social Media Management',
              icon: <Share2 className="w-8 h-8" />,
              description: 'Grow your brand presence on Instagram and LinkedIn with expert content scheduling and engagement strategies.',
              features: ['Content Planning', 'Growth Strategy', 'Analytics Reports', 'Branding'],
              color: 'from-orange-500/10 to-primary/10'
            },
            {
              title: 'Digital Marketing',
              icon: <Megaphone className="w-8 h-8" />,
              description: 'Scale your business with targeted Facebook, Instagram, and Google Ads campaigns optimized for ROI.',
              features: ['PPC Campaigns', 'Conversion Tracking', 'Audience Research', 'Retargeting'],
              color: 'from-red-500/10 to-accent/10'
            },
            {
              title: 'Content Writing',
              icon: <PenTool className="w-8 h-8" />,
              description: 'High-quality blog posts, SEO articles, and website copy that resonates with your audience and ranks on Google.',
              features: ['SEO Content', 'Brand Voice', 'Grammar Perfect', 'Persuasive Copy'],
              color: 'from-teal-500/10 to-primary/10'
            },
            {
              title: 'Branding & Design',
              icon: <Palette className="w-8 h-8" />,
              description: 'Memorable logo designs and professional social media assets that build a cohesive and trustworthy brand identity.',
              features: ['Unique Logos', 'Social Graphics', 'Print Ready', 'Brand Guidelines'],
              color: 'from-indigo-500/10 to-accent/10'
            }
          ]).map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/30 transition-all overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {service.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </h3>
                  <p className="text-dark/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-y-2 pt-4 border-t border-gray-100">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-dark/40 group-hover:text-dark/70 transition-colors">
                      <CheckCircle2 size={12} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ translateZ: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/services"
                    className="w-full py-3 text-sm font-bold bg-white text-dark border-2 border-dark rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all block text-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
