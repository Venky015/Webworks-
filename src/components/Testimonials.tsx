import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Dr. Sameer Kulkarni',
    business: 'City Heart Hospital',
    text: "VJ's team transformed our hospital's digital presence. Our patient inquiries have increased by 40% since the new web app went live. Highly professional!",
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Sarah Jennifer',
    business: 'Fashion Influencer',
    text: "As a creator, I needed a brand identity that felt 'me'. Venkat understood my vision perfectly and delivered a stunning social media kit and portfolio.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Amit Patel',
    business: 'Spicy Bistro',
    text: "The restaurant booking system VJ built is seamless. Our customers love the ease of use, and our staff finds the admin dashboard incredibly helpful.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden bg-bg-secondary">
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md space-y-6">
            <Quote className="text-primary" size={48} />
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-dark">
              Real Stories from <span className="text-primary italic">Real Clients</span>
            </h2>
            <p className="text-dark/60">
              Trusted by professionals across various industries. See what they have to say about our impact.
            </p>
            <div className="flex gap-4 pt-4">
              <button onClick={prev} className="p-4 glass rounded-full hover:bg-primary hover:text-white transition-all shadow-md text-dark">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="p-4 glass rounded-full hover:bg-primary hover:text-white transition-all shadow-md text-dark">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex-1 w-full relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative w-full">
                  <div className="absolute -top-10 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-display font-medium leading-relaxed italic mb-8 text-dark">
                    "{testimonials[index].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[index].image} 
                      alt={testimonials[index].name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 grayscale hover:grayscale-0 transition-all duration-500 shadow-sm"
                    />
                    <div>
                      <p className="font-display font-bold text-lg text-dark">{testimonials[index].name}</p>
                      <p className="text-primary text-sm font-semibold">{testimonials[index].business}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
