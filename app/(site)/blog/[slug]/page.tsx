import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { getBlogPostBySlug } from '@/data/siteContent';

type BlogPostPageProps = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-16">
      <Container className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{post.date}</p>
        <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="text-base text-slate-600">{post.description}</p>
        <div className="space-y-4 text-sm text-slate-600">
          <p>TODO: Replace with full blog content body, imagery, and pull quotes.</p>
          <p>Additional sections can cover sourcing tips, logistics checklists, and material spotlights.</p>
        </div>
      </Container>
    </article>
  );
}
