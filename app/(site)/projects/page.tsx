import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Global Marble Projects | Rab Noor Pvt Ltd',
  description: 'Reference villas, hotels, and commercial towers supplied with our marble across India, Europe, and the Middle East.',
  openGraph: {
    title: 'Marble Case Studies — Rab Noor Pvt Ltd',
    description: 'Discover how Makrana White, Thassos, Statuario, and Pietra Grey elevate villas, resorts, and towers worldwide.'
  }
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" description="Sample installations to inspire future case studies." />
      <Container className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <figure className="relative h-64 w-full">
                <img src={project.images[0].url} alt={project.images[0].alt} className="h-full w-full object-cover" />
              </figure>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{project.location}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{project.name}</h2>
                <p className="mt-2 text-sm text-slate-500">{project.area}</p>
                <p className="mt-4 flex-1 text-base text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  {project.marblesUsed.map((marble) => (
                    <span key={marble} className="rounded-full bg-slate-100 px-3 py-1">
                      {marble}
                    </span>
                  ))}
                </div>
                <Button href="/quote-builder" variant="ghost" className="mt-6 px-0">
                  Plan a similar project →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
