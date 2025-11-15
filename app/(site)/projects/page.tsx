import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { projectShowcase } from '@/data/siteContent';

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" description="Sample installations to inspire future case studies." />
      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {projectShowcase.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{project.location}</p>
              <p className="mt-4 text-base text-slate-600">Marbles used: {project.marbles}</p>
              {/* TODO: Add gallery thumbnail and CTA to case study detail. */}
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
