import { spanish } from './spanish';
export type Language = 'pt' | 'en' | 'es';
export type Copy = { pt: string; en: string; es: string };
export const email = 'vitoralves0104@gmail.com';
export const whatsappNumber = '5598991202439';
export const text = (pt: string, en: string): Copy => ({ pt, en, es: spanish[pt] });
export const projects = [
  {
    id: 'suporte-escovas', number: '03', category: 'cad', tags: ['CAD', 'Manufatura Aditiva', 'Engenharia reversa', 'FDM', 'ABS'], model: true, modelPath: 'assets/suporte-escovas/suporte-escovas.stl',
    photos: ['suporte-escovas/01-original.jpeg', 'suporte-escovas/02-cad.png', 'suporte-escovas/03-fatiamento.png'],
    title: text("Suporte para escovas de motor elétrico", "Electric motor brush holder"),
    summary: text("Engenharia reversa de um suporte danificado, com modelagem CAD e fabricação de uma peça de reposição em ABS por impressão 3D FDM.", "Reverse engineering of a damaged holder, with CAD modeling and fabrication of an ABS replacement using FDM 3D printing."),
    context: text("Desenvolvimento de um suporte de reposição para as escovas de um motor elétrico. A peça original foi recebida quebrada e com partes faltantes, exigindo a reconstrução de sua geometria para a fabricação de um novo componente.", "Development of a replacement brush holder for an electric motor. The original part was received broken and with missing sections, requiring its geometry to be reconstructed to manufacture a new component."),
    contribution: text("Reuni e colei os fragmentos disponíveis para recuperar a referência geométrica, realizei o levantamento dimensional e desenvolvi o modelo 3D CAD. Em seguida, fabriquei a peça de reposição em ABS utilizando impressão 3D FDM.", "I assembled and bonded the available fragments to recover a geometric reference, took dimensional measurements and developed the 3D CAD model. I then manufactured the replacement in ABS using FDM 3D printing."),
    evidence: text("Peça funcional utilizada na substituição de um componente de motor elétrico. A documentação apresenta a peça original danificada, o modelo CAD e a preparação no fatiador para impressão 3D, além do modelo interativo para inspeção da geometria.", "A functional part used to replace an electric motor component. Documentation shows the damaged original, the CAD model and slicing preparation for 3D printing, along with an interactive model for geometry inspection."),
  },

  {
    id: 'sabao-em-po', number: '02', category: 'cad', tags: ['Fusion 360', 'CAD', 'Manufatura Aditiva'], model: true, modelPath: 'assets/sabao-em-po/arquivo_stl_3d.stl',
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

];
export const skills = [
  { title: text('Desenvolvimento CAD', 'CAD development'), items: text('Fusion 360 · Modelagem paramétrica · Desenho técnico · Documentação', 'Fusion 360 · Parametric modeling · Technical drawings · Documentation') },
  { title: text('Manufatura aditiva', 'Additive manufacturing'), items: text('FDM e resina · DfAM · Fatiamento · Seleção de materiais · Preparação de impressão', 'FDM and resin printing · DfAM · Slicing · Material selection · Print preparation') },
  { title: text('Engenharia reversa', 'Reverse engineering'), items: text('Levantamento dimensional · Reconstrução de geometria · Ajustes para fabricação', 'Dimensional assessment · Geometry reconstruction · Design for manufacturing') },
  { title: text('Prototipagem e aplicação', 'Prototyping and application'), items: text('Peças técnicas · Componentes industriais · Relatórios · Acompanhamento de aplicações', 'Technical parts · Industrial components · Reports · Application follow-up') },
];
