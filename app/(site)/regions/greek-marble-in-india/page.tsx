import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function GreekMarbleInIndiaPage() {
  return (
    <>
      <PageHeader title="Greek Marble in India" description="Thassos, Volakas, and more for Indian projects." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Availability</h2>
          <p className="section-subtitle mt-3">TODO: Share typical lead times and block selection support.</p>
        </section>
        <section>
          <h2 className="section-heading">Applications</h2>
          <p className="section-subtitle mt-3">TODO: Suggest hospitality, retail, and villa use cases.</p>
        </section>
      </Container>
    </>
  );
}
