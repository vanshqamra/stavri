import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Importing Marble to Europe | Rab Noor Pvt Ltd',
  description: 'Compliance, duties, warehousing, and delivery timelines for Indian and Mediterranean marble entering the EU.',
  openGraph: {
    title: 'Import marble into Europe with confidence',
    description: 'Rab Noor Pvt Ltd handles EORI validation, 0–4% duty calculations, and bonded warehousing for EU buyers.'
  }
};

const processSteps = [
  'Share purchase order + technical specs',
  'Rab Noor blocks quarry lots and schedules fabrication',
  'QC photos + documents delivered digitally',
  'Customs broker pre-files entry using your EORI number',
  'Delivery to EU warehouse or direct to site'
];

export default function ImportingToEuropePage() {
  return (
    <>
      <PageHeader title="Importing to Europe" description="EU-focused logistics playbook for marble consignments." />
      <Container className="space-y-12 py-12">
        <section>
          <h2 className="section-heading">EORI requirement</h2>
          <p className="section-subtitle mt-3">
            Every EU buyer must maintain an active EORI number tied to their VAT registration. Rab Noor verifies EORI status before booking a vessel to avoid last-minute customs blocks.
          </p>
          <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p>Need help applying? Our Athens compliance team can walk you through the national customs portal and share document templates.</p>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">Duties & taxes</h2>
            <p className="section-subtitle mt-3">Marble slabs fall under HS 6802 with 0–4% duty depending on product type and preferential agreements.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>0% duty for EU-origin stones shipped from bonded EU warehouses</li>
              <li>2–4% for Indian-origin slabs entering Northern Europe</li>
              <li>Import VAT can be deferred using postponed accounting in most EU states</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">EU warehouse advantages</h2>
            <p className="section-subtitle mt-3">We maintain bonded facilities in Athens and Rotterdam.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Stage multiple projects and release only what the site is ready for</li>
              <li>Inspect slabs locally before trucking across EU borders</li>
              <li>Finance-friendly: pay duty/VAT only when goods exit the warehouse</li>
            </ul>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">Radiation & safety checks</h2>
            <p className="section-subtitle mt-3">
              Select EU ports run random radiation scanning. Our crates carry material safety data sheets and quarry origin certificates to expedite inspections.
            </p>
            <p className="mt-4 text-sm text-slate-600">For Germany and France we provide EN-compliant lab reports, skid resistance testing, and REACH statements.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="section-heading">Delivery timelines</h2>
            <p className="section-subtitle mt-3">Typical transit times for full containers:</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Mundra → Piraeus: 12–15 days sailing + 2 days clearance</li>
              <li>Nhava Sheva → Rotterdam / Antwerp: 25–30 days + 4 days inland trucking</li>
              <li>Direct Thessaloniki stock → EU capitals: 3–6 days by road</li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="section-heading">How the process works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-600">
                <p className="text-2xl font-semibold text-emerald-500">{index + 1}</p>
                <p className="mt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 text-center">
          <h2 className="text-2xl font-semibold text-emerald-900">Talk to our EU Import Specialist</h2>
          <p className="mt-3 text-sm text-emerald-800">We will review your EORI status, warehouse needs, and delivery timeline, then share a tailored logistics plan.</p>
          <Button href="/contact" className="mt-5">
            Schedule a call
          </Button>
        </section>
      </Container>
    </>
  );
}
