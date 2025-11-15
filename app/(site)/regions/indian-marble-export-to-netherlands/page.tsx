import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function IndianMarbleToNetherlandsPage() {
  return (
    <>
      <PageHeader title="Indian Marble Export to Netherlands" description="Speak to Rotterdam / Amsterdam buyers." />
      <Container className="space-y-10 py-16">
        <section>
          <h2 className="section-heading">Dutch Clients</h2>
          <p className="section-subtitle mt-3">TODO: Add case studies for corporate HQs and residential towers.</p>
        </section>
        <section>
          <h2 className="section-heading">Port Strategy</h2>
          <p className="section-subtitle mt-3">TODO: Outline Rotterdam hub with inland trucking.</p>
        </section>
      </Container>
    </>
  );
}
