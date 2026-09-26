import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'coral' | 'cobalt' | 'mint' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'coral', size = 'md', ...props }, ref) => {
    const variantStyles = {
      coral: 'bg-coral text-white hover:bg-coral-hover shadow-[3px_3px_0px_#141414]',
      cobalt: 'bg-cobalt text-white hover:bg-cobalt-hover shadow-[3px_3px_0px_#141414]',
      mint: 'bg-mint text-ink hover:bg-mint-light shadow-[3px_3px_0px_#141414]',
      outline: 'bg-white text-ink hover:bg-neutral-100 shadow-[3px_3px_0px_#141414]',
      ghost: 'bg-transparent text-ink hover:bg-neutral-200/50',
    };

    const sizeStyles = {
      sm: 'px-4 py-1.5 text-xs',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-extrabold rounded-full border-2 border-ink brutal-btn transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
