// src/pages/AboutPage.jsx

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, Leaf, Utensils, Star, MapPin, Plane } from 'lucide-react';

// ... (animation variants remain the same) ...
const slideIn = (direction = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
});


const AboutPage = () => {
  // === UPDATED ROOM DESCRIPTIONS ARE HERE ===
  const rooms = [
    {
      name: 'Emerald',
      features: 'Inspired by the lush greenery surrounding Vijay Niwas, the Emerald Room is your private oasis of tranquility, complete with a luxurious dressing room and wardrobe.'
    },
    {
      name: 'Diamond',
      features: 'Experience pristine elegance in our Diamond Room, a bright and exceptionally spacious retreat with a large, private dressing room and a luxurious washroom.'
    },
    {
      name: 'Gold',
      features: 'Bathed in warm, natural light, the Gold Room is a sun-kissed haven of rich comfort, featuring an attached wardrobe and a spacious dressing area.'
    },
    {
      name: 'Deluxe',
      features: 'Perfect for the discerning traveler, the Deluxe Room offers a cozy sanctuary, thoughtfully designed to be your personal retreat for a wonderfully restful stay.'
    },
  ];
  // ===========================================

  const locationFeatures = [
    { icon: <Plane className="w-8 h-8 text-primary" />, text: "Near the Airport" },
    { icon: <MapPin className="w-8 h-8 text-primary" />, text: "Gateway to the Tricity" },
  ];

  return (
    <div className="space-y-20">
      {/* --- Hero Section --- */}
      <motion.section
        className="relative h-[50vh] rounded-lg overflow-hidden flex items-center justify-center text-center text-white"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/dining_hall.jpg" alt="Welcoming view of Vijay Niwas" className="absolute inset-0 w-full h-full object-cover" />
        <motion.div className="z-20 p-4" variants={fadeIn(0.3)} initial="hidden" animate="visible">
          <h1 className="text-4xl md:text-6xl font-bold font-serif">Welcome to Vijay Niwas</h1>
          <p className="mt-4 text-xl max-w-2xl">Your home on the road, where modern comforts blend with genuine hospitality.</p>
        </motion.div>
      </motion.section>
      
      {/* --- About Section --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={slideIn('left')} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">A Homestay That Feels Like Home</h2>
          <p className="text-foreground/70 leading-relaxed">
            Step into Vijay Niwas, a gold-rated haven approved by the Punjab Government. Surrounded by greenery, our home is designed for comfort, with natural light pouring into every refreshing, airy, and welcoming corner. Whether you’re pausing on a big journey or simply seeking peace, our spacious, air-conditioned rooms with built-in almirahs are your perfect retreat.
          </p>
          <div className="flex space-x-6 mt-6">
              <div className="flex items-center text-sm"><ShieldCheck className="w-5 h-5 mr-2 text-primary"/>Punjab Govt. Approved</div>
              <div className="flex items-center text-sm"><Leaf className="w-5 h-5 mr-2 text-primary"/>Surrounded by Greenery</div>
              <div className="flex items-center text-sm"><Utensils className="w-5 h-5 mr-2 text-primary"/>Homemade Punjabi Meals</div>
          </div>
        </motion.div>
        <motion.div variants={slideIn('right')} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src="outside.jpg" alt="Interior of Vijay Niwas" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </motion.div>
      </section>

      {/* --- Rooms Section --- */}
      <section className="text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold font-serif mb-8" variants={fadeIn()} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Four Unique Room Types
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <motion.div key={room.name} variants={fadeIn(index * 0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="h-full transition-transform hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center"><Star className="w-5 h-5 mr-2 text-primary"/>{room.name}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6">{room.features}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Location Section --- */}
      <section className="text-center bg-card/50 p-10 rounded-lg">
        <motion.h2 className="text-3xl md:text-4xl font-bold font-serif mb-6" variants={fadeIn()} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          A Prime & Peaceful Location
        </motion.h2>
        <motion.p className="text-foreground/70 max-w-3xl mx-auto mb-8" variants={fadeIn(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Conveniently located near the airport, Vijay Niwas is an inviting stopover for those exploring Chandigarh, the tricity, or riders on their way to the Himalayas.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          {locationFeatures.map((feature, index) => (
            <motion.div key={feature.text} className="flex flex-col items-center" variants={fadeIn(0.4 + index * 0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {feature.icon}
              <span className="mt-2 text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;