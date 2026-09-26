import React, { useState } from 'react';
import { Marquee } from './components/Marquee';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { CtaBanner } from './components/CtaBanner';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteContext, setQuoteContext] = useState<string | undefined>();

  const handleOpenQuote = (context?: string) => {
    setQuoteContext(context);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-cream text-ink antialiased selection:bg-lime selection:text-ink">
      {/* Top Banner */}
      <Marquee />

      {/* Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenQuote={handleOpenQuote} />
        <Stats />
        <Projects onOpenQuote={handleOpenQuote} />
        <Services />
        <About />
        <CtaBanner onOpenQuote={handleOpenQuote} />
      </main>

      {/* Quote Dialog */}
      <QuoteModal
        isOpen={quoteOpen}
        contextTitle={quoteContext}
        onClose={() => setQuoteOpen(false)}
      />
    </div>
  );
};

export default App;
