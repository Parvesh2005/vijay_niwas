// src/pages/ContactPage.jsx

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare, Clock } from 'lucide-react';

// Animation variants for the container to orchestrate staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const ContactPage = () => {
  // Primary contact methods for the featured cards
  const primaryContacts = [
    {
      icon: <Mail className="w-10 h-10 mb-4 text-primary" />,
      title: 'Email Us',
      content: 'vijayniwas83@gmail.com',
      href: 'mailto:vijayniwas83@gmail.com',
    },
    {
      icon: <Phone className="w-10 h-10 mb-4 text-primary" />,
      title: 'Call Us',
      content: '+91 94162 01637',
      href: 'tel:+919416201637',
    },
    {
      icon: <Clock className="w-10 h-10 mb-4 text-primary" />,
      title: 'Reception Hours',
      content: (
        <span>
          Mon - Fri: 9 AM - 6 PM<br />
          Sat - Sun: 10 AM - 4 PM
        </span>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Animated Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">Get In Touch</h1>
        <p className="mt-4 text-lg text-foreground/70">
          We're here to help and answer any question you might have.
        </p>
      </motion.div>

      {/* Primary Contact Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {primaryContacts.map((method) => (
          <motion.div key={method.title} variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
            <Card className="h-full text-center flex flex-col items-center justify-center p-6 transition-shadow hover-shadow-lg">
              <CardHeader className="items-center">
                {method.icon}
                <CardTitle>{method.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-base">
                {method.href ? (
                  <a href={method.href} className="hover:underline">
                    {method.content}
                  </a>
                ) : (
                  method.content
                )}
              </CardDescription>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      {/* === MAP SECTION MOVED HERE === */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }} // Adjusted delay
      >
        <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
          <iframe
            src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=puda%20city%2C%20sector%20119%2C%20mohali&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
      
      {/* === "CONNECT WITH US" SECTION MOVED HERE === */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }} // Adjusted delay
      >
        <h2 className="text-3xl font-bold font-serif">Connect With Us</h2>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://www.instagram.com/vijayniwas8?igsh=MW5wenQzc3FhenU5aQ==" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-transform hover:-translate-y-1">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61578960091959" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-transform hover:-translate-y-1">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://wa.me/919416201637" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-transform hover:-translate-y-1">
            <MessageSquare className="w-8 h-8" />
          </a>
        </div>
        <div className="mt-8 flex justify-center items-start">
            <MapPin className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
            <p className="text-foreground/70">
              Vijay Niwas, House No. 83, Sector-119, Puda Gateway City, Mohali, Punjab - 160055
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;