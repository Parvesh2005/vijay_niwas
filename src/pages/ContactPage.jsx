import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare, Clock } from 'lucide-react';

// <div class="embed-map-responsive"><div class="embed-map-container"><iframe class="embed-map-frame" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=30%C2%B043%2744.1%22N%2076%C2%B041%2712.8%22E&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe><a href="https://sprunkiretake.net" style="font-size:2px!important;color:gray!important;position:absolute;bottom:0;left:0;z-index:1;max-height:1px;overflow:hidden">sprunki retake</a></div><style>.embed-map-responsive{position:relative;text-align:right;width:100%;height:0;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;}</style></div>

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const ContactPage = () => {
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
      icon: <MessageSquare className="w-10 h-10 mb-4 text-primary" />,
      title: 'WhatsApp',
      content: 'Click to Message Us',
      href: 'https://wa.me/919416201637',
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
            <Card className="h-full text-center flex flex-col items-center justify-center p-6 transition-shadow hover:shadow-lg">
              <CardHeader className="items-center">
                {method.icon}
                <CardTitle>{method.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-base">
                <a href={method.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {method.content}
                </a>
              </CardDescription>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* === ADDED RECEPTION HOURS TEXT BELOW CARDS === */}
      <motion.div
        className="text-center flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Clock className="w-5 h-5 mr-3 text-primary" />
        <p className="text-foreground/80">
          <span className="font-semibold">Reception Hours:</span> EveryDay: 6AM - 10PM
        </p>
      </motion.div>
      
      {/* Map Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
          <iframe
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=30%C2%B043%2744.1%22N%2076%C2%B041%2712.8%22E&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
      
      {/* "Connect With Us" Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <h2 className="text-3xl font-bold font-serif">Connect With Us</h2>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://www.instagram.com/vijayniwas8?igsh=MW5wenQzc3FhenU5aQ==" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-center transition-transform group-hover:-translate-y-1">
              <Instagram className="w-8 h-8" />
              <span className="mt-2 text-sm font-medium underline">vijayniwas8</span>
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61578960091959" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-center transition-transform group-hover:-translate-y-1">
              <Facebook className="w-8 h-8" />
              <span className="mt-2 text-sm font-medium underline">Vijay Niwas</span>
            </div>
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