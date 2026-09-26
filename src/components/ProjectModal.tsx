import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProjectModalProps { project: ProjectItem | null; onClose: () => void; onRequestSimilar: (title: string) => void; }
export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  if (!project) return null;
  const stages = [
    ['01', 'Problema', project.problem || project.desc],
    ['02', 'Processo', project.process || 'Análise → desenvolvimento CAD → preparação para fabricação.'],
    ['03', 'Solução', project.solution || project.desc],
    ['04', 'Resultado', project.result || 'Adicione aqui o resultado mensurável ou a validação obtida no projeto.'],
  ];
  return <div className="fixed inset-0 z-50 p-3 sm:p-4 bg-ink/75 backdrop-blur-sm flex items-center justify-center" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
    <div className="bg-cream border-2 border-ink rounded-3xl brutal-shadow-lg relative overflow-hidden max-w-5xl w-full max-h-[94vh] overflow-y-auto">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full border-2 border-ink bg-white hover:bg-neutral-100 z-20" aria-label="Fechar modal"><X className="w-4 h-4" /></button>
      <div className="grid md:grid-cols-2 border-b-2 border-ink">
        <div className="aspect-[4/3] md:aspect-auto md:min-h-[380px] bg-neutral-200 overflow-hidden md:border-r-2 border-ink"><img src={project.image} alt={project.title} className="w-full h-full object-cover" /></div>
        <div className="p-6 sm:p-8 flex flex-col justify-center"><Badge variant="mint" className="mb-3 self-start">{project.badge}</Badge><h3 className="text-3xl sm:text-4xl font-black font-heading text-ink leading-tight">{project.title}</h3><p className="text-sm text-ink/70 font-medium mt-3 leading-relaxed">{project.desc}</p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 mt-6 text-xs"><div><span className="block text-ink/50 font-bold">Software</span><strong>{project.software}</strong></div><div><span className="block text-ink/50 font-bold">Material</span><strong>{project.material}</strong></div><div><span className="block text-ink/50 font-bold">Processo</span><strong>{project.tech}</strong></div><div><span className="block text-ink/50 font-bold">Tolerância</span><strong>{project.tolerance}</strong></div></div>
        </div>
      </div>
      <div className="p-6 sm:p-8"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{stages.map(([n,title,text],i) => <div key={title} className="relative border-2 border-ink rounded-2xl bg-white p-4 min-h-[170px]"><div className="text-cobalt font-black text-xs mb-5">{n}</div><h4 className="font-heading font-black text-lg uppercase">{title}</h4><p className="text-xs sm:text-sm text-ink/65 font-medium mt-2 leading-relaxed">{text}</p>{i < 3 && <ArrowRight className="hidden lg:block absolute -right-[13px] top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-cream rounded-full" />}</div>)}</div>
        <Button variant="coral" className="w-full mt-6 uppercase text-xs tracking-wider flex items-center justify-center gap-2" onClick={() => onRequestSimilar(project.title)}><Sparkles className="w-4 h-4" /> Solicitar Projeto Semelhante</Button>
      </div>
    </div>
  </div>;
};
