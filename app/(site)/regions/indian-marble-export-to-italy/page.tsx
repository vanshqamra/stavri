import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function IndianMarbleToItalyPage() {
  return (
    <>
      <PageHeader title="Indian Marble Export to Italy" description="Connecting Indian quarries with Italian distributors." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Complementary Stones</h2>
          <p className="section-subtitle mt-3">TODO: Compare Indian marbles with Carrara, Calacatta, etc.</p>
        </section>
        <section>
          <h2 className="section-heading">Partnership Models</h2>
          <p className="section-subtitle mt-3">TODO: Outline JV / stocking / private label opportunities.</p>
        </section>
      </Container>
    </>
  );
}
