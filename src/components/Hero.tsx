import React, { useState } from 'react';
import { ArrowDown, MessageSquare, Box, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ThreeViewer } from './ThreeViewer';
import { portfolioConfig } from '../data/portfolioData';

interface HeroProps {
  onOpenQuote: (context?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [is3DActive, setIs3DActive] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Small Badge */}
          <Badge variant="lime" className="px-4 py-1.5 border-2 border-ink">
            <span className="w-2 h-2 rounded-full bg-ink" />
            <span>{portfolioConfig.studioSubtitle}</span>
          </Badge>

          {/* Giant Typography Headline: Archivo 900, tall and upright */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-black font-heading leading-[1.04] tracking-tight text-ink uppercase">
            {portfolioConfig.heroHeadline.line1}
            <br />
            <span className="text-coral">{portfolioConfig.heroHeadline.line2}</span>
            <br />
            <span className="text-cobalt">{portfolioConfig.heroHeadline.line3}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-ink/80 font-medium max-w-xl leading-relaxed">
            {portfolioConfig.heroBio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#trabalhos">
              <Button variant="coral" size="lg" className="flex items-center gap-2">
                <span>VER TRABALHOS</span>
                <ArrowDown className="w-4 h-4" />
              </Button>
            </a>

            <Button
              variant="mint"
              size="lg"
              onClick={() => onOpenQuote('Hero Fale Comigo')}
              className="flex items-center gap-2"
            >
              <span>FALE COMIGO</span>
              <MessageSquare className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust points */}
          <div className="flex items-center gap-6 pt-4 text-xs font-bold text-ink/70">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cobalt" /> Arquivos STEP/STL prontos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cobalt" /> Tolerância dimensional
            </span>
          </div>

        </div>

        {/* Right Column: Hero Visual / 3D Canvas */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px]">
            
            {/* Framed Container */}
            <div className="relative bg-neutral-200 border-2 border-ink rounded-[28px] overflow-hidden brutal-shadow-lg aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center select-none group">
              
              {is3DActive ? (
                <ThreeViewer />
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}assets/hero-piece.png`}
                  alt="Peça modelada em CAD e impressa em 3D"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              )}

              {/* 3D Floating Pill */}
              <div className="absolute -top-1 -right-1 z-20">
                <div className="w-14 h-14 rounded-full bg-cobalt text-white font-heading font-black text-lg border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_#141414] group-hover:rotate-12 transition-transform">
                  3D
                </div>
              </div>

              {/* Toggle Mode Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <button
                  onClick={() => setIs3DActive(!is3DActive)}
                  className="bg-white/95 hover:bg-white text-ink text-xs font-black px-3.5 py-2 rounded-full border-2 border-ink shadow-[2px_2px_0px_#141414] backdrop-blur flex items-center gap-1.5 transition-all"
                >
                  <Box className="w-3.5 h-3.5 text-coral" />
                  <span>{is3DActive ? 'Ver Foto Real' : 'Girar em 3D'}</span>
                </button>
              </div>

            </div>

            {/* Decorative block */}
            <div className="absolute -bottom-3 -left-3 w-28 h-28 bg-lime rounded-2xl border-2 border-ink -z-10 hidden sm:block" />
          </div>
        </div>

      </div>
    </section>
  );
};
