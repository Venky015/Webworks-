import { motion } from 'motion/react';
import { Target, Heart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const values = [
    { icon: <Target className="text-primary" />, title: 'Mission', desc: 'To provide high-quality digital solutions that bridge the gap between complexity and simplicity.' },
    { icon: <Heart className="text-primary" />, title: 'Passsion', desc: 'We take pride in every pixel we place and every line of code we write for our clients.' },
    { icon: <Shield className="text-primary" />, title: 'Integrity', desc: 'Transparency and honesty are at the heart of our collaboration process.' },
    { icon: <Users className="text-primary" />, title: 'Community', desc: 'We aim to empower small businesses and creators through modern technology.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-display font-bold uppercase tracking-widest text-sm underline decoration-primary/30 underline-offset-8">Our Story</span>
              <h1 className="text-5xl font-display font-bold text-dark leading-tight">
                The Journey Behind <span className="italic text-primary">VJ's Digital Webworks</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-dark/70 text-lg leading-relaxed">
              <p>
                Founded by Venkat Jadhav, VJ's Digital Webworks was born out of a desire to simplify the digital world for businesses. 
                What started as a passion for web development has evolved into a full-service creative partner for brands around the globe.
              </p>
              <p>
                We believe that every business, regardless of size, deserves a premium digital presence. 
                Our approach is rooted in understanding your unique goals and translating them into functional, 
                beautiful digital tools that drive real growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-primary/10 rounded-[4rem] blur-3xl" />
            <img 
              src="/input_file_0.png" 
              alt="Venkat Jadhav Profile" 
              className="relative z-10 w-full rounded-[3.5rem] shadow-2xl border-2 border-white grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
        </div>

        {/* Next Steps Section - Using input_file_4 */}
        <div className="mb-32 rounded-[3.5rem] overflow-hidden relative group">
          <div className="absolute inset-0 bg-dark/60 z-10 group-hover:bg-dark/40 transition-colors duration-500" />
          <img src="/input_file_4.png" alt="Build Banner" className="w-full h-[500px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 space-y-6">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-display font-bold text-white max-w-4xl"
             >
               READY TO <span className="text-primary italic">TRANSFORM</span> YOUR BUSINESS?
             </motion.h2>
             <p className="text-white/80 text-xl max-w-2xl font-display">
               Upgrade your web game. Let's discuss your vision.
             </p>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
               <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-accent transition-all neon-glow">
                 Start Now
               </Link>
             </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {v.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-dark mb-4">{v.title}</h3>
              <p className="text-dark/40 leading-relaxed text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
