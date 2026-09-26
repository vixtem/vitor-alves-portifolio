import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'MODELAGEM 3D CAD',
    'DESIGN DE PRODUTO',
    'MANUFATURA ADITIVA',
    'IMPRESSÃO 3D',
    'PROTOTIPAGEM RÁPIDA',
    'MODELAGEM 3D CAD',
    'DESIGN DE PRODUTO',
    'MANUFATURA ADITIVA',
  ];

  return (
    <aside
      aria-label="Aviso de especialidades"
      className="bg-coral text-white font-extrabold text-xs md:text-sm tracking-wider uppercase py-2.5 overflow-hidden border-b-2 border-ink select-none relative z-50"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[1, 2].map((group) => (
          <span key={group} className="mx-4 flex items-center gap-4">
            {items.map((text, idx) => (
              <React.Fragment key={`${group}-${idx}`}>
                <span>{text}</span>
                <span className="text-lime text-[10px]">◆</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </aside>
  );
};
