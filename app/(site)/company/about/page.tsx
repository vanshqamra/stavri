import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function CompanyAboutPage() {
  const corporateHighlights = [
    'Dedicated compliance team preparing CE/DoP dossiers for every shipment.',
    'Dual banking relationships in India and Greece to simplify LC processing.',
    'In-house media team curating slab photography, CAD textures, and lookbooks.'
  ];

  return (
    <>
      <PageHeader title="Company · About" description="Extended overview of Rab Noor Pvt Ltd." />
      <Container className="space-y-10 py-16">
        <section className="space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Rab Noor Pvt Ltd is a privately held company headquartered in Rajasthan with EU subsidiaries in Greece. Our
            governance framework blends family ownership with professional boards that review sourcing allocations, ESG
            compliance, and capital expenditure for warehouses and finishing lines.
          </p>
          <p>
            Financial reporting follows IND-AS with quarterly audits, while each EU hub maintains IFRS statements for partner
            confidence. Vendor scorecards and client SLAs are published to every business unit so service levels remain visible.
          </p>
        </section>
        <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Corporate Highlights</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {corporateHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-dashed border-amber-200 bg-amber-50/70 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Corporate materials</h2>
          <p className="mt-3 text-sm text-slate-700">
            Email <a href="mailto:hello@marblesnearme.com" className="font-semibold text-amber-700">hello@marblesnearme.com</a> to
            receive our company profile deck, insurance certificates, or warehouse compliance reports.
          </p>
        </section>
      </Container>
    </>
  );
}
