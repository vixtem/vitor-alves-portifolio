import React, { useMemo, useState } from 'react';
import { ArrowLeft, FolderKanban } from 'lucide-react';
import { Marquee } from '../components/Marquee';
import { Navbar } from '../components/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectFilter, ProjectFilters } from '../components/ProjectFilters';
import { ProjectModal } from '../components/ProjectModal';
import { QuoteModal } from '../components/QuoteModal';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const CasesPage: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteContext, setQuoteContext] = useState<string | undefined>();
  const filtered = useMemo(() => projectsData.filter((p) => filter === 'all' || p.category.includes(filter)), [filter]);
  const openQuote = (context?: string) => { setQuoteContext(context); setQuoteOpen(true); };
  return <div className="min-h-screen bg-cream text-ink antialiased selection:bg-lime selection:text-ink">
    <Marquee /><Navbar onOpenQuote={openQuote} />
    <main>
      <section className="border-b-2 border-ink"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <a href={import.meta.env.BASE_URL} className="inline-flex items-center gap-2 text-sm font-black hover:text-coral transition-colors mb-8"><ArrowLeft className="w-4 h-4" /> Voltar para o início</a>
        <div className="grid lg:grid-cols-12 gap-8 items-end"><div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime border-2 border-ink px-3 py-1.5 text-xs font-black uppercase mb-4"><FolderKanban className="w-4 h-4" /> Portfólio completo</div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading uppercase leading-[.95]">Cases & <span className="text-coral">Projetos</span></h1>
          <p className="max-w-2xl mt-5 text-base sm:text-lg font-medium text-ink/70 leading-relaxed">Projetos de engenharia, desenvolvimento de produto, modelagem CAD e manufatura aditiva. Selecione uma categoria ou abra um case para ver processo e detalhes técnicos.</p>
        </div><div className="lg:col-span-4 lg:text-right"><div className="text-5xl font-black font-heading">{filtered.length.toString().padStart(2,'0')}</div><div className="text-xs font-black uppercase tracking-wider text-ink/60">cases nesta seleção</div></div></div>
      </div></section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"><div className="mb-8"><ProjectFilters value={filter} onChange={setFilter} /></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">{filtered.map((project) => <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />)}</div></section>
    </main>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onRequestSimilar={(title) => { setSelectedProject(null); openQuote(`Projeto Semelhante a "${title}"`); }} />
    <QuoteModal isOpen={quoteOpen} contextTitle={quoteContext} onClose={() => setQuoteOpen(false)} />
  </div>;
};
