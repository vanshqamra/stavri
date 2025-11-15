import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const sections = [
  'Why Source From India?',
  'Key Quarry Regions',
  'Quality Control Process',
  'Export Packaging',
  'Sample Shipments',
  'CTA'
];

export default function SourcingFromIndiaPage() {
  return (
    <>
      <PageHeader title="Sourcing From India" description="Dedicated team supervising Rajasthan and Gujarat belts." />
      <Container className="space-y-10 py-16">
        {sections.map((heading) => (
          <section key={heading}>
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subtitle mt-3">
              TODO: Add detailed copy, imagery, and process diagrams for {heading}.
            </p>
          </section>
        ))}
      </Container>
    </>
  );
}
