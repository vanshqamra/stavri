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
    body: 'Seamless textures for Makrana, Thassos, Pietra Grey, and more are delivered as .PAT, .JPEG, and .MAX files for direct use inside Revit, AutoCAD, and 3ds Max.'
  },
  {
    title: 'High-res slab photography',
    body: 'Every lot is photographed under calibrated lighting so design teams can plan book-matching, grain direction, and joint layouts.'
  },
  {
    title: 'Spec sheet assistance',
    body: 'Our material technologists prepare CSI-format specification sheets covering density, absorption, finish availability, and maintenance recommendations.'
  },
  {
    title: 'Sample boards & mockups',
    body: 'Receive desktop sample kits or full-size mockups shipped to your studio within 5–7 days via our express partners.'
  }
];

export default function ForArchitectsPage() {
  return (
    <>
      <PageHeader title="For Architects" description="Tools and services tailored to design practices." />
      <Container className="space-y-12 py-12">
        <section className="grid gap-6 md:grid-cols-2">
          {resourceSections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{section.body}</p>
            </article>
          ))}
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
