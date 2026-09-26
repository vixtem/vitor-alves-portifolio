import React from 'react';
import { ProjectCategory } from '../types';

export type ProjectFilter = 'all' | ProjectCategory;
export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'engineering', label: 'Engenharia' },
  { id: 'product', label: 'Design de Produto' },
  { id: 'cad', label: 'CAD' },
  { id: 'additive', label: 'Manufatura Aditiva' },
];

export const ProjectFilters: React.FC<{ value: ProjectFilter; onChange: (value: ProjectFilter) => void }> = ({ value, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {projectFilters.map((tab) => (
      <button key={tab.id} onClick={() => onChange(tab.id)} className={`px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-ink transition-all ${value === tab.id ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-neutral-100'}`}>
        {tab.label}
      </button>
    ))}
  </div>
);
