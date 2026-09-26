import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'lime' | 'mint' | 'cobalt' | 'default';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variantStyles = {
    default: 'bg-cream text-ink border-ink',
    lime: 'bg-lime text-ink border-ink shadow-[2px_2px_0px_#141414]',
    mint: 'bg-mint text-ink border-ink',
    cobalt: 'bg-cobalt text-white border-ink',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
