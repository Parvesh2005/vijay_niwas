import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const MotionLink = motion(Link);

const AnimatedNavLink = ({ to, children, className, onClick }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = location.pathname === to;

  return (
    <MotionLink
      to={to}
      onClick={onClick} // Pass the onClick handler to the Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Combine default styles with any custom classes passed in
      className={`relative py-2 text-sm font-medium transition-colors ${
        isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
      } ${className || ""}`}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] w-full bg-primary"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        style={{ originX: 0.5 }}
        initial="hidden"
        animate={isHovered || isActive ? "visible" : "hidden"}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </MotionLink>
  );
};

export default AnimatedNavLink;