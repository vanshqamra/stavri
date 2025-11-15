import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';

const benefits = [
  'Live inventory snapshots from EU warehouses',
  'Pre-negotiated freight support and shared containers',
  'Marketing collateral and digital catalogs',
  'Priority access to new quarry lots'
];

export default function B2BPage() {
  return (
    <>
      <PageHeader title="B2B Portal" description="Dedicated interface for distributors and stone yards." />
      <Container className="py-16 space-y-10">
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{benefit}</h3>
              <p className="mt-2 text-sm text-slate-600">TODO: Expand with more detail and supporting visuals.</p>
            </div>
          ))}
        </div>
        <Button href="/b2b/login" variant="primary">
          Access Portal
        </Button>
      </Container>
    </>
  );
}
