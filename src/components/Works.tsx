import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { TypewriterTitle } from './GlitchTitle';
import type { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Studia', 
    category: 'App / Development', 
    imageUrl: '/project-1.jpg',
    githubUrl: 'https://github.com/lucasmeriniflores/projectStudiaApp'
  },
  { 
    id: 2, 
    title: 'Nevasca Brand & Portfolio', 
    category: 'Learning / Design', 
    imageUrl: '/project-2.jpg',
    githubUrl: 'https://github.com/lucasmeriniflores/myPortfolio'
  },
  { 
    id: 3, 
    title: 'Roupa Terceirão SENAC', 
    category: 'Branding / Design', 
    imageUrl: '/project-3.jpg',
    githubUrl: 'https://github.com/lucasmeriniflores/designTerceiraoSenac' 
  },
];

export const Works: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <ScrollReveal className="w-full flex justify-center py-12">
        <div 
            className="w-[95%] md:w-[92%] max-w-[1920px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] py-20 px-6 md:px-20 relative overflow-hidden group shadow-2xl transition-colors duration-500"
        >
            {/* Dynamic Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit] pointer-events-none">
                {/* Dark overlay to ensure text readability on top of images */}
                <div className="absolute inset-0 bg-black/20 z-10" />
                
                {projects.map((project) => (
                    <div 
                        key={`bg-${project.id}`}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            activeProject === project.id ? 'opacity-20' : 'opacity-0'
                        }`}
                    >
                        <img 
                            src={project.imageUrl} 
                            alt="" 
                            className="w-full h-full object-cover blur-2xl scale-125 transform"
                        />
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
                    <div className="flex flex-col gap-2">
                        <TypewriterTitle as="h2" className="text-xs md:text-sm font-bold text-nevasca-blue uppercase tracking-widest whitespace-nowrap">
                            Trabalhos Selecionados
                        </TypewriterTitle>
                        <div className="block mt-2">
                            <TypewriterTitle as="h3" className="text-3xl md:text-5xl font-bold text-white" showCursor={false}>
                                Projetos Recentes
                            </TypewriterTitle>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <a 
                            key={project.id} 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/card cursor-none block"
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                             <ScrollReveal delay={index * 0.1} className="h-full">
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-lg">
                                    <img 
                                        src={project.imageUrl} 
                                        alt={project.title} 
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover/card:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors duration-300" />
                                    
                                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl">
                                        <ArrowUpRight className="text-black w-6 h-6" />
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2 group-hover/card:text-nevasca-blue transition-colors">{project.title}</h4>
                                <p className="text-base text-zinc-400">{project.category}</p>
                            </ScrollReveal>
                        </a>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 flex justify-center">
                    <a 
                        href="https://github.com/lucasmeriniflores?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-10 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-nevasca-blue hover:border-nevasca-blue hover:text-white transition-all duration-300 active:scale-95 uppercase tracking-wide text-xs cursor-none"
                    >
                        Ver Todos os Projetos
                    </a>
                </div>
            </div>
        </div>
    </ScrollReveal>
  );
};