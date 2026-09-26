export type ProjectCategory = 'engineering' | 'product' | 'cad' | 'additive';

export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  badge: string;
  image: string;
  software: string;
  material: string;
  tech: string;
  tolerance: string;
  category: ProjectCategory[];
  problem?: string;
  process?: string;
  solution?: string;
  result?: string;
  featured?: boolean;
}

export interface QuoteFormState {
  name: string;
  phone: string;
  service: string;
  process: string;
  timeline: string;
  desc: string;
  file?: File | null;
}
