import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      // Subtle movement values
      targetX = x * 2; 
      targetY = y * 2;
    };

    // Use GSAP ticker for smooth animation loop if available, else requestAnimationFrame
    const gsap = (window as any).gsap;
    
    let ticker: any;

    if (gsap) {
        ticker = gsap.ticker.add(() => {
            currentX += (targetX - currentX) * 0.04;
            currentY += (targetY - currentY) * 0.04;

            gsap.set(logo, {
                rotateY: currentX,
                rotateX: -currentY,
                transformPerspective: 1600
            });
        });
    }

    document.addEventListener('mousemove', onMouseMove);

    return () => {
        document.removeEventListener('mousemove', onMouseMove);
        if (gsap && ticker) {
            gsap.ticker.remove(ticker);
        }
    };
  }, []);

  const handleScrollDown = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative perspective-container px-4">
      <motion.div
        // Changed to whileInView with once: false to reset animation when scrolling back up
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center justify-center"
      >
        {/* LOGO IMAGE REPLACEMENT */}
        {/* Make sure 'logo-hero.png' is in your public/ folder */}
        <img 
            ref={logoRef}
            src="/logo-hero.png" 
            alt="Nevasca Logo"
            className="will-change-transform w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] object-contain select-none pointer-events-none drop-shadow-2xl"
        />

        {/* Scroll Down Button / Text */}
        <motion.button
          onClick={handleScrollDown}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="mt-12 md:mt-16 text-zinc-400 hover:text-white transition-colors duration-300 text-xs md:text-sm uppercase tracking-[0.2em] font-medium cursor-none group"
          aria-label="Role para baixo"
        >
          <span className="relative inline-block pb-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
            Role para ver mais
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};