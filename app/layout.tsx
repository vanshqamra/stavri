import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://marblesnearme.com'),
  title: 'Marbles Near Me | Rab Noor Pvt Ltd — Premium Indian & European Marble',
  description:
    'Rab Noor Pvt Ltd operates marblesnearme.com to connect Indian marble quarries with European distribution hubs for global projects.',
  openGraph: {
    title: 'Marbles Near Me | Rab Noor Pvt Ltd',
    description: 'Premium marble sourcing with synchronized logistics between India and Europe.',
    url: 'https://marblesnearme.com'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
