import React from 'react';
import { Box, Compass, Printer } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="bg-lime border-y-2 border-ink py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl font-black font-heading uppercase text-ink">
            O que eu <span className="text-coral">faço</span>
          </h2>
          <p className="text-ink/80 font-bold text-sm sm:text-base mt-2 max-w-xl">
            Soluções completas integrando engenharia, design e processos modernos de fabricação.
          </p>
        </div>

        {/* 3 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-cream border-2 border-ink rounded-3xl p-8 brutal-shadow brutal-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-lime border-2 border-ink flex items-center justify-center mb-6 shadow-[2px_2px_0px_#141414]">
                <Box className="w-6 h-6 text-ink" />
              </div>
              <h3 className="text-2xl font-black font-heading text-ink mb-3">Engenharia &amp; CAD</h3>
              <p className="text-ink/80 text-sm leading-relaxed mb-6 font-medium">
                Modelagem paramétrica, engenharia reversa e desenvolvimento técnico de componentes prontos para fabricação.
              </p>
            </div>
            
            <ul className="space-y-2.5 text-xs font-bold text-ink/90 border-t-2 border-ink/15 pt-5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" /> Modelagem CAD 3D e desenho técnico
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" /> Engenharia reversa e reconstrução de componentes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" /> STEP, IGES, STL e arquivos para fabricação
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-cream border-2 border-ink rounded-3xl p-8 brutal-shadow brutal-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cobalt border-2 border-ink flex items-center justify-center mb-6 shadow-[2px_2px_0px_#141414]">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black font-heading text-ink mb-3">Design de Produto</h3>
              <p className="text-ink/80 text-sm leading-relaxed mb-6 font-medium">
                Da necessidade ao conceito: desenvolvimento de soluções considerando forma, função, ergonomia e fabricação.
              </p>
            </div>
            
            <ul className="space-y-2.5 text-xs font-bold text-ink/90 border-t-2 border-ink/15 pt-5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Desenvolvimento e refinamento de conceitos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Ergonomia, função e usabilidade
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt" /> DFM — Design for Manufacturing
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-cream border-2 border-ink rounded-3xl p-8 brutal-shadow brutal-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-coral border-2 border-ink flex items-center justify-center mb-6 shadow-[2px_2px_0px_#141414]">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black font-heading text-ink mb-3">Manufatura Aditiva</h3>
              <p className="text-ink/80 text-sm leading-relaxed mb-6 font-medium">
                Preparação, otimização e fabricação de componentes por impressão 3D, da prototipagem à aplicação final.
              </p>
            </div>
            
            <ul className="space-y-2.5 text-xs font-bold text-ink/90 border-t-2 border-ink/15 pt-5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" /> DfAM e otimização para impressão 3D
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" /> FDM, SLA e diferentes materiais
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" /> Prototipagem, validação e produção de peças
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t-2 border-ink/20 pt-7">
          <p className="text-ink font-black text-sm sm:text-base max-w-xl">
            Precisa desenvolver uma peça, produto ou solução sob medida?
          </p>
          <a href="#contato" className="inline-flex items-center justify-center bg-cobalt text-white border-2 border-ink rounded-full px-6 py-3 font-black uppercase text-xs sm:text-sm brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] transition-all whitespace-nowrap">
            Fale comigo →
          </a>
        </div>

      </div>
    </section>
  );
};
