import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { QuoteBuilderForm } from '@/components/forms/site/QuoteBuilderForm';

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
