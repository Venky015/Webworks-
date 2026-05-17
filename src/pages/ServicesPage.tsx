import { motion } from 'motion/react';
import Services from '../components/Services';
import Industries from '../components/Industries';

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-dark tracking-tighter">
              Premium <span className="text-primary italic">Digital</span> Solutions
            </h1>
            <p className="text-xl text-dark/60 leading-relaxed max-w-xl">
              We offer a comprehensive suite of digital web services designed to help modern businesses scale, optimize, and dominate their niche.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1"
          >
            <img 
              src="/input_file_1.png" 
              alt="Digital Services" 
              className="w-full rounded-[3rem] shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" 
            />
          </motion.div>
        </div>

        <Services />
        <Industries />

        <div className="mt-24 p-12 bg-dark rounded-[3.5rem] text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative z-10">
             Ready to build your <span className="text-primary">Next Big Thing?</span>
           </h2>
           <p className="text-white/60 max-w-2xl mx-auto relative z-10 text-lg">
             Don't wait for the competition to catch up. Start your digital transformation journey today with VJ's Digital Webworks.
           </p>
           <div className="flex justify-center relative z-10">
             <a href="#book" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-accent transition-all neon-glow">
               Start Your Project
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}
