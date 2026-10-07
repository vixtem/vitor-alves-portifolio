# Diretrizes do Projeto & Documentação para Agentes

Este projeto é um portfólio pessoal e profissional de Vitor Alves, voltado a oportunidades de emprego e colaboração técnica no Brasil e no exterior. Não adicionar fluxos de venda ou orçamento. Não inventar métricas, credenciais, datas, fluência ou projetos.

## Stack Tecnológica
- **Framework**: React 18 + TypeScript + Vite
- **Estilização**: Tailwind CSS + Animate com estética Neo-brutalista moderna (tactile borders de 2px, cantos arredondados, cores de alto contraste)
- **3D & WebGL**: Three.js (com OrbitControls, suporte a rotação 360°, inspeção wireframe CAD e materiais personalizáveis)
- **Ícones**: Lucide React
- **Gerenciador de Pacotes**: Bun / NPM / PNPM

## Paleta de Cores Primária
- **Creme de Fundo**: `#FAF7EE` (`bg-cream`)
- **Tinta / Bordas**: `#141414` (`text-ink`, `border-ink`)
- **Laranja / Coral**: `#FF4625` (`bg-coral`, `text-coral`)
- **Azul Cobalto**: `#1F51FF` (`bg-cobalt`, `text-cobalt`)
- **Verde Neon Ácido**: `#C6F226` (`bg-lime`, `text-lime`)
- **Menta Suave**: `#B3F5DF` (`bg-mint`)

## Tipografia
- Títulos: `Archivo` (Black 900) e `Plus Jakarta Sans`
- Corpo: `Plus Jakarta Sans` e `Inter`

## Estrutura atual
- `src/App.tsx`: app compartilhado entre início e cases, com conteúdo PT/EN.
- `src/data/career.ts`: conteúdo profissional e projetos verificáveis.
- `src/career.css`: layout responsivo.
- `src/components/ThreeViewer.tsx`: modelo GLB real, carregado sob demanda.
- `index.html` e `cases.html`: entradas Vite.

## Verificação
Executar `npm run build` e `npm run lint`. Conferir navegação e assets em subdiretório. Usar `import.meta.env.BASE_URL` para arquivos públicos e preservar a identidade visual. Não adicionar currículo ou links sociais sem conteúdo verificado.
