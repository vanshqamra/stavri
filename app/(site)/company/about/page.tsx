import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function CompanyAboutPage() {
  return (
    <>
      <PageHeader title="Company · About" description="Extended overview of Rab Noor Pvt Ltd." />
      <Container className="space-y-6 py-16">
        <p className="text-base text-slate-600">This page mirrors the main About page but can host corporate documents later.</p>
        {/* TODO: Add milestones, leadership bios, and downloadable profile deck. */}
      </Container>
    </>
  );
}
