import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function SpanishMarbleInIndiaPage() {
  return (
    <>
      <PageHeader title="Spanish Marble in India" description="Focus on Nero Marquina and Crema Marfil imports." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Stone Portfolio</h2>
          <p className="section-subtitle mt-3">TODO: List shades, finishes, and MOQ for Spanish materials.</p>
        </section>
        <section>
          <h2 className="section-heading">Support Services</h2>
          <p className="section-subtitle mt-3">TODO: Describe sample dispatch, marketing kits, and QC support.</p>
        </section>
      </Container>
    </>
  );
}
