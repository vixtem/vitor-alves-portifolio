import { italian } from './italian';
import { spanish } from './spanish';
export type Language = 'pt' | 'en' | 'es' | 'it';
export type Copy = { pt: string; en: string; es: string; it: string };
export const email = 'vitoralves.me@gmail.com';
export const whatsappNumber = '5598991202439';
export const text = (pt: string, en: string): Copy => ({ pt, en, es: spanish[pt], it: italian[pt] });
export const projects = [
  {
    id: 'kobra-s1', number: '07', category: 'personal', tags: ['CAD', 'Manufatura Aditiva', 'Engenharia reversa', 'FDM', 'ABS'], model: true, modelPath: 'assets/kobra-s1/modelo.stl',
    photos: ['kobra-s1/01-cad.png', 'kobra-s1/02-fabricada.jpg', 'kobra-s1/03-instalada.jpg'],
    title: { pt: 'Carcaça do cabeçote da Kobra S1', en: 'Kobra S1 printhead housing', es: 'Carcasa del cabezal de la Kobra S1', it: "Scocca della testina Kobra S1" },
    summary: { pt: 'Carcaça de reposição para a Anycubic Kobra S1, reconstruída em CAD e impressa em ABS, com fixação por ímãs em substituição aos encaixes mecânicos.', en: 'Replacement housing for the Anycubic Kobra S1, reconstructed in CAD and printed in ABS, with magnets replacing mechanical clips.', es: 'Carcasa de repuesto para la Anycubic Kobra S1, reconstruida en CAD e impresa en ABS, con imanes en lugar de encajes mecánicos.', it: "Scocca di ricambio per Anycubic Kobra S1, ricostruita in CAD e stampata in ABS, con magneti al posto degli incastri meccanici." },
    context: { pt: 'Projeto pessoal desenvolvido para substituir a carcaça quebrada do cabeçote da minha impressora 3D Anycubic Kobra S1, utilizando o componente original como referência para a reconstrução da geometria.', en: 'A personal project to replace the broken printhead housing of my Anycubic Kobra S1 3D printer, using the original component as a reference to reconstruct its geometry.', es: 'Proyecto personal para sustituir la carcasa rota del cabezal de mi impresora 3D Anycubic Kobra S1, utilizando el componente original como referencia para reconstruir su geometría.', it: "Progetto personale per sostituire la scocca rotta della testina della mia stampante 3D Anycubic Kobra S1, usando il componente originale come riferimento per ricostruirne la geometria." },
    contribution: { pt: 'Modelei a carcaça em CAD a partir da peça original danificada e adaptei o sistema de fixação para utilizar ímãs no lugar dos encaixes mecânicos. Em seguida, fabriquei as peças em ABS por impressão 3D FDM.', en: 'I modeled the housing in CAD from the damaged original part and adapted the fastening system to use magnets instead of mechanical clips. I then manufactured the parts in ABS using FDM 3D printing.', es: 'Modelé la carcasa en CAD a partir de la pieza original dañada y adapté el sistema de fijación para utilizar imanes en lugar de encajes mecánicos. Después fabriqué las piezas en ABS mediante impresión 3D FDM.', it: "Ho modellato la scocca in CAD a partire dal pezzo originale danneggiato e adattato il fissaggio per utilizzare magneti al posto degli incastri meccanici. Ho poi fabbricato i pezzi in ABS mediante stampa 3D FDM." },
    evidence: { pt: 'Aplicação pessoal de reposição de um componente da impressora. A documentação apresenta o modelo CAD, a carcaça fabricada e a peça instalada no cabeçote, além do modelo 3D interativo para inspeção da geometria.', en: 'A personal application replacing a printer component. Documentation shows the CAD model, the manufactured housing and the part installed on the printhead, along with an interactive 3D model for geometry inspection.', es: 'Aplicación personal de sustitución de un componente de la impresora. La documentación muestra el modelo CAD, la carcasa fabricada y la pieza instalada en el cabezal, además del modelo 3D interactivo para inspeccionar la geometría.', it: "Applicazione personale di sostituzione di un componente della stampante. La documentazione mostra il modello CAD, la scocca fabbricata, il pezzo installato sulla testina e un modello 3D interattivo per esaminarne la geometria." },
  },
  {
    id: 'tensionador-corrente', number: '06', category: 'industrial', tags: ['CAD', 'Manufatura Aditiva', 'Engenharia reversa', 'FDM', 'Nylon'], model: true, modelPath: 'assets/tensionador-corrente/modelo.stl',
    photos: ['tensionador-corrente/01-cad.png', 'tensionador-corrente/02-cad.png', 'tensionador-corrente/03-fabricada.png'],
    title: text("Tensionador de corrente", "Chain tensioner"),
    summary: text("Reconstrução de um tensionador a partir da peça original danificada, com modelagem CAD e fabricação em nylon preto por impressão 3D FDM.", "Reconstruction of a tensioner from the damaged original part, with CAD modeling and black nylon fabrication using FDM 3D printing."),
    context: text("Projeto desenvolvido a partir de um tensionador de corrente original danificado. O levantamento dimensional permitiu reconstruir sua geometria e criar um modelo digital para a fabricação de uma peça de reposição.", "Developed from a damaged original chain tensioner. Dimensional measurements enabled reconstruction of its geometry and creation of a digital model for manufacturing a replacement part."),
    contribution: text("Realizei o levantamento dimensional e a conferência das medidas da peça original, desenvolvi o modelo 3D CAD e fabriquei o tensionador em nylon preto utilizando impressão 3D FDM.", "I measured the original part and checked its dimensions, developed the 3D CAD model and manufactured the tensioner in black nylon using FDM 3D printing."),
    evidence: text("Componente desenvolvido para uma aplicação na indústria de bebidas. A documentação reúne duas vistas do modelo CAD e uma foto da peça fabricada em nylon preto, além do modelo 3D interativo para inspeção da geometria.", "A component developed for a beverage industry application. Documentation includes two CAD views and a photo of the part manufactured in black nylon, along with an interactive 3D model for geometry inspection."),
  },
  {
    id: 'protecao-polia', number: '05', category: 'industrial', tags: ['CAD', 'Manufatura Aditiva', 'Escaneamento 3D', 'FDM', 'PET'], model: true, modelPath: 'assets/protecao-polia/modelo.glb.gz',
    photos: ['protecao-polia/01-scan.png', 'protecao-polia/02-cad.png', 'protecao-polia/03-aplicacao.png'],
    title: text("Proteção da polia orientadora", "Guide pulley guard"),
    summary: text("Proteção industrial desenvolvida a partir de escaneamento 3D, com modelagem CAD e fabricação em PET por impressão 3D FDM.", "Industrial guard developed from 3D scanning, with CAD modeling and PET fabrication using FDM 3D printing."),
    context: text("O escaneamento 3D do conjunto foi utilizado como referência para desenvolver uma proteção adaptada à geometria existente em um equipamento da indústria de bebidas.", "A 3D scan of the assembly was used as a reference to develop a guard adapted to the existing geometry of beverage industry equipment."),
    contribution: text("Desenvolvi a modelagem CAD com base no escaneamento 3D e dividi a proteção em duas partes. Em seguida, as peças foram fabricadas em PET utilizando impressão 3D FDM.", "I developed the CAD model based on the 3D scan and divided the guard into two parts. The parts were then fabricated in PET using FDM 3D printing."),
    evidence: text("Aplicação de proteção de componentes em um equipamento da indústria de bebidas, voltada à segurança no ambiente industrial. A documentação apresenta o escaneamento como referência, a proteção modelada e a peça instalada, além do modelo 3D interativo.", "A component guard for beverage industry equipment, intended to support safety in the industrial environment. Documentation shows the scan reference, the modeled guard and the installed part, along with an interactive 3D model."),
  },
  {
    id: 'valvula-retencao-ar', number: '04', category: 'industrial', tags: ['CAD', 'Manufatura Aditiva', 'Engenharia reversa', 'Nylon'], model: true, modelPath: 'assets/valvula-retencao-ar/modelo.stl',
    photos: ['valvula-retencao-ar/01-cad.png', 'valvula-retencao-ar/02-corte.png', 'valvula-retencao-ar/03-modelo.png'],
    title: text("Válvula de retenção de ar", "Air check valve"),
    summary: text("Replicação de uma válvula industrial com modelagem CAD e adaptação da geometria para fabricação por manufatura aditiva.", "Replication of an industrial valve through CAD modeling and geometry adaptation for additive manufacturing."),
    context: text("Projeto desenvolvido a partir de uma válvula de retenção de ar existente, com adaptação da geometria para fabricação integral por impressão 3D. Foram consideradas a impressão FDM em nylon e a impressão em resina com propriedades semelhantes às do nylon.", "Developed from an existing air check valve, adapting its geometry for complete 3D printing. Nylon FDM printing and resin printing with nylon-like properties were considered."),
    contribution: text("Realizei a modelagem CAD a partir da peça de referência e adaptei a geometria para manufatura aditiva. O arquivo 3D em formato STL foi preparado e entregue ao cliente para fabricação.", "I developed the CAD model from the reference part and adapted the geometry for additive manufacturing. The 3D STL file was prepared and delivered to the client for fabrication."),
    evidence: text("Componente desenvolvido para substituir uma válvula original em uma aplicação industrial. A documentação reúne vistas do modelo CAD, incluindo uma vista em corte para visualizar a geometria interna, além do modelo 3D interativo. A fabricação ficou a cargo do cliente.", "A component developed to replace an original valve in an industrial application. Documentation includes CAD views, including a section view of the internal geometry, and an interactive 3D model. Fabrication was handled by the client."),
  },
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
    id: 'sabao-em-po', number: '02', category: 'personal', tags: ['Fusion 360', 'CAD', 'Manufatura Aditiva'], model: true, modelPath: 'assets/sabao-em-po/arquivo_stl_3d.stl',
    photos: ['sabao-em-po/F-01_modelagem3D.png', 'sabao-em-po/F-02_Real.png', 'sabao-em-po/F-03_Real.png'],
    title: text('Recipiente de sabão em pó', 'Powder detergent dispenser'),
    summary: text('Projeto pessoal de um recipiente dosador, da modelagem no Fusion 360 à fabricação por impressão 3D.', 'A personal dispenser project, from Fusion 360 modeling to 3D printing.'),
    context: text('Projeto pessoal desenvolvido a partir de referências encontradas na internet, com foco no armazenamento e na dosagem de sabão em pó para uso doméstico.', 'A personal project developed from online references, focused on storing and dispensing powder detergent for household use.'),
    contribution: text('Modelei o recipiente no Autodesk Fusion 360 a partir das referências e utilizei a manufatura aditiva para transformar o modelo digital em uma peça física funcional.', 'I modeled the dispenser in Autodesk Fusion 360 using the references and used additive manufacturing to turn the digital model into a functional physical part.'),
    evidence: text('Desenvolvido para facilitar a retirada de pequenas doses de sabão em pó. O conceito também pode ser adaptado a outros produtos em pó, conforme suas características. A documentação reúne uma imagem do modelo CAD, duas fotos da peça fabricada e o modelo 3D para inspeção interativa.', 'Designed to make dispensing small doses of powder detergent easier. The concept can also be adapted to other powdered products depending on their characteristics. Documentation includes a CAD image, two photos of the manufactured part and an interactive 3D model.'),
  },
  {
    id: 't8l', number: '01', category: 'personal', tags: ['Fusion 360', 'CAD', 'FDM'], model: true, modelPath: 'assets/glb/Ponteira_controle_T8L_v2.glb', photos: ['foto01.jpeg', 'foto02.jpeg', 'foto03.jpeg'],
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
