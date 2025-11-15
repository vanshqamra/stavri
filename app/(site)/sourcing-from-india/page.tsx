import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Sourcing Marble from India | Rab Noor Pvt Ltd',
  description: 'Deep expertise across Rajasthan quarry belts, QC, fabrication, and export packaging for global shipments.',
  openGraph: {
    title: 'Indian Marble Sourcing — Rab Noor Pvt Ltd',
    description: 'Makrana, Kishangarh, and Rajsamand supply programs managed by on-ground inspectors and export coordinators.'
  }
};

const belts = [
  {
    name: 'Makrana Belt',
    details: 'Heritage Makrana White quarries with government-regulated leases. Ideal for temple, villa, and institutional projects needing ultra-low porosity.'
  },
  {
    name: 'Kishangarh Cluster',
    details: 'The processing capital of India with 900+ gangsaws, resin lines, and finishing shops supporting both Indian and export orders.'
  },
  {
    name: 'Rajsamand & Udaipur',
    details: 'Rainforest, green, and colored marble quarries close to our fabrication partners with block yards for faster loading.'
  }
];

const qualitySteps = [
  'Block selection with laser-scanned volume calculations',
  'Shade-matching and diagonal cuts for book-matching requests',
  'Third-party lab testing for density, water absorption, and flexural strength',
  'Digital slab inventory shared via cloud folders before shipment'
];

export default function SourcingFromIndiaPage() {
  return (
    <>
      <PageHeader title="Sourcing From India" description="Dedicated team supervising Rajasthan and Gujarat belts." />
      <Container className="space-y-12 py-12">
        <section>
          <h2 className="section-heading">Why Indian marble is globally respected</h2>
          <p className="section-subtitle mt-3">
            Indian stones combine heritage and scale. Makrana, Rainforest, and Black Galaxy are benchmarks for palaces, hospitality chains, and couture homes. Rab Noor Pvt Ltd maintains long-term quarry allocations, so clients receive consistent shade lots with full traceability.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Heritage craftsmanship', 'Competitive lead times', 'Certified sustainability'].map((pill) => (
              <div key={pill} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                <h3 className="text-base font-semibold text-slate-900">{pill}</h3>
                <p className="mt-2">{pill === 'Heritage craftsmanship' ? 'Makrana supplied the Taj Mahal and continues to set expectations for whiteness worldwide.' : pill === 'Competitive lead times' ? 'Integrated quarry + gangsaw partners allow FOB shipments within 14–21 days.' : 'Audited quarries with safe working conditions and controlled waste recycling.'}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="section-heading">Rajasthan quarry belts</h2>
          <p className="section-subtitle mt-3">Our supervisors live within an hour of each belt, giving them daily visibility on production.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {belts.map((belt) => (
              <article key={belt.name} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{belt.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{belt.details}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">Quality control & grading</h2>
            <p className="section-subtitle mt-3">
              Every slab receives a QR tag linking shade photos, defect remarks, and packing positions. Clients receive the QC pack before balance payments are released.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {qualitySteps.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="text-amber-500">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">Cutting & polishing</h2>
            <p className="section-subtitle mt-3">
              Our fabrication partners run Breton gangsaws, Breton and Pedrini polishing lines, CNC waterjets, and edge profiling machines. This allows us to ship everything from slabs to ready-to-install staircases.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>18/20/30 mm slab finishing</li>
              <li>Honed, leathered, antique, and brushed textures</li>
              <li>Book-matched panels labeled by destination room</li>
            </ul>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">Export packaging</h2>
            <p className="section-subtitle mt-3">ISPM 15 certified crates with barcoded packing lists protect slabs through long voyages.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Moisture barriers and foam separators</li>
              <li>Shock indicators on each bundle</li>
              <li>Real-time crate loading photos shared over WhatsApp & Teams</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">Sample shipment program</h2>
            <p className="section-subtitle mt-3">
              Architects can request 300×300 mm samples, mini slab boards, or polished cubes. We dispatch weekly batches to Athens, Dubai, Milan, and London.
            </p>
            <p className="mt-4 text-sm text-slate-600">Express shipments arrive in 4–5 days with customs paperwork handled by our courier partners.</p>
          </div>
        </section>
        <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 text-center">
          <h2 className="text-2xl font-semibold text-amber-900">Discuss Sourcing from India</h2>
          <p className="mt-3 text-sm text-amber-800">Share your specification, timeline, and destination. We will outline quarry availability, processing slots, and freight schedules.</p>
          <Button href="/contact" className="mt-5">
            Speak with the India Desk
          </Button>
        </section>
      </Container>
    </>
  );
}
