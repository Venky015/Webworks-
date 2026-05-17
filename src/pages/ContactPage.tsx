import Contact from '../components/Contact';
import BookingForm from '../components/BookingForm';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-dark tracking-tighter">
            Get In <span className="text-primary italic">Touch</span>
          </h1>
          <p className="text-xl text-dark/40 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can turn your vision into a digital reality.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <Contact />
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl opacity-50" />
            <img 
              src="/input_file_3.png" 
              alt="Contact Support" 
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
        <div className="mt-24">
          <BookingForm />
        </div>
        <div className="mt-24">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
