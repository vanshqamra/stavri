import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { productCategories, products } from '@/lib/marbles';

export const metadata: Metadata = {
  title: 'Marble Catalogue | Rab Noor Pvt Ltd',
  description: 'Browse curated white, beige, grey, black, and exotic marbles sourced across India and Europe.',
  openGraph: {
    title: 'Marbles Near Me — Product Catalogue',
    description: 'Filter by tone and application to shortlist slabs ready for export from India and Europe.'
  }
};

const categoryMap = productCategories.reduce<Record<string, typeof products>>((acc, category) => {
  acc[category.key] = products.filter((product) => product.category === category.key);
  return acc;
}, {} as Record<string, typeof products>);

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="Marble Products" description="Filter by tone or origin to plan your sourcing." />
      <Container className="space-y-10 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
        <p className="text-base text-slate-600">
          All marbles listed are available for FOB India or CIF Europe shipments. Ask for book-matching, cut-to-size programming, and inspection videos.
        </p>
        {productCategories.map((category) => (
          <section key={category.key} className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{category.title}</p>
                <h2 className="text-2xl font-semibold text-slate-900">{category.description}</h2>
              </div>
              <Button href="/quote-builder" variant="secondary">
                Build a quote
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryMap[category.key].map((product) => (
                <article key={product.slug} className="flex flex-col rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <figure className="overflow-hidden rounded-t-3xl">
                    <img src={product.imageGallery[0].url} alt={`${product.name} marble preview`} className="h-48 w-full object-cover" />
                  </figure>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">Origin: {product.origin}</p>
                    <p className="mt-3 flex-1 text-sm text-slate-600">{product.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                      <span className="rounded-full bg-slate-100 px-3 py-1">{product.baseColor}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">{product.veinStyle}</span>
                    </div>
                    <Button href={`/products/${product.slug}`} variant="ghost" className="mt-6 px-0">
                      View details →
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
