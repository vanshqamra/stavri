import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function TurkishMarbleInIndiaPage() {
  return (
    <>
      <PageHeader title="Turkish Marble in India" description="Travertine, beige marbles, and more." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Portfolio</h2>
          <p className="section-subtitle mt-3">TODO: Detail travertine, emperador, and beige stone offerings.</p>
        </section>
        <section>
          <h2 className="section-heading">Logistics</h2>
          <p className="section-subtitle mt-3">TODO: Explain shipments via Mediterranean ports into India.</p>
        </section>
      </Container>
    </>
  );
}
