import Link from 'next/link';
import { Product } from '@/lib/marbles';

interface Props {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className = '' }: Props) => (
  <article
    className={`flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${className}`}
  >
    <figure className="relative h-44 w-full overflow-hidden">
      <img
        src={product.imageGallery[0]?.url ?? 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'}
        alt={`${product.name} marble sample`}
        className="h-full w-full object-cover"
      />
    </figure>
    <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-500">{product.category}</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
      <p className="text-sm text-slate-500">{product.origin}</p>
      <p className="mt-3 flex-1 text-sm text-slate-600">{product.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">{product.baseColor}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">{product.veinStyle}</span>
      </div>
      <Link href={`/products/${product.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-amber-600">
        View details →
      </Link>
    </div>
  </article>
);
