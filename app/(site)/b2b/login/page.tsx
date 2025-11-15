import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { B2BLoginForm } from '@/components/forms/site/B2BLoginForm';

export default function B2BLoginPage() {
  return (
    <>
      <PageHeader title="B2B Login" description="Secure distributor access." />
      <Container className="py-16">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6">
          <B2BLoginForm />
        </div>
      </Container>
    </>
  );
}
