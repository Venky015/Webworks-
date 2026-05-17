import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, MessageCircle, Github, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 bg-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-dark/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 pb-20 border-b border-gray-100">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 text-dark">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">VJ</span>
              </div>
              <span>Digital <span className="text-primary">Webworks</span></span>
            </div>
            <p className="text-dark/40 leading-relaxed max-w-sm">
              We build premium digital solutions that help modern businesses scale and succeed in a fast-paced technology world.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-3 glass rounded-xl text-dark/40 hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm underline decoration-primary decoration-4 underline-offset-8 text-dark">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-dark/40 hover:text-primary transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 text-dark font-display">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm underline decoration-primary decoration-4 underline-offset-8">Services</h4>
            <ul className="space-y-4 font-sans">
              {['Web Development', 'App Development', 'Marketing', 'SEO', 'Branding'].map(service => (
                <li key={service}>
                  <Link to="/services" className="text-dark/40 hover:text-primary transition-colors text-sm">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm underline decoration-primary decoration-4 underline-offset-8 text-dark">Stay Updated</h4>
            <div className="space-y-4">
              <p className="text-dark/40 text-sm">Join our newsletter for digital growth tips.</p>
              <div className="flex p-2 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent px-4 py-2 text-sm focus:outline-none flex-1 border-none text-dark"
                />
                <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-accent transition-all">Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-dark/20 text-xs flex items-center gap-2">
            © {currentYear} VJ's Digital Webworks. Crafted with <Heart size={12} className="text-primary fill-primary" /> by Venkat Jadhav.
          </p>
          
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-dark/20 hover:text-dark transition-colors text-xs">{item}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919373615488" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 shadow-green-500/20"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}
