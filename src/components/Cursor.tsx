import React, { useEffect, useRef } from 'react';

export const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  // We use refs to store the drop elements
  const dropsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Access the GSAP global object
    const gsap = (window as any).gsap;
    if (!gsap) {
      console.warn("GSAP not loaded");
      return;
    }

    const dot = dotRef.current;
    const drops = dropsRef.current;
    
    if (!dot) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.set(dot, { x: mx, y: my });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    const updateCursor = () => {
      const t = Date.now() * 0.002;

      drops.forEach((drop, i) => {
        if (drop) {
          const offset = 55 + i * 8;
          gsap.to(drop, {
            x: mx + Math.sin(t + i) * offset,
            y: my + Math.cos(t * 0.7 + i) * offset,
            duration: 0.8 + i * 0.1,
            ease: "power2.out",
            overwrite: 'auto'
          });
        }
      });

      requestAnimationFrame(updateCursor);
    };

    const animationId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        // Ensure z-index is higher than cursor-wrapper (which is 9999) so it appears as a black "core"
        // bg-black as requested
        className="fixed w-[6px] h-[6px] bg-black rounded-full z-[10000] top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div className="cursor-wrapper">
        <div ref={el => { dropsRef.current[0] = el; }} className="drop absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2" style={{ width: '150px', height: '150px' }} />
        <div ref={el => { dropsRef.current[1] = el; }} className="drop absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2" style={{ width: '100px', height: '100px' }} />
        <div ref={el => { dropsRef.current[2] = el; }} className="drop absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2" style={{ width: '70px', height: '70px' }} />
        <div ref={el => { dropsRef.current[3] = el; }} className="drop absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2" style={{ width: '40px', height: '40px' }} />
      </div>
    </>
  );
};