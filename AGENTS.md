# Diretrizes do Projeto & Documentação para Agentes

Este projeto é um portfólio web de alta conversão para modelagem 3D CAD, design de produto e manufatura aditiva (impressão 3D).

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

## Estrutura de Componentes (`src/components/`)
- `Marquee.tsx`: Faixa contínua superior
- `Navbar.tsx`: Navegação com logo, links de rolagem e CTA
- `Hero.tsx`: Headline "DO CAD À PEÇA REAL", badges e ThreeViewer
- `ThreeViewer.tsx`: Canvas 3D interativo
- `Stats.tsx`: Barra de métricas animadas em azul cobalto
- `Projects.tsx`: Grade de projetos recentes e filtros
- `ProjectModal.tsx`: Ficha técnica de cada peça
- `Services.tsx`: Seção "O que eu faço" em verde neon
- `About.tsx`: Biografia e formação em engenharia mecânica
- `CtaBanner.tsx`: Chamada final para fabricação e rodapé
- `QuoteModal.tsx`: Modal interativo com exportação WhatsApp / E-mail
