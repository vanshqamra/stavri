'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const baseStyles = 'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500';

const variants: Record<string, string> = {
  primary: 'bg-emerald-600 text-white hover:bg-emerald-500',
  secondary: 'bg-white text-emerald-600 ring-1 ring-inset ring-emerald-200 hover:ring-emerald-400',
  ghost: 'text-slate-700 hover:text-emerald-600'
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
