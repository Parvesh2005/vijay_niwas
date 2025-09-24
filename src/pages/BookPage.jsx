// src/pages/BookPage.jsx

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Instagram, Facebook, BedDouble, Home } from 'lucide-react';

// Animation for elements that fade in and move up
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
});

// Animation for the separator line
const lineAnimation = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "50%", transition: { duration: 0.8, ease: 'easeOut' } },
};

const BookPage = () => {
  // Placeholder links for booking sites
  const bookingSites = [
    { name: 'Airbnb', href: '#' },
    { name: 'Booking.com', href: '#' },
    { name: 'MakeMyTrip', href: '#' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 text-center">
      {/* Animated Header */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn()}>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">Book Your Stay</h1>
        <p className="mt-4 text-lg text-foreground/70">
          We're excited to host you. Please use one of the methods below to make your reservation.
        </p>
      </motion.div>

      <motion.hr
        className="mx-auto w-3/4 border-t-2 border-primary"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Direct Booking Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.2)}>
        <h2 className="text-3xl font-bold font-serif mb-6">Book Directly With Us</h2>
        <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
          For the best rates and personalized service, we recommend booking directly. Contact us via phone, WhatsApp, or email.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="tel:+919416201637">
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="p-6 flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-950/50 rounded-lg">
                <Phone className="w-10 h-10 mb-3 text-blue-500" />
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-sm text-foreground/70">+91 94162 01637</p>
              </CardContent>
            </Card>
          </a>
          <a href="https://wa.me/919416201637" target="_blank" rel="noopener noreferrer">
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="p-6 flex flex-col items-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-950/50 rounded-lg">
                <MessageSquare className="w-10 h-10 mb-3 text-green-500" />
                <h3 className="text-lg font-semibold">WhatsApp</h3>
                <p className="text-sm text-foreground/70">Message Us</p>
              </CardContent>
            </Card>
          </a>
          <a href="mailto:vijayniwas83@gmail.com">
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="p-6 flex flex-col items-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/50 dark:to-red-950/50 rounded-lg">
                <Mail className="w-10 h-10 mb-3 text-red-500" />
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-sm text-foreground/70">vijayniwas83@gmail.com</p>
              </CardContent>
            </Card>
          </a>
        </div>
      </motion.div>

      {/* --- Animated Separator Line --- */}
      <motion.hr
        className="mx-auto w-3/4 border-t-2 border-primary"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Third-Party Booking Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.2)}>
        <h2 className="text-3xl font-bold font-serif mb-6">Find Us On Other Platforms</h2>
        <div className="max-w-md mx-auto space-y-4">
          {bookingSites.map((site) => (
            <a href={site.href} key={site.name} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full h-14 text-lg">
                <BedDouble className="w-5 h-5 mr-3" />
                Book on {site.name}
              </Button>
            </a>
          ))}
        </div>
      </motion.div>

      {/* --- Animated Separator Line --- */}
      <motion.hr
        className="mx-auto w-3/4 border-t-2 border-primary"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      />
      
      {/* === ADDED NEW SECTION FOR FULL HOMESTAY BOOKING === */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.2)}>
        <Card className="bg-gradient-to-tr from-primary/20 to-card">
          <CardContent className="p-8">
            <Home className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold font-serif">Need the Entire Place?</h2>
            <p className="mt-2 text-foreground/70 max-w-xl mx-auto">
              For special events, family gatherings, or group stays, you can book the entire homestay. Please contact us directly via Call or WhatsApp for availability and special arrangements.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Media Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.2)}>
        <h2 className="text-3xl font-bold font-serif">Connect With Us On</h2>
        <div className="mt-6 flex justify-center gap-8 md:gap-12">
          <a href="https://www.instagram.com/vijayniwas8?igsh=MW5wenQzc3FhenU5aQ==" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary group">
            <div className="flex flex-col items-center transition-transform group-hover:-translate-y-1">
              <Instagram className="w-8 h-8" />
              <span className="mt-2 text-sm font-medium">Instagram</span>
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61578960091959" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary group">
            <div className="flex flex-col items-center transition-transform group-hover:-translate-y-1">
              <Facebook className="w-8 h-8" />
              <span className="mt-2 text-sm font-medium">Facebook</span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default BookPage;