import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypewriterTitleProps {
  children: string; // Restrict to string for proper splitting
  className?: string;
  as?: React.ElementType; 
  delay?: number;
  showCursor?: boolean;
}

export const TypewriterTitle: React.FC<TypewriterTitleProps> = ({ 
  children, 
  className = "", 
  as: Component = 'h2',
  delay = 0,
  showCursor = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Adjust speed of typing here
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, display: "none" }, // display: none prevents spacing from being taken up before render
    visible: { 
        opacity: 1, 
        display: "inline",
        transition: {
            duration: 0
        }
    },
  };

  return (
    <Component className={`${className} inline-block`} ref={ref} aria-label={children}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children.split("").map((char, index) => (
          <motion.span key={index} variants={childVariants}>
            {char}
          </motion.span>
        ))}
        {/* 
           Blinking Cursor Effect 
           Wrapped in a w-0 container so it doesn't affect document flow/width 
        */}
        {showCursor && (
          <span className="inline-block w-0 overflow-visible">
              <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="text-nevasca-blue ml-1 inline-block align-baseline"
                  aria-hidden="true"
              >
                  _
              </motion.span>
          </span>
        )}
      </motion.span>
    </Component>
  );
};