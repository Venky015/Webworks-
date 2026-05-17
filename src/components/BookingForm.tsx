import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    package: '',
    date: '',
    time: '',
    name: '',
    email: '',
    requirements: ''
  });

  const services = ['Web Development', 'Web App', 'Marketing', 'Branding', 'Content'];
  const packages = ['Starter', 'Professional', 'Premium'];

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <section id="book" className="py-24 relative bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">Book Your <span className="text-primary italic">Success</span></h2>
                <p className="text-dark/40">Secure your slot for a free digital consultation.</p>
              </div>
              
              <div className="flex gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                {[1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                      step === i ? 'bg-primary text-white shadow-lg' : 'bg-white text-dark/20'
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>

            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="space-y-4 text-dark">
                  <p className="font-display font-semibold text-lg">Select Service</p>
                  <div className="flex flex-wrap gap-3">
                    {services.map(s => (
                      <button
                        key={s}
                        onClick={() => setFormData({...formData, service: s})}
                        className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all border ${
                          formData.service === s ? 'bg-primary border-primary text-white shadow-lg' : 'bg-gray-50 border-gray-100 text-dark/40 hover:text-dark/70 hover:bg-gray-100'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-dark">
                  <p className="font-display font-semibold text-lg">Choose Package</p>
                  <div className="grid grid-cols-3 gap-3">
                    {packages.map(p => (
                      <button
                        key={p}
                        onClick={() => setFormData({...formData, package: p})}
                        className={`p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all border ${
                          formData.package === p ? 'bg-primary border-primary text-white shadow-lg' : 'bg-gray-50 border-gray-100 text-dark/40 hover:text-dark/70 hover:bg-gray-100'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  disabled={!formData.service || !formData.package}
                  onClick={nextStep}
                  className="w-full mt-8 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 neon-glow hover:bg-accent disabled:opacity-30 transition-all group shadow-xl"
                >
                  Continue <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8 text-dark">
                  <div className="space-y-4">
                    <p className="font-display font-semibold text-lg flex items-center gap-2"><Calendar size={20} className="text-primary"/> Pick a Date</p>
                    <input 
                      type="date"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-dark focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="font-display font-semibold text-lg flex items-center gap-2"><Clock size={20} className="text-primary"/> Preferred Time</p>
                    <select 
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-dark focus:outline-none focus:border-primary transition-all cursor-pointer"
                    >
                      <option value="">Select a time</option>
                      <option value="Morning">Morning (10:00 - 13:00)</option>
                      <option value="Afternoon">Afternoon (14:00 - 17:00)</option>
                      <option value="Evening">Evening (18:00 - 21:00)</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full mt-8 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 neon-glow hover:bg-accent transition-all group shadow-xl"
                >
                  Confirm Slot <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => setStep(1)} className="w-full text-dark/40 text-sm hover:text-dark transition-colors">Go Back</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-4">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-dark focus:outline-none focus:border-primary transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-4">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-dark focus:outline-none focus:border-primary transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-4">Project Brief (Optional)</label>
                    <textarea 
                      rows={3} 
                      placeholder="Tell us a bit about your project..." 
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-dark focus:outline-none focus:border-primary transition-all" 
                    />
                  </div>
                </div>

                <button 
                  disabled={!formData.name || !formData.email}
                  onClick={nextStep}
                  className="w-full mt-4 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 neon-glow hover:bg-accent disabled:opacity-30 transition-all group shadow-xl"
                >
                  Book My Consultation <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => setStep(2)} className="w-full text-dark/40 text-sm hover:text-dark transition-colors">Go Back</button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-12"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-4 border-primary/20 text-primary">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-4 text-dark">
                  <h3 className="text-4xl font-display font-bold">Booking Successful!</h3>
                  <p className="text-dark/60">We've confirmed your consultation for <span className="text-primary font-bold">{formData.date}</span>.</p>
                </div>
                <div className="bg-bg-secondary p-6 rounded-3xl inline-block border border-gray-100">
                  <p className="text-xs text-dark/40 uppercase tracking-widest mb-1">Service & Time</p>
                  <p className="font-display font-bold text-dark">{formData.service} — {formData.package} Plan ({formData.time})</p>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold neon-glow shadow-xl hover:bg-accent transition-all">Check Your Email</button>
                  <button onClick={() => setStep(1)} className="text-dark/40 text-sm hover:text-dark">New Booking</button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
