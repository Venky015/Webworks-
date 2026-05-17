import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How much does a professional website cost?',
    answer: 'Our pricing is tailored to your specific needs. Starter business websites begin at an affordable range, while complex web applications are priced based on features and functionality. Check our Pricing section or book a call for a custom quote.'
  },
  {
    question: 'What is the typical delivery time for a project?',
    answer: 'Landing pages and small websites usually take 7-10 days. More complex web apps or e-commerce stores can take 4-8 weeks depending on the scope. We prioritize speed without compromising quality.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept payments via Razorpay, Stripe, and PayPal. You can pay using Credit/Debit Cards, UPI, Net Banking, or international transfers.'
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes! We provide 3 to 6 months of complimentary technical support depending on your package. We also offer maintenance plans for long-term updates and security.'
  },
  {
    question: 'Can you help with SEO and Social Media too?',
    answer: 'Absolutely. We offer complete digital growth packages including Search Engine Optimization, Instagram/Facebook management, and targeted ad campaigns.'
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Every project we build is mobile-first and fully responsive, ensuring it looks and works perfectly on smartphones, tablets, and desktops.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-display font-bold uppercase tracking-widest text-sm">Common Questions</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">Frequently Asked <span className="text-primary italic">Questions</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-display font-semibold text-lg text-dark">{faq.question}</span>
                <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === i ? 'bg-primary text-white rotate-[135deg]' : 'bg-gray-100 text-dark/40'}`}>
                  <Plus size={18} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-dark/60 leading-relaxed border-t border-gray-50 mx-6 py-6 font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
