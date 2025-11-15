import { ReactNode } from 'react';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export const PageHeader = ({ title, description, action }: PageHeaderProps) => (
  <header className="border-b border-slate-200 bg-white/80 py-12">
    <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Rab Noor Pvt Ltd</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">{title}</h1>
        {description ? <p className="mt-3 text-base text-slate-600">{description}</p> : null}
      </div>
      {action}
    </Container>
  </header>
);
