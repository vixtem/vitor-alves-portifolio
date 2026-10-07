# Vitor Alves — Portfólio profissional

Site pessoal focado em oportunidades profissionais e colaborações técnicas em design de produto, CAD, engenharia reversa e manufatura aditiva. Versões em português e inglês, selecionadas por `?lang=pt` ou `?lang=en`.

## Executar

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Estrutura

- `index.html` e `cases.html`: entradas HTML processadas pelo Vite.
- `src/main.tsx`: inicializa o mesmo app React nas duas páginas.
- `src/App.tsx`: navegação, idioma, projetos, experiência, competências e contato.
- `src/data/career.ts`: dados bilíngues, projetos e e-mail.
- `src/career.css`: layout responsivo do portfólio.
- `src/components/ThreeViewer.tsx`: visualizador GLB carregado sob demanda.
- `public/assets`: arquivos públicos; URLs de produção não incluem `public/`.

`cases.html` exibe os projetos; a página inicial também inclui experiência e perfil profissional. Não há fluxo de orçamento ou projetos fictícios apresentados como trabalhos realizados.

## Conteúdo

A ponteira T8L tem arquivos GLB e STL reais no repositório. Os dois cards industriais são resumos de frentes de atuação, sem imagens ou métricas atribuídas a peças específicas. Para transformá-los em cases documentados, adicione fotos autorizadas, contexto e resultados comprovados em `src/data/career.ts`. A imagem do hero é identificada como parte do acervo visual; o botão 3D abre o modelo da ponteira T8L.

Não foram inventados datas de emprego, certificações, fluência em idiomas, links de redes sociais ou disponibilidade de visto. O site não contém currículo para download: inclua um PDF atualizado e verificado antes de oferecer esse link.

## Publicação

O workflow `.github/workflows/deploy.yml` publica `dist/` no GitHub Pages quando há push na `main`. `vite.config.ts` usa `base: './'`, e os assets e links usam `import.meta.env.BASE_URL`, permitindo publicação na raiz ou em uma pasta. Use `/cases.html`; GitHub Pages não oferece automaticamente a rota `/cases`.

Antes de publicar, valide `npm run build` e `npm run lint` e confira as duas páginas, idiomas, links, download STL/GLB, menu mobile e visualizador sob o prefixo de publicação.
