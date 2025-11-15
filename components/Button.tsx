'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<string, string> = {
  primary: 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 hover:-translate-y-0.5 hover:bg-amber-500',
  secondary: 'bg-white/90 text-amber-700 ring-1 ring-inset ring-amber-200 hover:bg-amber-50 hover:text-amber-800',
  ghost: 'text-slate-700 hover:text-amber-600'
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

export const Button = ({ href, variant = 'primary', children, className = '', ...rest }: ButtonProps) => {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
