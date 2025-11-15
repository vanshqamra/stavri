'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Container } from './Container';
import { Button } from './Button';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Sourcing From India', href: '/sourcing-from-india' },
  { label: 'Importing to Europe', href: '/importing-to-europe' },
  { label: 'Logistics & Shipping', href: '/logistics-shipping' },
  { label: 'Projects', href: '/projects' },
  { label: 'For Architects', href: '/for-architects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Quote Builder', href: '/quote-builder' },
  { label: 'B2B Portal', href: '/b2b' }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const renderLinks = (className = '') => (
    <nav className={`flex flex-col gap-3 text-base text-slate-700 md:flex-row md:items-center md:gap-6 ${className}`}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors hover:text-amber-600 ${isActive ? 'text-amber-600' : ''}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          marblesnearme.com
        </Link>
        <div className="hidden md:flex md:items-center md:gap-6">
          {renderLinks('items-center')}
          <Button href="/quote-builder">Request Quote</Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </Container>
      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-6 md:hidden">
          {renderLinks('')}
          <Button href="/quote-builder" className="mt-4 w-full">Request Quote</Button>
        </div>
      ) : null}
    </header>
  );
};
