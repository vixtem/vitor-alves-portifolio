import React from 'react';
import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioConfig } from '../data/portfolioData';

interface CtaBannerProps {
  onOpenQuote: (context?: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    alert(`E-mail ${portfolioConfig.email} copiado para a área de transferência!`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
      <div className="bg-ink text-white rounded-3xl border-2 border-ink p-8 sm:p-12 lg:p-16 brutal-shadow-lime">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-neutral-800">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight uppercase">
              Vamos transformar
              <br />
              ideias em <span className="text-lime">algo real.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-md">
              Tem um projeto, desafio técnico ou oportunidade em mente? Vamos conversar sobre como posso contribuir.
            </p>
          </div>

          <div>
            <Button
              variant="coral"
              size="lg"
              className="text-base sm:text-lg border-2 border-white shadow-[4px_4px_0px_white] flex items-center gap-3 uppercase"
              onClick={() => onOpenQuote('Banner Final')}
            >
              <span>VAMOS CONVERSAR</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-neutral-400 font-semibold">
          <div>
            {portfolioConfig.authorName} — Design, Engenharia & Manufatura Aditiva
          </div>

          {/* Ícones das Redes Sociais e E-mail */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
              aria-label="Behance"
              title="Behance"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.199 4.723H13.62c.067 1.456 1.06 2.095 2.583 2.095 1.062 0 1.902-.349 2.228-1.277l2.84.054c-.161.408-.519 1.13-1.545 2V17zm-6.852-3.041h3.339c-.198-.946-.912-1.409-1.636-1.409-.76 0-1.488.423-1.703 1.409zm-8.874 5.92H0V3.34h6.702c2.81 0 5.029 1.011 5.029 3.864 0 1.54-.775 2.55-1.921 3.09 1.536.467 2.385 1.701 2.385 3.513 0 2.92-2.186 4.072-5.195 4.072H4.156v-2.02h3.551c1.378 0 2.215-.465 2.215-1.787 0-1.282-.828-1.729-2.127-1.729H4.156v-2.02h3.407c1.196 0 1.884-.367 1.884-1.458 0-1.144-.73-1.492-1.884-1.492H4.156v6.082z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <button
              onClick={copyEmail}
              className="hover:text-lime transition-colors"
              aria-label="Copiar E-mail"
              title="Copiar E-mail"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};