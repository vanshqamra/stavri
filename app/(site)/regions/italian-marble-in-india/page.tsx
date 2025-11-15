import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function ItalianMarbleInIndiaPage() {
  return (
    <>
      <PageHeader title="Italian Marble in India" description="Landing page for importers seeking European stones." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Popular Stones</h2>
          <p className="section-subtitle mt-3">TODO: Highlight Statuario, Calacatta, Botticino supply lines.</p>
        </section>
        <section>
          <h2 className="section-heading">Distribution Support</h2>
          <p className="section-subtitle mt-3">TODO: Mention bonded warehouses and credit terms.</p>
        </section>
      </Container>
    </>
  );
}
