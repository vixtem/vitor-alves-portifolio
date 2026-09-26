import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <article
    onClick={onClick}
    className="group bg-cream border-2 border-ink rounded-3xl overflow-hidden brutal-shadow transition-all hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_#141414] cursor-pointer flex flex-col"
  >
    <div className="w-full aspect-[4/3] bg-neutral-200 overflow-hidden border-b-2 border-ink relative">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-3 right-3 bg-white/90 border border-ink rounded-full px-2.5 py-1 text-[10px] font-black uppercase">
        {project.badge}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] text-cobalt mb-2">
        {project.category.includes('engineering') ? 'Engenharia' : project.category.includes('product') ? 'Design de produto' : 'Desenvolvimento CAD'}
      </div>
      <h3 className="text-xl sm:text-2xl font-black font-heading text-ink group-hover:text-coral transition-colors">{project.title}</h3>
      <p className="text-sm text-ink/70 font-medium mt-2 leading-relaxed line-clamp-3">{project.desc}</p>
      <div className="mt-auto pt-5 flex items-center justify-between border-t border-ink/15 mt-5 text-xs font-black uppercase">
        <span>Problema → CAD → Fabricação</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  </article>
);
