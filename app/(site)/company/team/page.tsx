import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const team = [
  {
    name: 'Rabinder Noor',
    role: 'Managing Director',
    focus: 'Global strategy',
    location: 'Kishangarh & Athens',
    bio: 'Architect-turned-entrepreneur overseeing quarry partnerships and EU expansion.'
  },
  {
    name: 'Meera Shah',
    role: 'Head of Sourcing',
    focus: 'India operations',
    location: 'Kishangarh',
    bio: 'Leads block scouting, gang-saw scheduling, and quality benchmarking in India.'
  },
  {
    name: 'Alexis Petrou',
    role: 'EU Logistics Lead',
    focus: 'Europe distribution',
    location: 'Athens & Thessaloniki',
    bio: 'Coordinates bonded warehousing, customs documentation, and final-mile trucking.'
  },
  {
    name: 'Elena Duarte',
    role: 'Design Liaison',
    focus: 'Architect partnerships',
    location: 'Madrid & Rotterdam',
    bio: 'Supports studios with CAD textures, sample boards, and specification reviews.'
  }
];

export default function CompanyTeamPage() {
  return (
    <>
      <PageHeader title="Company · Team" description="Key contacts spanning India and Europe." />
      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-sm">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-amber-100 to-slate-50" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-amber-600">{member.role}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">{member.location}</p>
              <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              <p className="mt-2 text-xs font-semibold text-slate-500">Focus: {member.focus}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
