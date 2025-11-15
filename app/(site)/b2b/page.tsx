import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'B2B Portal | Rab Noor Pvt Ltd',
  description: 'Live inventory, pre-negotiated freight, and marketing collateral for distributors and stone yards.',
  openGraph: {
    title: 'Rab Noor B2B Portal',
    description: 'Access pricing, reserve slabs, and download marketing assets in one secure dashboard.'
  }
};

const benefits = [
  {
    title: 'Live Inventory Access',
    detail: 'Track slabs in Athens and Thessaloniki warehouses with slab numbers, thickness, and finish availability.'
  },
  {
    title: 'Shared Containers & Freight',
    detail: 'Combine orders with partner yards to reduce per-slab freight costs. Our logistics desk coordinates stuffing windows.'
  },
  {
    title: 'Marketing Toolkit',
    detail: 'Download branded catalogs, social media packs, and spec sheets to localize for your sales team.'
  },
  {
    title: 'Priority Quarry Lots',
    detail: 'Reserve upcoming Indian and Greek lots before they reach open market through allocation credits.'
  }
];

export default function B2BPage() {
  return (
    <>
      <PageHeader title="B2B Portal" description="Dedicated interface for distributors and stone yards." />
      <Container className="space-y-10 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why distributors join</h2>
          <p className="mt-3 text-sm text-slate-600">
            The portal centralizes pricing, marketing collateral, and logistics updates for partners across Europe, the Middle East, and India.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{benefit.detail}</p>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Access</p>
          <h3 className="mt-2 text-2xl font-semibold text-emerald-900">Invite-only login</h3>
          <p className="mt-3 text-sm text-emerald-800">Request credentials to browse current stock, book shared containers, and download marketing assets.</p>
          <Button href="/b2b/login" className="mt-5">
            Access Portal
          </Button>
        </div>
      </Container>
    </>
  );
}
