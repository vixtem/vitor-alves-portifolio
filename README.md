# Vitor Alves — Estúdio de Produto & Impressão 3D

Portfólio moderno para **Modelagem 3D CAD**, **Design de Produto** e **Manufatura Aditiva (Impressão 3D)**.

Estruturado na arquitetura padrão da indústria com **Vite**, **React 18**, **TypeScript**, **Tailwind CSS**, **Bun** e componentes no padrão **shadcn/ui**.

---

## 📁 Estrutura de Arquivos do Ecossistema

Esta estrutura segue exatamente a organização de projetos modernos React/Vite/Bun:

```
portfolio-vitor-alves/
├── public/                 # Arquivos públicos e estáticos servidos diretamente
│   └── assets/             # Imagens otimizadas das peças reais e projetos
│       ├── hero-piece.png
│       ├── project-ergonomic.png
│       ├── project-lattice.png
│       └── project-prosthetic.png
├── src/                    # Código-fonte da aplicação React + TypeScript
│   ├── components/         # Componentes modulares da interface
│   │   ├── ui/             # Componentes base no padrão shadcn/ui (Button, Badge...)
│   │   ├── Marquee.tsx     # Ticker contínuo superior
│   │   ├── Navbar.tsx      # Barra de navegação e menu responsivo
│   │   ├── Hero.tsx        # Hero section com tipografia imponente
│   │   ├── ThreeViewer.tsx # Visualizador 3D WebGL (Three.js) com órbita e inspeção CAD
│   │   ├── Stats.tsx       # Barra de métricas em azul cobalto
│   │   ├── Projects.tsx    # Galeria com filtros e modal de detalhes
│   │   ├── ProjectModal.tsx# Ficha técnica detalhada (material, tolerância, processo)
│   │   ├── Services.tsx    # Seção "O que eu faço" em verde neon
│   │   ├── About.tsx       # Biografia e formação em engenharia
│   │   ├── CtaBanner.tsx   # Chamada final de conversão e rodapé
│   │   └── QuoteModal.tsx  # Modal de orçamento com integração para WhatsApp
│   ├── data/               # Dados desacoplados de projetos e configurações
│   │   └── portfolioData.ts
│   ├── lib/                # Utilitários (ex: cn do Tailwind/clsx)
│   │   └── utils.ts
│   ├── types/              # Definições de tipos TypeScript
│   │   └── index.ts
│   ├── App.tsx             # Componente raiz da aplicação
│   ├── main.tsx            # Ponto de entrada React 18
│   └── index.css           # Estilos globais e diretivas do Tailwind
├── .gitignore              # Ignora node_modules, dist e arquivos locais
├── .prettierignore         # Ignora arquivos de build na formatação
├── .prettierrc             # Configuração de estilo de código Prettier
├── AGENTS.md               # Diretrizes de arquitetura para agentes e IAs
├── bun.lock                # Lockfile de dependências do Bun
├── bunfig.toml             # Configurações do gerenciador Bun
├── components.json         # Configuração de componentes shadcn/ui
├── eslint.config.js        # Configuração do ESLint 9 (Flat config)
├── package.json            # Scripts de build, dependências e metadados
├── README.md               # Documentação completa do projeto
├── tsconfig.json           # Configurações do compilador TypeScript
├── vite.config.ts          # Configurações do Vite (React plugin e aliases @/)
├── index.html              # Ponto de entrada HTML do Vite
└── tailwind.config.ts      # Configuração do Tailwind CSS
```

---

## 🚀 Como Executar o Projeto

### Com Bun (Recomendado)
```bash
bun install
bun dev
```
Acesse em: `http://localhost:8080/`

### Opção 3: Com Node / NPM
```bash
npm install
npm run dev
```

### Build para Produção
```bash
bun run build
# ou
npm run build
```
Os arquivos otimizados para deploy serão gerados na pasta `dist/`.
