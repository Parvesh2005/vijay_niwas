// src/pages/RoomsPage.jsx

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wifi, ParkingCircle, Utensils, Home, Cctv, Info, ArrowRight } from 'lucide-react';

// Animation for elements that fade in and move up
const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration, delay, ease: 'easeInOut' } },
});

const RoomsPage = () => {
  const rooms = [
    {
      name: 'Emerald',
      title: 'Live Life King Size',
      description: 'A spacious, air-conditioned room with a window facade to bathe the room in sun. Features Maharaja sofas, a rocking chair, and a king-sized bed. The attached bathroom, personal wardrobe, and dressing room make it the ideal room for a family to relax.',
      image: '/good_room.webp',
    },
    {
      name: 'Diamond',
      title: 'Spacious & Functional',
      description: 'A fully air-conditioned, spacious room with an attached bathroom, personal dressing area, and wardrobe. The room has its own antique drawers, a king-sized bed, and a working study table and chair for the hardworking family member.',
      image: '/diamond.webp',
    },
    {
      name: 'Gold',
      title: 'Balcony with a View',
      description: 'Located on the first floor, this big spacious room is air-conditioned and offers access to a 50-foot wide long balcony to have a bird\'s eye view of the surroundings. It includes an attached bathroom, wardrobe, king-sized bed, and sofa.',
      image: '/gold.webp',
    },
    {
      name: 'Deluxe',
      title: 'Comfortable & Pocket-Friendly',
      description: 'An air-conditioned room with its own wardrobe and a comfortable double-sized bed. Located on the first floor, it offers a modern washroom just as you step out of the room, providing a perfect blend of cost and comfort.',
      image: '/deluxe.webp',
    },
  ];

  const amenities = [
    { icon: <Utensils />, text: 'Home-cooked vegetarian meals' },
    { icon: <Wifi />, text: 'High-Speed WiFi' },
    { icon: <Home />, text: 'Access to Home Swing (Emerald/Diamond)' },
    { icon: <Cctv />, text: 'CCTV Security & Fencing' },
    { icon: <ParkingCircle />, text: 'Ample Parking Space' },
    { icon: <Info />, text: 'Access to House Lawn' },
  ];

  const guidelines = [
    "Inform us of your arrival time and dietary requirements beforehand.",
    "Non-vegetarian food is strictly prohibited on the premises.",
    "Please respect meal times and check-in/check-out procedures.",
    "Dispose of trash properly and keep personal belongings tidy.",
    "Keep noise levels down, especially late at night.",
    "Use water and electricity thoughtfully.",
    "Adhere to all guidelines from law-enforcing authorities.",
  ];

  return (
    <div className="space-y-20">
      {/* Animated Header */}
      <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeIn()}>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">Our Rooms & Suites</h1>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Each of our four rooms is uniquely designed to provide a comfortable and memorable stay, blending modern comforts with traditional hospitality.
        </p>
      </motion.div>

      {/* Rooms Section */}
      <div className="space-y-16">
        {rooms.map((room, index) => (
          <motion.div 
            key={room.name} 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.2)}
          >
            <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
              <h2 className="text-3xl font-bold font-serif">{room.name}</h2>
              <h3 className="text-primary-darker text-xl font-semibold">{room.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{room.description}</p>
              <Link to="/book">
                <Button>Book This Room <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
            <img src={room.image} alt={`Image of ${room.name} room`} className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video" />
          </motion.div>
        ))}
      </div>

      <motion.hr
        className="mx-auto w-3/4 border-t-2 border-primary"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      />
      
      {/* Amenities Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.2)}>
        <h2 className="text-3xl font-bold font-serif text-center mb-8">Other Amenities</h2>
        <Card className="bg-card/50">
          <CardContent className="p-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <div key={amenity.text} className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  {amenity.icon}
                </div>
                <span className="font-medium text-foreground/80">{amenity.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.section>

      <motion.hr
        className="mx-auto w-3/4 border-t-2 border-primary"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Guest Guidelines Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.2)}>
        <h2 className="text-3xl font-bold font-serif text-center mb-8">Guest Guidelines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {guidelines.map((guideline, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
              <p className="text-foreground/70">{guideline}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-foreground/60">
          Following these guidelines will foster a positive and memorable homestay experience for all involved.
        </p>
      </motion.section>
    </div>
  );
};

export default RoomsPage;