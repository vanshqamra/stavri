import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

const stock = [
  { marble: 'Makrana White', availability: '120 slabs', status: 'In Transit' },
  { marble: 'Thassos Bright', availability: '60 slabs', status: 'Ready in EU hub' },
  { marble: 'Nero Marquina', availability: '90 slabs', status: 'Reserved for client' }
];

export default function B2BDashboardPage() {
  return (
    <>
      <PageHeader title="B2B Dashboard" description="Mock view (authentication TBD)." />
      <Container className="py-16">
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-3">Marble</th>
                <th className="px-6 py-3">Availability</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((item) => (
                <tr key={item.marble} className="odd:bg-white even:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.marble}</td>
                  <td className="px-6 py-4 text-slate-600">{item.availability}</td>
                  <td className="px-6 py-4 text-slate-600">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-slate-500">TODO: Protect this route and connect to live inventory API.</p>
      </Container>
    </>
  );
}
