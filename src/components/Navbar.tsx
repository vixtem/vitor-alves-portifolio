import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioConfig } from '../data/portfolioData';

interface NavbarProps {
  onOpenQuote: (context?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a <a href={import.meta.env.BASE_URL} className="flex items-center gap-3 group focus:outline-none" aria-label="Início">
          <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center border-2 border-ink transition-transform group-hover:scale-105">
            <div className="w-2.5 h-2.5 rounded-full bg-lime pulse-dot"></div>
          </div>
          <span className="font-heading font-black text-xl tracking-tight text-ink">
            {portfolioConfig.authorName}
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-ink">
          <a
            href="/#trabalhos"
            className="hover:text-coral transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-coral hover:after:w-full after:transition-all"
          >
            Trabalhos
          </a>
          <a
            href="/#servicos"
            className="hover:text-coral transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-coral hover:after:w-full after:transition-all"
          >
            Serviços
          </a>
          <a
            href="/#sobre"
            className="hover:text-coral transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-coral hover:after:w-full after:transition-all"
          >
            Sobre
          </a>

          {/* CTA Button */}
          <Button variant="cobalt" size="sm" onClick={() => onOpenQuote('Navbar')}>
            Orçamento
          </Button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-lg border-2 border-ink bg-white brutal-shadow"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-ink bg-cream px-6 py-4 space-y-3">
          <a
            href="/#trabalhos"
            className="block font-bold text-base py-1 hover:text-coral"
            onClick={() => setMobileMenuOpen(false)}
          >
            Trabalhos
          </a>
          <a
            href="/#servicos"
            className="block font-bold text-base py-1 hover:text-coral"
            onClick={() => setMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="/#sobre"
            className="block font-bold text-base py-1 hover:text-coral"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <Button
            variant="cobalt"
            className="w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote('Menu Mobile');
            }}
          >
            Solicitar Orçamento
          </Button>
        </div>
      )}
    </header>
  );
};
