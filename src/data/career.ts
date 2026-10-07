import { spanish } from './spanish';
export type Language = 'pt' | 'en' | 'es';
export type Copy = { pt: string; en: string; es: string };
export const email = 'vitoralves0104@gmail.com';
export const whatsappNumber = '5598991202439';
export const text = (pt: string, en: string): Copy => ({ pt, en, es: spanish[pt] });
export const projects = [
  {
    id: 't8l', number: '01', category: 'cad', tags: ['Fusion 360', 'CAD', 'FDM'], model: true, photos: ['foto01.jpeg', 'foto02.jpeg', 'foto03.jpeg'],
    title: text('Ponteira para controle T8L', 'T8L controller stick tip'),
    summary: text('Modelagem de um acessório para controle de rádio, com arquivo 3D disponível para inspeção interativa.', 'A radio controller accessory, with a 3D model available for interactive inspection.'),
    context: text('Projeto pessoal de acessório para o controle RadioMaster T8L.', 'A personal accessory project for the RadioMaster T8L controller.'),
    contribution: text('Desenvolvimento da geometria CAD e preparação de arquivos para fabricação aditiva.', 'CAD geometry development and preparation of files for additive manufacturing.'),
    evidence: text('Fotos da peça fabricada e instalada no controle e visualização interativa do modelo 3D.', 'Photos of the manufactured part installed on the controller and interactive viewing of the 3D model.'),
  },
  {
    id: 'protection', number: '02', category: 'industrial', tags: ['CAD', 'FDM', 'Engenharia reversa'], model: false, photos: [] as string[],
    title: text('Proteções para componentes industriais', 'Industrial component guards'),
    summary: text('Desenvolvimento de proteções para sensores e componentes, considerando a geometria existente e o acesso à manutenção.', 'Development of guards for sensors and components, considering existing geometry and maintenance access.'),
    context: text('Aplicações em ambiente industrial: proteções de sensores, encoders e componentes de máquinas.', 'Industrial applications: guards for sensors, encoders and machine components.'),
    contribution: text('Levantamento dimensional, modelagem CAD e preparação para impressão 3D de peças técnicas.', 'Dimensional assessment, CAD modeling and preparation of technical parts for 3D printing.'),
    evidence: text('Resumo da experiência aplicada. Fotos, desenhos e resultados específicos serão incluídos conforme disponibilidade e autorização de divulgação.', 'An overview of applied experience. Photos, drawings and specific results will be added subject to availability and disclosure permission.'),
  },
  {
    id: 'replacement', number: '03', category: 'industrial', tags: ['Fusion 360', 'FDM', 'DfAM'], model: false, photos: [] as string[],
    title: text('Componentes e soluções para manutenção', 'Components and maintenance solutions'),
    summary: text('Experiência no desenvolvimento de tampas, suportes, guias e ferramentas para necessidades de manutenção industrial.', 'Experience developing covers, brackets, guides and tools for industrial maintenance needs.'),
    context: text('Necessidades de manutenção e reposição de componentes em equipamentos de produção.', 'Maintenance needs and component replacement in production equipment.'),
    contribution: text('Engenharia reversa, modelagem paramétrica, seleção de materiais e prototipagem por manufatura aditiva.', 'Reverse engineering, parametric modeling, material selection and additive manufacturing prototyping.'),
    evidence: text('Apresentação de uma frente de atuação profissional. Não são atribuídos indicadores ou resultados a uma peça sem documentação específica.', 'An overview of a professional work area. No metrics or outcomes are attributed to an individual part without supporting documentation.'),
  },
];
export const skills = [
  { title: text('Desenvolvimento CAD', 'CAD development'), items: text('Fusion 360 · Modelagem paramétrica · Desenho técnico · Documentação', 'Fusion 360 · Parametric modeling · Technical drawings · Documentation') },
  { title: text('Manufatura aditiva', 'Additive manufacturing'), items: text('FDM e resina · DfAM · Fatiamento · Seleção de materiais · Preparação de impressão', 'FDM and resin printing · DfAM · Slicing · Material selection · Print preparation') },
  { title: text('Engenharia reversa', 'Reverse engineering'), items: text('Levantamento dimensional · Reconstrução de geometria · Ajustes para fabricação', 'Dimensional assessment · Geometry reconstruction · Design for manufacturing') },
  { title: text('Prototipagem e aplicação', 'Prototyping and application'), items: text('Peças técnicas · Componentes industriais · Relatórios · Acompanhamento de aplicações', 'Technical parts · Industrial components · Reports · Application follow-up') },
];
