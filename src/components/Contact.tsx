import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          {/* Info Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-display font-bold uppercase tracking-widest text-sm"
              >
                Get In Touch
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-bold leading-tight text-dark"
              >
                Let's Build Something <span className="text-primary italic">Amazing</span> Together
              </motion.h2>
              <p className="text-dark/40 text-lg">
                Ready to take your business to the next level? Fill out the form or reach out through our channels.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail size={24} />, label: 'Email Us', value: 'hello@vjswebworks.com', link: 'mailto:hello@vjswebworks.com' },
                { icon: <Phone size={24} />, label: 'Call Us', value: '+91 93736 15488', link: 'tel:+919373615488' },
                { icon: <MapPin size={24} />, label: 'Visit', value: 'Mumbai, India', link: '#' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-dark/40 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-display font-bold text-dark group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, MessageCircle].map((Icon, i) => (
                <button key={i} className="p-4 glass rounded-2xl text-dark/40 hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl relative"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 relative z-10"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 border-2 border-green-100">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-dark">Message Sent!</h3>
                  <p className="text-dark/40">We've received your inquiry and will get back to you within 24 hours.</p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-4">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-dark shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-4">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-dark shadow-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-4">Select Service</label>
                  <select required className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-dark appearance-none shadow-sm cursor-pointer">
                    <option value="">Choose a service...</option>
                    <option value="web">Website Development</option>
                    <option value="app">Web App Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="branding">Branding & Design</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-4">Project Requirements</label>
                  <textarea required rows={4} placeholder="Tell us about your project..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-dark shadow-sm" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 neon-glow hover:bg-accent transition-all shadow-xl"
                >
                  Send Message <Send size={20} />
                </motion.button>
              </form>
            )}

            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -mb-16 -mr-16" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
