import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function IndianMarbleToBelgiumPage() {
  return (
    <>
      <PageHeader title="Indian Marble Export to Belgium" description="Skeleton for Antwerp-focused outreach." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Key Buyers</h2>
          <p className="section-subtitle mt-3">TODO: Mention wholesalers, distributors, and design studios.</p>
        </section>
        <section>
          <h2 className="section-heading">Transit</h2>
          <p className="section-subtitle mt-3">TODO: Add Antwerp port routing and customs timeline.</p>
        </section>
      </Container>
    </>
  );
}
