import Link from 'next/link';
import { Container } from './Container';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Quote Builder', href: '/quote-builder' },
  { label: 'Contact', href: '/contact' }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/80">
      <Container className="grid gap-12 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Rab Noor Marble</h3>
          <p className="mt-3 text-sm text-slate-600">
            Rab Noor Pvt Ltd orchestrates marble export-import flows between Indian quarries and European distribution hubs.
            We support architects, developers, distributors, and project owners worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-amber-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 text-sm text-slate-600">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">India Office</h4>
            <p className="mt-2">Kishangarh, Rajasthan · +91 98765 43210</p>
            <p>info@marblesnearme.com</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Europe Office</h4>
            <p className="mt-2">Athens, Greece · +30 21 1234 5678</p>
            <p>eu@marblesnearme.com</p>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-200 bg-slate-100/70 py-4 text-center text-xs text-slate-500">
        © {currentYear} Rab Noor Pvt Ltd — marblesnearme.com | All rights reserved.
      </div>
    </footer>
  );
};
