import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { QuoteBuilderForm } from '@/components/forms/site/QuoteBuilderForm';

export const metadata: Metadata = {
  title: 'Quote Builder | Rab Noor Pvt Ltd',
  description: 'Add marble line items, finishes, and destinations for a rapid quotation from our sourcing team.',
  openGraph: {
    title: 'Build a marble quote in minutes',
    description: 'Share quantities, thicknesses, and delivery ports to receive FOB India or CIF Europe pricing.'
  }
};

export default function QuoteBuilderPage() {
  return (
    <>
      <PageHeader title="Quote Builder" description="Send line items, finishes, and destinations in minutes." />
      <Container className="py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <QuoteBuilderForm />
          </div>
          <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">How we respond</h2>
              <p className="mt-3 text-sm text-slate-600">
                Within 24 hours our sourcing desk confirms slab availability, finishing timelines, and FOB/CIF scenarios based
                on your destination port.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Checklist</p>
              <ul className="mt-3 space-y-2">
                <li>• Slab photos and dry-lay videos</li>
                <li>• Technical data sheets per stone</li>
                <li>• Freight & customs guidance</li>
              </ul>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Need help?</p>
            <p className="text-sm text-slate-600">
              Email <a href="mailto:quotes@marblesnearme.com" className="font-semibold text-amber-700">quotes@marblesnearme.com</a> or
              call +91 98271 12345 for immediate assistance.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
