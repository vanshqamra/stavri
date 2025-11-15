import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Marble Insights & Blog | Rab Noor Pvt Ltd',
  description: 'Deep dives on specification, sourcing, logistics, and maintenance for premium marble projects.',
  openGraph: {
    title: 'Rab Noor Pvt Ltd — Marble Insights',
    description: 'Expert commentary on choosing, shipping, and maintaining marble across continents.'
  }
};

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Insights & Blog" description="Updates on marble sourcing, logistics, and design." />
      <Container className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <figure className="relative h-56 w-full">
                <img src={post.heroImage} alt={post.heroAlt} className="h-full w-full object-cover" />
              </figure>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-500">{formatDate(post.date)} · {post.readingTime}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-3 flex-1 text-base text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-amber-600">
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
