import { motion } from 'motion/react';
import { 
  Hospital, Utensils, Users, Store, 
  Building2, School, Scissors, Dumbbell 
} from 'lucide-react';

const industries = [
  { name: 'Hospitals', icon: <Hospital size={32} /> },
  { name: 'Restaurants', icon: <Utensils size={32} /> },
  { name: 'Creators', icon: <Users size={32} /> },
  { name: 'Local Shops', icon: <Store size={32} /> },
  { name: 'Real Estate', icon: <Building2 size={32} /> },
  { name: 'Institutes', icon: <School size={32} /> },
  { name: 'Salons', icon: <Scissors size={32} /> },
  { name: 'Fitness', icon: <Dumbbell size={32} /> },
];

export default function Industries() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-dark"
          >
            Industries We <span className="text-primary italic">Serve</span>
          </motion.h2>
          <p className="text-dark/40 mt-4 max-w-xl mx-auto italic">
            Tailored digital strategies for diverse business sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(239, 68, 68, 0.05)',
                borderColor: 'rgba(239, 68, 68, 0.3)'
              }}
              className="bg-white p-8 rounded-3xl flex flex-col items-center justify-center gap-6 border border-gray-100 transition-all cursor-default shadow-sm hover:shadow-md text-dark"
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <p className="text-lg font-display font-semibold tracking-tight">{industry.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
