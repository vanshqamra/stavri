import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const roles = [
  { title: 'EU Sales Manager', location: 'Athens, Greece', status: 'Pipeline role' },
  { title: 'Quality Control Engineer', location: 'Kishangarh, India', status: 'Pipeline role' }
];

export default function CompanyCareersPage() {
  return (
    <>
      <PageHeader title="Company · Careers" description="Future openings across sourcing, logistics, and sales." />
      <Container className="py-16 space-y-8">
        <section className="space-y-3 text-base text-slate-600">
          <p>
            We operate a lean, specialist team and open new positions only when project pipelines demand. Even when a role is
            not advertised, we review stellar resumes and keep them on file for quarterly workforce planning.
          </p>
          <p>
            If you bring experience in marble sourcing, EU logistics, or architectural sales, email your CV and a short cover
            note to <a href="mailto:careers@marblesnearme.com" className="font-semibold text-amber-700">careers@marblesnearme.com</a>.
          </p>
        </section>
        {roles.map((role) => (
          <div key={role.title} className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{role.title}</h3>
            <p className="text-sm text-slate-500">{role.location}</p>
            <p className="mt-2 text-sm text-slate-600">Status: {role.status}</p>
          </div>
        ))}
        <div className="rounded-3xl border border-dashed border-amber-200 bg-amber-50/70 p-6 text-sm text-slate-700">
          <p>
            We are not actively hiring right now, but we love meeting professionals who align with our craft. Introduce
            yourself and we will reach out when the next expansion phase begins.
          </p>
        </div>
      </Container>
    </>
  );
}
