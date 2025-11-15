import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { blogPosts } from '@/data/siteContent';

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Insights & Blog" description="Updates on marble sourcing, logistics, and design." />
      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{post.date}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-base text-slate-600">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
