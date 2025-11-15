import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About Rab Noor Pvt Ltd',
  description: 'Company overview, mission, and sourcing partnerships for marblesnearme.com.'
};

const sections = [
  { heading: 'Company Story', copy: 'TODO: Share origins of Rab Noor Pvt Ltd and marblesnearme.com.' },
  { heading: 'Vision & Mission', copy: 'TODO: Summarize long-term ambition, values, and customer commitments.' },
  { heading: 'Our Team', copy: 'TODO: Highlight leadership team, sourcing specialists, and EU sales desks.' },
  { heading: 'Quarries & Partners', copy: 'TODO: Map strategic partners across India, Greece, Italy, Spain, Türkiye.' },
  { heading: 'Certifications & Compliance', copy: 'TODO: List standards, memberships, and audits.' },
  { heading: 'Sustainability & Ethics', copy: 'TODO: Outline responsible mining, labor, and traceability programs.' }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Rab Noor Pvt Ltd" description="Marble export-import orchestrators since 2010." />
      <Container className="space-y-12 py-16">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="section-heading">{section.heading}</h2>
            <p className="section-subtitle mt-3">{section.copy}</p>
            {/* TODO: Replace placeholder copy with real narrative. */}
          </section>
        ))}
      </Container>
    </>
  );
}
