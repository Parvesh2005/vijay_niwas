import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Rooms', href: '/rooms' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact Us', href: '/contact' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    // This footer is now full-width and has the background color
    <footer className="bg-background/80 border-t mt-12">
      {/* This container div now constrains the content inside the full-width footer */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ... All grid content remains the same ... */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Vijay Niwas Logo" className="h-10 w-auto" />
              <span className="ml-3 font-serif text-2xl font-bold">Vijay Niwas</span>
            </Link>
            <p className="mt-4 text-sm text-foreground/60 max-w-xs">
              Experience tranquility and unmatched hospitality amidst the serene hills.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-foreground/70 hover:text-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-4 text-foreground/70">
              <p>
                <strong>Address:</strong><br />
                Vijay Niwas, House No. 83, Sector-119<br />
                Puda Gateway City, Mohali, Punjab - 160055
              </p>
              <a href="mailto:vijayniwas83@gmail.com" className="flex items-center hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                vijayniwas83@gmail.com
              </a>
              <a href="tel:+919416201637" className="flex items-center hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +91 94162 01637
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-foreground/50 mb-4 sm:mb-0">
            © {currentYear} Vijay Niwas. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vijayniwas8?igsh=MW5wenQzc3FhenU5aQ==" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578960091959" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://wa.me/919416201637" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
              <MessageSquare className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;