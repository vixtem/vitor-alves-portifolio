import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter, ProjectFilters } from './ProjectFilters';

interface ProjectsProps { onOpenQuote: (context?: string) => void; }

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const filtered = projectsData.filter((p) => filter === 'all' || p.category.includes(filter));
  const displayed = filtered.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="trabalhos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-4">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black font-heading uppercase text-ink">Trabalhos <span className="text-coral">recentes</span></h2>
          <p className="text-ink/70 font-medium text-sm sm:text-base mt-1">Cases de engenharia, desenvolvimento de produto, CAD e manufatura aditiva.</p>
        </div>
        <a href="./cases.html" className="text-ink font-black text-sm sm:text-base hover:text-coral transition-colors inline-flex items-center gap-2 group whitespace-nowrap">
          Ver todos os cases <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
      <div className="mb-8"><ProjectFilters value={filter} onChange={setFilter} /></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {displayed.map((project) => <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />)}
      </div>
      {displayed.length === 0 && <div className="border-2 border-dashed border-ink/30 rounded-3xl p-10 text-center font-bold text-ink/60">Nenhum projeto em destaque nesta categoria. Veja todos os cases para explorar o portfólio completo.</div>}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onRequestSimilar={(title) => { setSelectedProject(null); onOpenQuote(`Projeto Semelhante a "${title}"`); }} />
    </section>
  );
};
