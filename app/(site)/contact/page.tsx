import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/forms/site/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Rab Noor Pvt Ltd',
  description: 'Reach our India sourcing team or Europe distribution office.'
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description="Global offices ready to support your marble requirements." />
      <Container className="grid gap-10 py-16 md:grid-cols-2">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">India Office</h2>
            <p className="mt-2 text-sm text-slate-600">Kishangarh, Rajasthan · +91 98765 43210 · india@marblesnearme.com</p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Europe Office</h2>
            <p className="mt-2 text-sm text-slate-600">Athens, Greece · +30 21 1234 5678 · europe@marblesnearme.com</p>
          </section>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
          <p className="mt-2 text-sm text-slate-600">Share your requirements and we will follow up with the right specialist.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
