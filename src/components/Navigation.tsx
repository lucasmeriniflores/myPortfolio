import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.HOME);

  const sections = [
    { id: SectionId.HOME, label: 'Início' },
    { id: SectionId.WORKS, label: 'Projetos' },
    { id: SectionId.PROFILE, label: 'Perfil' },
    { id: SectionId.CONTACT, label: 'Contato' }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active dot on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Hidden on mobile (hidden), visible on medium screens and up (md:flex)
    <div className="hidden md:flex fixed bottom-10 right-10 z-50 flex-col gap-6">
      {sections.map((section) => (
        <div key={section.id} className="relative group flex items-center justify-end">
          {/* Label (visible on hover) */}
          <span 
            className={`absolute right-8 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              activeSection === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
            } text-white`}
          >
            {section.label}
          </span>
          
          {/* Dot */}
          <motion.button
            onClick={() => handleScrollTo(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-500 border border-white ${
              activeSection === section.id ? 'bg-nevasca-blue border-nevasca-blue scale-125' : 'bg-transparent hover:bg-white'
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      ))}
    </div>
  );
};