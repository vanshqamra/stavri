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
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <QuoteBuilderForm />
        </div>
      </Container>
    </>
  );
}
