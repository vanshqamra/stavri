import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const sections = [
  'Intro',
  'Digital Resources',
  'Specification Assistance',
  'Samples & Mockups',
  'Project Support',
  'Architect Partner Form'
];

export default function ForArchitectsPage() {
  return (
    <>
      <PageHeader title="For Architects" description="Tools and services tailored to design practices." />
      <Container className="space-y-12 py-16">
        {sections.map((heading) => (
          <section key={heading}>
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subtitle mt-3">TODO: Add resources, downloads, and forms for {heading}.</p>
          </section>
        ))}
        <form className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Architect Partner Form (Placeholder)</h3>
          <p className="mt-2 text-sm text-slate-600">TODO: Integrate full form workflow.</p>
        </form>
      </Container>
    </>
  );
}
