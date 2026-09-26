import React from 'react';
import { statsData } from '../data/portfolioData';

export const Stats: React.FC = () => {
  return (
    <section className="bg-cobalt text-white border-y-2 border-ink py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x-2 md:divide-blue-400/40 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx} className="px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-100 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
