import { motion } from 'motion/react';
import { MousePointer2, Smartphone, BarChart, Globe, PenTool } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Hero() {
  const floatingCards = [
    { icon: <Globe size={20} />, label: 'Website Design', top: '15%', left: '10%' },
    { icon: <MousePointer2 size={20} />, label: 'SEO', top: '25%', right: '15%' },
    { icon: <Smartphone size={20} />, label: 'Social Media', bottom: '15%', left: '15%' },
    { icon: <BarChart size={20} />, label: 'Ads Campaigns', bottom: '25%', right: '10%' },
    { icon: <PenTool size={20} />, label: 'Content Writing', top: '50%', right: '5%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-bg">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gray-200 text-primary text-sm font-medium mb-4 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Projects
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] text-dark">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Success</span> for<br />
            <span className="italic">Modern Businesses</span>
          </h1>

          <p className="max-w-xl text-dark/60 text-lg leading-relaxed">
            We create websites, web apps, social media strategies, branding, and digital tools that help businesses grow faster online.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 font-display">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg neon-glow hover:bg-accent transition-all transform hover:-translate-y-1 block text-center"
            >
              Book a Free Consultation
            </Link>
            <Link 
              to="/services"
              className="w-full sm:w-auto px-8 py-4 glass text-dark border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm block text-center"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl opacity-50" />
          <img 
            src="/input_file_3.png" 
            alt="Crafting Digital Dominance" 
            className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              delay: i * 0.2,
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ 
              position: 'absolute',
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom
            }}
            className="px-4 py-3 glass rounded-2xl flex items-center gap-3 backdrop-blur-2xl border-gray-100 shadow-xl"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <span className="text-sm font-semibold text-dark/80">{card.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
