'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

interface ProductInquiryFormProps {
  productName: string;
}

export const ProductInquiryForm = ({ productName }: ProductInquiryFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '',
    destination: '',
    notes: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (field: keyof typeof formState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
      setStatus('');
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.quantity) {
      setStatus('Please share your name, email, and desired quantity.');
      return;
    }
    const payload = { ...formState, product: productName };
    console.log('Product inquiry submission', payload);
    setStatus('Request sent. Our sourcing desk will respond within one business day.');
    setFormState({ name: '', email: '', company: '', quantity: '', destination: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name*
          <input
            value={formState.name}
            onChange={handleChange('name')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="Full name"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email*
          <input
            type="email"
            value={formState.email}
            onChange={handleChange('email')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Company
        <input
          value={formState.company}
          onChange={handleChange('company')}
          className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="Studio / developer"
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Quantity*
          <input
            value={formState.quantity}
            onChange={handleChange('quantity')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="e.g. 650 m² slabs"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Destination Port
          <input
            value={formState.destination}
            onChange={handleChange('destination')}
            className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
            placeholder="Rotterdam / Mundra / etc."
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Notes
        <textarea
          rows={4}
          value={formState.notes}
          onChange={handleChange('notes')}
          className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="Finishes, inspection requests, delivery timing"
        />
      </label>
      <button type="submit" className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white">
        Request Availability
      </button>
      {status ? <p className="text-sm text-emerald-700">{status}</p> : null}
      {/* TODO: Replace console.log with API endpoint in Phase 3. */}
    </form>
  );
};
