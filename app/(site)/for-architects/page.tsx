import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { ArchitectRegistrationForm } from '@/components/forms/site/ArchitectRegistrationForm';

export const metadata: Metadata = {
  title: 'For Architects | Rab Noor Pvt Ltd',
  description: 'Download CAD textures, spec sheets, and request sample boards to streamline marble selection.',
  openGraph: {
    title: 'Architect Resources — Rab Noor Pvt Ltd',
    description: 'High-resolution slab photos, technical support, and a dedicated architect registration program.'
  }
};

const resourceSections = [
  {
    title: 'CAD Textures Library',
    body: 'Makrana, Thassos, Pietra Grey, and colored marbles are mapped into seamless .PAT, .RVT, and .MAX files for direct import into your BIM workflows.'
  },
  {
    title: 'High-res slab photography',
    body: 'Lots are shot under calibrated lighting with scale references so you can plan grain direction, book-matching, and seam positions.'
  },
  {
    title: 'Spec sheet assistance',
    body: 'CSI-format specification sheets cover density, absorption, finish availability, and recommended maintenance regimes.'
  },
  {
    title: 'Sample boards & mockups',
    body: 'Sample kits, cut-to-size mockups, and dry-lay photos ship worldwide within 5–7 days through our express partners.'
  }
];

const supportBullets = [
  'Dedicated WhatsApp hotline for urgent RFIs, finish clarifications, or substitution advice.',
  'Lookbook-ready imagery and text you can repurpose inside concept decks.',
  'Pre-tender budgeting support that factors freight, customs, and installation sequencing.'
];

export default function ForArchitectsPage() {
  return (
    <>
      <PageHeader title="For Architects" description="Tools and services tailored to design practices." />
      <Container className="space-y-12 py-12">
        <section className="grid gap-6 md:grid-cols-2">
          {resourceSections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{section.body}</p>
            </article>
          ))}
        </section>
        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Studio Support</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {supportBullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-amber-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Architect Registration Form</h2>
          <p className="mt-3 text-sm text-slate-600">
            Register your practice to gain access to our CAD download hub, dedicated WhatsApp channel, and rapid sample program.
          </p>
          <div className="mt-6">
            <ArchitectRegistrationForm />
          </div>
        </section>
      </Container>
    </>
  );
}
