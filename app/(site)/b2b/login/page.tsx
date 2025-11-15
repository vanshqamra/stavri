import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { B2BLoginForm } from '@/components/forms/site/B2BLoginForm';

export const metadata: Metadata = {
  title: 'B2B Login | Rab Noor Pvt Ltd',
  description: 'Secure access for distributors to view stock, pricing, and logistics updates.',
  openGraph: {
    title: 'Rab Noor B2B Login',
    description: 'Sign in to view real-time marble availability and logistics status.'
  }
};

export default function B2BLoginPage() {
  return (
    <>
      <PageHeader title="B2B Login" description="Secure distributor access." />
      <Container className="py-16">
        <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-900">Sign in to continue</h2>
          <p className="mt-2 text-sm text-slate-600">Need access? Email partnerships@marblesnearme.com.</p>
          <div className="mt-6">
            <B2BLoginForm />
          </div>
        </div>
      </Container>
    </>
  );
}
