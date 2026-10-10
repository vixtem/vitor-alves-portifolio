import { spanish } from './spanish';
export type Language = 'pt' | 'en' | 'es';
export type Copy = { pt: string; en: string; es: string };
export const email = 'vitoralves0104@gmail.com';
export const whatsappNumber = '5598991202439';
export const text = (pt: string, en: string): Copy => ({ pt, en, es: spanish[pt] });
export const projects = [
  {
    id: 'sabao-em-po', number: '04', category: 'cad', tags: ['Fusion 360', 'CAD', 'Manufatura Aditiva'], model: true, modelPath: 'assets/sabao-em-po/arquivo_stl_3d.stl',
    photos: ['sabao-em-po/F-01_modelagem3D.png', 'sabao-em-po/F-02_Real.png', 'sabao-em-po/F-03_Real.png'],
    title: text('Recipiente de sabão em pó', 'Powder detergent dispenser'),
    summary: text('Projeto pessoal de um recipiente dosador, da modelagem no Fusion 360 à fabricação por impressão 3D.', 'A personal dispenser project, from Fusion 360 modeling to 3D printing.'),
    context: text('Projeto pessoal desenvolvido a partir de referências encontradas na internet, com foco no armazenamento e na dosagem de sabão em pó para uso doméstico.', 'A personal project developed from online references, focused on storing and dispensing powder detergent for household use.'),
    contribution: text('Modelei o recipiente no Autodesk Fusion 360 a partir das referências e utilizei a manufatura aditiva para transformar o modelo digital em uma peça física funcional.', 'I modeled the dispenser in Autodesk Fusion 360 using the references and used additive manufacturing to turn the digital model into a functional physical part.'),
    evidence: text('Desenvolvido para facilitar a retirada de pequenas doses de sabão em pó. O conceito também pode ser adaptado a outros produtos em pó, conforme suas características. A documentação reúne uma imagem do modelo CAD, duas fotos da peça fabricada e o modelo 3D para inspeção interativa.', 'Designed to make dispensing small doses of powder detergent easier. The concept can also be adapted to other powdered products depending on their characteristics. Documentation includes a CAD image, two photos of the manufactured part and an interactive 3D model.'),
  },
  {
    id: 't8l', number: '01', category: 'cad', tags: ['Fusion 360', 'CAD', 'FDM'], model: true, modelPath: 'assets/glb/Ponteira_controle_T8L_v2.glb', photos: ['foto01.jpeg', 'foto02.jpeg', 'foto03.jpeg'],
    title: text('Ponteira para controle T8L', 'T8L controller stick tip'),
    summary: text('Modelagem de um acessório para controle de rádio, com arquivo 3D disponível para inspeção interativa.', 'A radio controller accessory, with a 3D model available for interactive inspection.'),
    context: text('Projeto pessoal de acessório para o controle RadioMaster T8L.', 'A personal accessory project for the RadioMaster T8L controller.'),
    contribution: text('Desenvolvimento da geometria CAD e preparação de arquivos para fabricação aditiva.', 'CAD geometry development and preparation of files for additive manufacturing.'),
    evidence: text('Fotos da peça fabricada e instalada no controle e visualização interativa do modelo 3D.', 'Photos of the manufactured part installed on the controller and interactive viewing of the 3D model.'),
  },
  {
    id: 'protection', number: '02', category: 'industrial', tags: ['CAD', 'FDM', 'Engenharia reversa'], model: false, modelPath: undefined, photos: [] as string[],
    title: text('Proteções para componentes industriais', 'Industrial component guards'),
    summary: text('Desenvolvimento de proteções para sensores e componentes, considerando a geometria existente e o acesso à manutenção.', 'Development of guards for sensors and components, considering existing geometry and maintenance access.'),
    context: text('Aplicações em ambiente industrial: proteções de sensores, encoders e componentes de máquinas.', 'Industrial applications: guards for sensors, encoders and machine components.'),
    contribution: text('Levantamento dimensional, modelagem CAD e preparação para impressão 3D de peças técnicas.', 'Dimensional assessment, CAD modeling and preparation of technical parts for 3D printing.'),
    evidence: text('Resumo da experiência aplicada. Fotos, desenhos e resultados específicos serão incluídos conforme disponibilidade e autorização de divulgação.', 'An overview of applied experience. Photos, drawings and specific results will be added subject to availability and disclosure permission.'),
  },
  {
    id: 'replacement', number: '03', category: 'industrial', tags: ['Fusion 360', 'FDM', 'DfAM'], model: false, modelPath: undefined, photos: [] as string[],
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
