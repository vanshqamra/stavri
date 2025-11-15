import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { getProductBySlug } from '@/data/siteContent';

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white py-16">
      <Container className="space-y-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Marble</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">{product.name}</h1>
            <p className="mt-2 text-base text-slate-600">Origin: {product.origin}</p>
            <div className="mt-6 space-y-2 text-sm text-slate-600">
              {product.highlights.map((highlight) => (
                <p key={highlight}>• {highlight}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/quote-builder">Request a Quote</Button>
              <Button href="/contact" variant="secondary">
                Talk to Sales
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p>Gallery placeholder — add slab/carousel imagery in next phase.</p>
            {/* TODO: Replace placeholder with responsive gallery component. */}
          </div>
        </div>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Technical Data</h2>
            <p className="mt-2 text-sm text-slate-600">TODO: Insert density, absorption, finishes, slab sizes.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Applications</h2>
            <p className="mt-2 text-sm text-slate-600">TODO: Add flooring, walls, counters, bespoke project notes.</p>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Pricing</h3>
            <p className="mt-2 text-sm text-slate-600">Price on request · FOB / CIF pending finish & volume.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Availability</h3>
            <p className="mt-2 text-sm text-slate-600">Lead time placeholder — update per quarry output.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Request a Quote</h3>
            <p className="mt-2 text-sm text-slate-600">Use the quote builder to send quantities, finishes, and destination.</p>
          </div>
        </section>
      </Container>
    </div>
  );
}
