import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-0">
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Pricing />
        
        {/* Call to Action Banner using input_file_4 */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="relative rounded-[3.5rem] overflow-hidden group h-[400px] flex items-center justify-center text-center px-8 shadow-2xl">
            <img 
              src="/input_file_4.png" 
              alt="Build Your Vision" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.2] group-hover:brightness-[0.3] transition-all duration-700 group-hover:scale-105" 
            />
            <div className="relative z-10 space-y-6 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight uppercase tracking-tighter">
                Ready for the <span className="text-primary italic">Next Step?</span> <br />
                Let's Build It.
              </h2>
              <p className="text-white/70 text-lg">
                Upgrade your web game. Transform your digital presence with VJ's Digital Webworks.
              </p>
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg neon-glow hover:bg-accent transition-all inline-block"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </>
  );
}
