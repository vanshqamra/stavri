import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About Rab Noor Pvt Ltd',
  description: 'Company overview, mission, and sourcing partnerships for marblesnearme.com.'
};

const sections = [
  {
    heading: 'Company Story',
    copy:
      'Rab Noor Pvt Ltd began in Kishangarh in 2010 with a single mandate: curate Indian marble at international standards. The company has since expanded into Greece, Spain, and Italy, building a synchronized supply chain that feeds marblesnearme.com.'
  },
  {
    heading: 'Vision & Mission',
    copy:
      'We exist to make marble sourcing feel premium and predictable. Every shipment combines careful material selection, transparent reporting, and proactive logistics so architects and developers can execute bold ideas without delays.'
  },
  {
    heading: 'Our Team',
    copy:
      'Material technologists, quarry scouts, and bilingual logistics coordinators sit across India and Europe. Their shared dashboards keep quarry grading, finishing, packaging, and customs milestones in sync.'
  },
  {
    heading: 'Quarries & Partners',
    copy:
      'Preferred partnerships span Rajasthan, Andhra Pradesh, Thessaloniki, Carrara, and Novelda. These relationships allow us to secure allocation windows, prioritize block selections, and co-load multi-origin cargo.'
  },
  {
    heading: 'Certifications & Compliance',
    copy:
      'Operations follow ISO 9001 quality standards, ISPM 15 packing rules, and CE documentation for EU-bound shipments. Independent labs validate density, moisture absorption, and flexural strength before dispatch.'
  },
  {
    heading: 'Sustainability & Ethics',
    copy:
      'We audit quarry partners for safety practices, wastewater recycling, and fair labor commitments, and publish traceability sheets per lot so clients know exactly where each slab originated.'
  }
];

const milestones = [
  { year: '2010', detail: 'Rab Noor Pvt Ltd established in Kishangarh with a focus on Makrana sourcing.' },
  { year: '2014', detail: 'First European consolidation hub opened in Thessaloniki to support Greek whites.' },
  { year: '2018', detail: 'Added bonded storage in Athens and Rotterdam plus digital inspection reporting.' },
  { year: '2022', detail: 'Launched marblesnearme.com to centralize catalogues, quote tools, and partner onboarding.' }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Rab Noor Pvt Ltd" description="Marble export-import orchestrators since 2010." />
      <Container className="space-y-12 py-16">
        {sections.map((section) => (
          <section key={section.heading} className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{section.copy}</p>
          </section>
        ))}
        <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Milestones</h2>
          <ul className="mt-4 space-y-4 text-sm text-slate-700">
            {milestones.map((entry) => (
              <li key={entry.year} className="flex flex-col gap-1 border-l-2 border-amber-400 pl-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{entry.year}</span>
                <span>{entry.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
