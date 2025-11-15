import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function IndianMarbleToGreecePage() {
  return (
    <>
      <PageHeader title="Indian Marble Export to Greece" description="Regional landing page skeleton." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Market Snapshot</h2>
          <p className="section-subtitle mt-3">TODO: Add demand stats for Greek hospitality and retail projects.</p>
        </section>
        <section>
          <h2 className="section-heading">Logistics Path</h2>
          <p className="section-subtitle mt-3">TODO: Outline Mundra / Nhava Sheva to Piraeus routing.</p>
        </section>
      </Container>
    </>
  );
}
