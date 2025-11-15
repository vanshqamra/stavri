import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Premium Indian & European Marble — Rab Noor Pvt Ltd',
  description: 'Marbles Near Me delivers curated marble from India and Europe with end-to-end logistics support.'
};

const placeholderSections = [
  { title: 'Who We Serve', description: 'TODO: Add audience cards for architects, developers, distributors, and luxury homes.' },
  { title: 'Featured Marbles', description: 'TODO: Highlight marquee stones with imagery and quick stats.' },
  { title: 'Why Rab Noor Pvt Ltd', description: 'TODO: Showcase differentiators in sourcing, QC, financing, and warehousing.' },
  { title: 'From Quarry to Project', description: 'TODO: Outline our process timeline with steps and milestones.' },
  { title: 'Global Presence', description: 'TODO: Map India sourcing offices and European warehouses.' },
  { title: 'Testimonials / Logos', description: 'TODO: Insert client quotes and partner logos.' },
  { title: 'Final CTA', description: 'TODO: Add closing conversion block for quotes/contact.' }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Rab Noor Pvt Ltd</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">
              Premium Indian & European Marble — Near You, Delivered Worldwide
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              marblesnearme.com synchronizes quarry approvals, fabrication slots, and international shipping so your project has
              the right stone on site, on schedule.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/quote-builder">Start Quote Builder</Button>
              <Button href="/products" variant="secondary">
                Browse Products
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Skeleton Roadmap</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Hero narrative ready for detailed storytelling.</li>
              <li>Section placeholders indicate upcoming content.</li>
              <li>CTA scaffolding directs visitors to quote builder.</li>
            </ul>
          </div>
        </Container>
      </section>
      {placeholderSections.map((section) => (
        <section key={section.title} className="border-t border-slate-200 py-16">
          <Container>
            <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-4 text-base text-slate-600">{section.description}</p>
            {/* TODO: Replace placeholder paragraph with designed content for {section.title}. */}
          </Container>
        </section>
      ))}
    </>
  );
}
