import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'py-4 glass border-b shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">VJ</span>
          </div>
          <span className={scrolled || location.pathname !== '/' ? 'text-dark' : 'text-dark'}>Digital <span className="text-primary text-glow">Webworks</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-primary underline decoration-2 underline-offset-4' : 'text-dark/70 hover:text-dark'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="px-6 py-2 bg-primary rounded-full text-sm font-semibold flex items-center gap-2 neon-glow transition-colors text-white"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass border-t md:hidden p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 border-b border-dark/5 ${
                  location.pathname === link.href ? 'text-primary' : 'text-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-3 bg-primary rounded-xl text-center font-bold text-white shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
