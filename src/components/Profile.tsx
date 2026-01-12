import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { TypewriterTitle } from './GlitchTitle';

const techStack = [
    "React", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Android Studio", "Photoshop", "Illustrator"
];

export const Profile: React.FC = () => {
  return (
    <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[90%] md:max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-32 relative">
            
            {/* Image Side */}
            <ScrollReveal className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-72 h-96 md:w-[400px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 rotate-[-2deg] hover:rotate-0 transition-all duration-500 ease-out shadow-2xl">
                    <img 
                        src="/profile.jpeg" 
                        alt="Perfil" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-nevasca-blue/20 mix-blend-overlay" />
                </div>
            </ScrollReveal>

            {/* Text Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <ScrollReveal delay={0.2}>
                    <TypewriterTitle as="h2" className="text-xs md:text-sm font-bold text-nevasca-blue uppercase tracking-widest mb-4">
                        Sobre Mim
                    </TypewriterTitle>
                    
                    <div className="text-5xl md:text-7xl font-black text-white mb-8 leading-none tracking-tight">
                        <div className="block">
                            <TypewriterTitle as="span" delay={0.2}>Lucas Merini</TypewriterTitle>
                        </div>
                        <div className="block mt-2">
                             <TypewriterTitle as="span" delay={1.2}>Flores</TypewriterTitle>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="text-zinc-400 text-base md:text-xl leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                        Sou um desenvolvedor e designer apaixonado por criar soluções digitais inovadoras, com experiência em web design, design gráfico e desenvolvimento de aplicativos. 
                        Unifico design e tecnologia para criar aplicações web imersivas 
                        que deixam uma impressão duradoura. Minha abordagem é minimalista, 
                        funcional e sempre centrada no usuário.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div className="mb-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-6">Tecnologias</span>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {techStack.map((tech, i) => (
                                <span 
                                    key={i} 
                                    className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm hover:border-nevasca-blue hover:text-nevasca-blue transition-colors duration-300 cursor-none"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </div>
  );
};