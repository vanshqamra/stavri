import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const sections = [
  'Overview',
  'EU Import Basics',
  'EU Hub / Warehouse',
  'Compliance & Standards',
  'Delivery Timelines',
  'How It Works',
  'CTA'
];

export default function ImportingToEuropePage() {
  return (
    <>
      <PageHeader title="Importing to Europe" description="EU-focused logistics playbook for marble consignments." />
      <Container className="space-y-10 py-16">
        {sections.map((heading) => (
          <section key={heading}>
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subtitle mt-3">TODO: Expand on {heading} with EU-centric details.</p>
          </section>
        ))}
      </Container>
    </>
  );
}
