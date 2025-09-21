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
    // This header is now full-width and has the background color
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      {/* This container div now constrains the content inside the full-width header */}
      <div className="container flex h-16 items-center px-4 md:px-6">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Vijay Niwas Logo" className="h-10 w-auto" />
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
        <div className="md:hidden flex w-full items-center justify-between">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            {/* ... Mobile menu code remains the same ... */}
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="grid gap-4 py-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold pb-2 border-b font-serif">
                  Vijay Niwas
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
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Vijay Niwas Logo" className="h-9 w-auto" />
            <span className="ml-2 font-serif text-xl font-bold">Vijay Niwas</span>
          </Link>
          <div className="w-10"></div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;