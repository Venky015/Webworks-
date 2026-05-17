import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '9,999',
    description: 'Perfect for small businesses and personal brands looking to start.',
    features: [
      'Basic Website (3-5 Pages)',
      'Mobile Responsive',
      'SEO Optimized',
      'Standard Support',
      '7-10 Days Delivery'
    ],
    popular: false,
    cta: 'Choose Starter'
  },
  {
    name: 'Professional',
    price: '24,999',
    description: 'Ideal for local businesses and clinics needing advanced features.',
    features: [
      'Full Business Website',
      'Custom Booking System',
      'Social Media Integration',
      'Priority Support',
      '2-3 Weeks Delivery',
      'Basic Content Writing'
    ],
    popular: true,
    cta: 'Choose Professional'
  },
  {
    name: 'Premium',
    price: '49,999',
    description: 'A complete digital growth engine for startups and established brands.',
    features: [
      'Custom Web Application',
      'Full E-Commerce Setup',
      'Ads Management (1 Month)',
      'Advanced SEO Strategy',
      'Custom Branding Kit',
      'Support for 6 Months'
    ],
    popular: false,
    cta: 'Choose Premium'
  }
];

import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-display font-bold uppercase tracking-widest text-sm">Investment Plans</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">Simple & Transparent <span className="text-primary italic">Pricing</span></h2>
          <p className="text-dark/40 max-w-xl mx-auto mt-4">
            Invest in your digital future with plans that scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white border ${
                plan.popular 
                  ? 'border-primary/50 shadow-primary/10 shadow-2xl scale-105 z-10' 
                  : 'border-gray-100 opacity-90 hover:opacity-100 hover:border-primary/20 transition-all shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] uppercase font-bold rounded-full tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8 text-dark">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-dark/40 text-sm h-12 leading-relaxed">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-dark/40 font-semibold">₹</span>
                  <span className="text-5xl font-display font-bold tracking-tight text-dark">{plan.price}</span>
                  <span className="text-dark/40 text-sm font-medium">/project</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <Check size={12} />
                    </div>
                    <span className="text-sm text-dark/60">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                plan.popular 
                  ? 'bg-primary text-white neon-glow hover:bg-accent' 
                  : 'bg-bg-secondary text-dark border border-gray-100 hover:bg-gray-100'
              }`}>
                {plan.cta} <Zap size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
