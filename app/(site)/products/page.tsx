import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { productCatalogue } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Marble Products | Rab Noor Pvt Ltd',
  description: 'Explore marble categories ready for export from India and Europe.'
};

const filters = ['All', 'White', 'Beige', 'Grey', 'Black', 'Colored'];

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="Marble Products" description="Filter by tone or origin to plan your sourcing." />
      <Container className="py-16">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Button key={filter} type="button" variant={filter === 'All' ? 'primary' : 'secondary'}>
              {filter}
            </Button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCatalogue.map((product) => (
            <div key={product.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm uppercase tracking-wide text-emerald-500">{product.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-sm text-slate-600">Origin: {product.origin}</p>
              <Button href={`/products/${product.slug}`} variant="ghost" className="mt-6 px-0">
                View details
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
