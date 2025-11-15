import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const roles = [
  { title: 'EU Sales Manager', location: 'Athens, Greece', status: 'Coming soon' },
  { title: 'Quality Control Engineer', location: 'Kishangarh, India', status: 'Coming soon' }
];

export default function CompanyCareersPage() {
  return (
    <>
      <PageHeader title="Company · Careers" description="Future openings across sourcing, logistics, and sales." />
      <Container className="py-16 space-y-6">
        {roles.map((role) => (
          <div key={role.title} className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">{role.title}</h3>
            <p className="text-sm text-slate-500">{role.location}</p>
            <p className="mt-2 text-sm text-slate-600">Status: {role.status}</p>
          </div>
        ))}
        <p className="text-sm text-slate-500">TODO: Integrate application form and HR contact.</p>
      </Container>
    </>
  );
}
