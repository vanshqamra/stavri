import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const team = [
  { name: 'Rabinder Noor', role: 'Managing Director', focus: 'Global strategy' },
  { name: 'Meera Shah', role: 'Head of Sourcing', focus: 'India operations' },
  { name: 'Alexis Petrou', role: 'EU Logistics Lead', focus: 'Europe distribution' }
];

export default function CompanyTeamPage() {
  return (
    <>
      <PageHeader title="Company · Team" description="Key contacts spanning India and Europe." />
      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-slate-100" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-emerald-600">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600">Focus: {member.focus}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
