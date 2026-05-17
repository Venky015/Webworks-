import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Designs Created', value: '100+' },
    { label: 'Industries Served', value: '12+' },
    { label: 'Happy Clients', value: '40+' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-template-columns-[1fr_1.2fr] gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl z-0" />
            <div className="relative z-10 glass p-2 rounded-[2.5rem] overflow-hidden border-2 border-gray-100">
              <img 
                src="/input_file_0.png" 
                alt="Venkat Jadhav - Founder of VJ's Digital Webworks" 
                className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-gray-100 shadow-2xl z-20"
            >
              <p className="text-primary font-display font-bold text-xl leading-none">Venkat Jadhav</p>
              <p className="text-dark/40 text-xs mt-1 uppercase tracking-widest">Founder & Digital Creator</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-display font-bold tracking-widest text-sm uppercase mb-4">Who WE ARE</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-dark">
                Crafting <span className="text-primary">Exceptional</span> Digital Experiences
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-dark/70 text-lg leading-relaxed"
            >
              <p>
                VJ’s Digital Webworks is a creative digital solutions brand founded by Venkat Jadhav. 
                Our mission is to help businesses establish a powerful online presence through websites, 
                web applications, digital branding, and social media growth strategies.
              </p>
              <p>
                As a hybrid freelancer-agency, we combine the personalized support of a freelancer with 
                the modern technology and expertise of a full-scale agency. We focus on affordable, 
                high-impact solutions tailored to your business goals.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass p-6 rounded-2xl border-gray-100 hover:border-primary/30 transition-colors group shadow-sm hover:shadow-md"
                >
                  <p className="text-3xl font-display font-bold text-dark group-hover:text-primary transition-colors">{stat.value}</p>
                  <p className="text-sm text-dark/40 group-hover:text-dark/60 transition-colors uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
