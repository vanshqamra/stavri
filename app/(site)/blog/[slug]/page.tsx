import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';

interface BlogPostPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Article not found — Rab Noor Pvt Ltd' };
  }

  return {
    title: `${post.title} | Rab Noor Pvt Ltd`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage, alt: post.heroAlt }]
    }
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-12">
      <Container className="space-y-10">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
            {formatDate(post.date)} · {post.readingTime} · {post.author}
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
          <p className="text-lg text-slate-600">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-500">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <figure className="overflow-hidden rounded-3xl border border-slate-200">
          <img src={post.heroImage} alt={post.heroAlt} className="w-full object-cover" />
        </figure>
        <section className="space-y-8 text-base leading-relaxed text-slate-700">
          {post.sections.map((section) => (
            <div key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="list-disc space-y-2 pl-6 text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Key Takeaways</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {post.keyTakeaways.map((insight) => (
              <li key={insight} className="flex gap-3">
                <span className="text-emerald-500">•</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 text-center">
          <h2 className="text-2xl font-semibold text-emerald-900">Plan your next shipment</h2>
          <p className="mt-3 text-sm text-emerald-800">
            Our sourcing and logistics desks coordinate quarry allocations, inspection, and delivery timelines worldwide.
          </p>
          <Button href="/quote-builder" className="mt-5">
            Start a Quote
          </Button>
        </section>
      </Container>
    </article>
  );
}
