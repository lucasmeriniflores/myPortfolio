import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }} // Increased zoom depth (0.8 instead of 0.9)
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ 
        once: false, // Allows animation to reset when scrolling out/back in
        amount: 0.2, // Triggers when 20% of element is visible
        margin: "0px 0px -100px 0px" // Slight offset to trigger exit earlier for better effect
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smooth "cinematic" feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};