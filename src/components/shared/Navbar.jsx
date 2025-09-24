import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import AnimatedNavLink from './AnimatedNavLink';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Rooms', href: '/rooms' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container flex h-16 items-center px-4 md:px-6">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.webp" alt="Vijay Niwas Logo" className="h-10 w-auto" />
            <span className="ml-3 font-serif text-2xl font-bold">Vijay Niwas</span>
          </Link>
          <nav className="mx-auto flex items-center space-x-6">
            {navLinks.map((link) => (
              <AnimatedNavLink key={link.title} to={link.href}>
                {link.title}
              </AnimatedNavLink>
            ))}
          </nav>
          <Link to="/book">
            <Button>Book Now</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden relative flex w-full items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="left" className="flex flex-col">
              <div className="grid gap-4 py-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center pb-4 border-b">
                  <img src="/logo.webp" alt="Vijay Niwas Logo" className="h-9 w-auto" />
                  <span className="ml-3 font-serif text-2xl font-bold">Vijay Niwas</span>
                </Link>
                
                {navLinks.map((link) => (
                  <AnimatedNavLink
                    key={link.title}
                    to={link.href}
                    className="text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </AnimatedNavLink>
                ))}
              </div>
              <div className="mt-auto pb-4">
                <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            <img src="/logo.webp" alt="Vijay Niwas Logo" className="h-9 w-auto" />
            <span className="ml-2 font-serif text-xl font-bold">Vijay Niwas</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;