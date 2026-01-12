import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { TypewriterTitle } from './GlitchTitle';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const socials = [
    { name: 'Github', url: 'https://github.com/lucasmeriniflores' },
    { name: 'Twitter', url: 'https://x.com/nevascaaw' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lucas-merini-flores-b85197300/' },
    { name: 'Instagram', url: 'https://www.instagram.com/nevascaaw/' }
  ];

  return (
    <div className="w-full flex justify-center px-6 md:px-20 py-20 md:py-32">
        <div className="w-full max-w-7xl flex flex-col justify-between min-h-[50vh]">
            
            {/* Top Label */}
            <ScrollReveal>
                <div className="border-b border-white/20 pb-6 mb-12 md:mb-20">
                    <TypewriterTitle as="h2" className="text-xs md:text-sm font-bold text-nevasca-blue uppercase tracking-widest">
                        Contato
                    </TypewriterTitle>
                </div>
            </ScrollReveal>

            {/* Main Call to Action - Massive Email Link */}
            <ScrollReveal delay={0.1}>
                <div className="flex flex-col gap-4 w-full">
                    <p className="text-zinc-500 text-lg md:text-xl">
                        Tem uma ideia? Vamos construí-la.
                    </p>
                    <a 
                        href="mailto:contactnevasca@gmail.com" 
                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 w-full max-w-full"
                    >
                        {/* 
                           FIX: 
                           1. text-2xl base size for mobile (prevent overflow).
                           2. break-all ensures long emails wrap on tiny screens if needed.
                           3. Progressive sizing (sm:text-4xl, md:text-7xl, lg:text-8xl) restores the big look on desktops.
                        */}
                        <TypewriterTitle 
                            as="h1" 
                            showCursor={false} 
                            className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter group-hover:text-nevasca-blue transition-colors duration-500 break-all sm:break-normal"
                        >
                            contactnevasca@gmail.com    
                        </TypewriterTitle>
                        <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 text-zinc-600 group-hover:text-nevasca-blue group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500" />
                    </a>
                </div>
            </ScrollReveal>

            {/* Bottom Links Area */}
            <div className="mt-20 md:mt-40">
                <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
                        {socials.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.url} 
                                className="group flex items-center justify-between text-zinc-400 hover:text-white transition-colors duration-300 py-2"
                            >
                                <span className="text-sm md:text-lg font-medium">{social.name}</span>
                                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-nevasca-blue" />
                            </a>
                        ))}
                    </div>
                    
                    <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-zinc-600 uppercase tracking-wider gap-4">
                        <span>© {new Date().getFullYear()} Nevasca Dev</span>
                        <div className="flex gap-4">
                            <span>Joinville, BR</span>
                            <span>Local Time: {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>      
                    </div>
                </ScrollReveal>
            </div>

        </div>
    </div>
  );
};