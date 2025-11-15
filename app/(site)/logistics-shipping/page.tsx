import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const sections = [
  'Overview',
  'Shipping Methods',
  'Ports Used',
  'Container Loading Techniques',
  'Documentation',
  'Insurance',
  'Delivery Terms',
  'CTA'
];

export default function LogisticsShippingPage() {
  return (
    <>
      <PageHeader title="Logistics & Shipping" description="Global freight coordination for marble consignments." />
      <Container className="space-y-10 py-16">
        {sections.map((heading) => (
          <section key={heading}>
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subtitle mt-3">TODO: Add narratives, stats, or timelines for {heading}.</p>
          </section>
        ))}
      </Container>
    </>
  );
}
