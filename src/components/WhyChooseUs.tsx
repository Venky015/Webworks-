import { motion } from 'motion/react';
import { 
  ShieldCheck, Rocket, Layout, Smartphone, 
  Search, Users, Headphones, Lightbulb 
} from 'lucide-react';

const reasons = [
  {
    title: 'Affordable Pricing',
    icon: <ShieldCheck />,
    description: 'Premium quality solutions that fit your budget perfectly.'
  },
  {
    title: 'Fast Delivery',
    icon: <Rocket />,
    description: 'We value your time and deliver rapid, high-quality results.'
  },
  {
    title: 'Modern Design',
    icon: <Layout />,
    description: 'Futuristic and clean UI/UX tailored for your brand.'
  },
  {
    title: 'Mobile Optimized',
    icon: <Smartphone />,
    description: 'Fully responsive designs that work perfectly on all devices.'
  },
  {
    title: 'SEO Friendly',
    icon: <Search />,
    description: 'Built-in SEO best practices to help you rank higher.'
  },
  {
    title: 'Business Focused',
    icon: <Users />,
    description: 'Every design choice is driven by your business growth.'
  },
  {
    title: 'One-to-One Support',
    icon: <Headphones />,
    description: 'Direct communication and personalized expert support.'
  },
  {
    title: 'Creative Strategy',
    icon: <Lightbulb />,
    description: 'Innovative digital strategies to stay ahead of the competition.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-display font-bold uppercase tracking-widest text-sm">Our Edge</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">Why <span className="text-primary italic">Choose</span> Us?</h2>
          <p className="text-dark/40 max-w-xl mx-auto italic">
            Combining technology, creativity, and strategy to build your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all group flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                {reason.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-dark group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-dark/40 text-sm leading-relaxed group-hover:text-dark/60 transition-colors">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
