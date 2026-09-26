import React from 'react';
import { ChartNoAxesCombined } from 'lucide-react';

const pillClass = 'tech-pill bg-cream text-ink text-xs font-black px-4 py-2 rounded-full border-2 border-ink shadow-[2px_2px_0px_#141414] cursor-default';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black font-heading uppercase text-ink">Sobre</h2>
            <p className="mt-4 text-xl sm:text-2xl font-black font-heading leading-tight max-w-3xl">
              Desenvolvimento de produtos, CAD e manufatura conectados à <span className="text-coral">aplicação real.</span>
            </p>
          </div>
          <p className="text-base sm:text-lg text-ink font-medium leading-relaxed max-w-3xl">
            Atuo no desenvolvimento de produtos e soluções técnicas, conectando CAD, design e manufatura aditiva para transformar necessidades reais em peças e produtos fabricáveis.
          </p>
          <p className="text-sm sm:text-base text-ink/75 leading-relaxed max-w-3xl">
            Minha abordagem combina levantamento de requisitos, modelagem paramétrica, engenharia reversa, prototipagem e fabricação. O foco é desenvolver soluções funcionais, documentadas e adequadas ao processo de produção — do conceito à validação da peça física.
          </p>
          <div className="pt-4 space-y-5">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-ink/60 mb-3">Ferramentas</div>
              <div className="flex flex-wrap gap-2.5">{['Fusion 360','SolidWorks','Rhino'].map(x => <span key={x} className={pillClass}>{x}</span>)}</div>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-ink/60 mb-3">Tecnologias & Processos</div>
              <div className="flex flex-wrap gap-2.5">{['FDM','SLA','SLS','SLM','DfAM','Engenharia Reversa'].map(x => <span key={x} className={pillClass}>{x}</span>)}</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-cobalt text-white rounded-3xl border-2 border-ink p-8 sm:p-10 brutal-shadow-lg relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-7 flex items-center justify-between">
              <span>Experiência em números</span><ChartNoAxesCombined className="w-7 h-7 text-lime" />
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['5+','anos em CAD & manufatura aditiva'],['300+','peças produzidas'],['R$ 275k+','economia gerada em aplicações'],['6+','tecnologias & processos']
              ].map(([value,label]) => <div key={label} className="bg-white/10 p-4 rounded-2xl border border-white/20"><div className="text-3xl font-black font-heading text-lime">{value}</div><div className="mt-1 text-xs sm:text-sm font-bold text-blue-100">{label}</div></div>)}
            </div>
            <div className="mt-7 pt-6 border-t border-white/20"><p className="text-sm text-blue-100 leading-relaxed">Experiência aplicada a desafios reais de desenvolvimento, prototipagem, engenharia reversa e fabricação de componentes.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};
