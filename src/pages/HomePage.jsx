import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Instagram, Facebook, MessageSquare } from 'lucide-react';

const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration, delay, ease: 'easeInOut' } },
});

const HomePage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* --- Hero Section --- */}
      <section className="relative h-[75vh] -mt-8 -mx-4 md:-mx-6 rounded-b-lg overflow-hidden flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="/dining_hall.webp" alt="Beautiful exterior of Vijay Niwas homestay" className="absolute inset-0 w-full h-full object-cover" />
        <motion.div className="z-20 p-4" initial="hidden" animate="visible" variants={fadeIn(0.2, 0.8)}>
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">A Personal Haven of<br />Comfort & Hospitality</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover a gold-rated homestay experience in Mohali, where every stay is a story.
          </p>
          <Link to="/book">
            <Button size="lg" className="mt-8">
              Book Your Stay <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* --- Rooms Preview Section --- */}
      <motion.section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn()}>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Our Rooms</h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            We offer four distinct room types, from the cozy Deluxe to the elegant Emerald, each designed for ultimate comfort. All rooms feature modern amenities and plenty of natural light, ensuring a refreshing and memorable stay.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link to="/rooms">
              <Button variant="outline">Explore All Rooms</Button>
            </Link>
            <Link to="/book">
              <Button>Book Now</Button>
            </Link>
          </div>
        </div>
        <img src="good_room.webp" alt="A bright and airy room at Vijay Niwas" className="rounded-lg shadow-lg w-full h-auto object-cover" />
      </motion.section>

      {/* --- Separator Line --- */}
      <motion.hr
        className="mx-auto w-3/4 border-t-2 border-primary"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* --- About Us Preview --- */}
      <motion.section className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn()}>
        <h2 className="text-3xl md:text-4xl font-bold font-serif">More Than a Stay, It's an Experience</h2>
        <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
          Vijay Niwas is a family-run, Punjab Government-approved homestay where traditional Punjabi hospitality meets modern comfort. Come for the convenience, stay for the warmth.
        </p>
        <Link to="/about">
          <Button variant="outline" className="mt-6">
            Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </motion.section>
      
      {/* --- Separator Line --- */}
      <motion.hr
        className="mx-auto w-3/4 border-t-2 border-primary"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* --- Contact & Socials Section --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn()}>
        <Card className="bg-card/50">
          <CardContent className="p-10 text-center">
            <h2 className="text-3xl font-bold font-serif">Get in Touch & Follow Our Journey</h2>
            <p className="mt-2 text-foreground/70">We're always here to help. For bookings or inquiries, connect with us.</p>
            <div className="mt-8 flex justify-center gap-8 md:gap-12">
              <a href="https://www.instagram.com/vijayniwas8?igsh=MW5wenQzc3FhenU5aQ==" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary group">
                <div className="flex flex-col items-center transition-transform group-hover:-translate-y-1">
                  <Instagram className="w-8 h-8" />
                  <span className="mt-2 text-sm font-medium underline">vijayniwas8</span>
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578960091959" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary group">
                <div className="flex flex-col items-center transition-transform group-hover:-translate-y-1">
                  <Facebook className="w-8 h-8" />
                  <span className="mt-2 text-sm font-medium underline">Vijay Niwas</span>
                </div>
              </a>
              <a href="https://wa.me/919416201637" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary group">
                <div className="flex flex-col items-center transition-transform group-hover:-translate-y-1">
                  <MessageSquare className="w-8 h-8" />
                  <span className="mt-2 text-sm font-medium underline">WhatsApp</span>
                </div>
              </a>
            </div>
            <Link to="/contact">
              <Button className="mt-8">
                Go to Contact Page <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default HomePage;