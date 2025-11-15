'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { marbleList } from '@/lib/marbles';

interface LineItem {
  id: string;
  marbleSlug: string;
  quantity: string;
  thickness: string;
  destination: string;
}

interface QuoteFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  lineItems: LineItem[];
  notes: string;
}

const generateId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const createEmptyItem = (): LineItem => ({ id: generateId(), marbleSlug: '', quantity: '', thickness: '', destination: '' });

const defaultState: QuoteFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  lineItems: [],
  notes: ''
};

export const QuoteBuilderForm = () => {
  const [formState, setFormState] = useState<QuoteFormState>(defaultState);
  const [currentItem, setCurrentItem] = useState<LineItem>(createEmptyItem());
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof QuoteFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const updateItem = (field: keyof LineItem) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setCurrentItem((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const addItem = () => {
    if (!currentItem.marbleSlug || !currentItem.quantity) {
      return;
    }
    setFormState((prev) => ({ ...prev, lineItems: [...prev.lineItems, currentItem] }));
    setCurrentItem(createEmptyItem());
  };

  const removeItem = (id: string) => {
    setFormState((prev) => ({ ...prev, lineItems: prev.lineItems.filter((item) => item.id !== id) }));
  };

  const totalQuantity = useMemo(() => {
    return formState.lineItems.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0), 0);
  }, [formState.lineItems]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Quote builder submission', JSON.stringify(formState, null, 2));
    setSubmitted(true);
    setFormState(defaultState);
    setCurrentItem(createEmptyItem());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section>
        <h3 className="text-lg font-semibold text-slate-900">Step 1 · Contact Info</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input
            placeholder="Full Name"
            value={formState.name}
            onChange={updateField('name')}
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
          <input
            placeholder="Email"
            type="email"
            value={formState.email}
            onChange={updateField('email')}
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
          <input
            placeholder="Phone"
            value={formState.phone}
            onChange={updateField('phone')}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
          <input
            placeholder="Company"
            value={formState.company}
            onChange={updateField('company')}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-slate-900">Step 2 · Line Items</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <select
            value={currentItem.marbleSlug}
            onChange={updateItem('marbleSlug')}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          >
            <option value="">Select marble</option>
            {marbleList.map((marble) => (
              <option key={marble.value} value={marble.value}>
                {marble.label}
              </option>
            ))}
          </select>
          <input
            placeholder="Quantity (sqm / crates)"
            value={currentItem.quantity}
            onChange={updateItem('quantity')}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
          <input
            placeholder="Thickness"
            value={currentItem.thickness}
            onChange={updateItem('thickness')}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
          <input
            placeholder="Destination port"
            value={currentItem.destination}
            onChange={updateItem('destination')}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
        </div>
        <button
          type="button"
          onClick={addItem}
          className="mt-4 rounded-full border border-dashed border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-600"
        >
          Add Line Item
        </button>
        <div className="mt-6 space-y-3">
          {formState.lineItems.length === 0 ? <p className="text-sm text-slate-500">No items yet.</p> : null}
          {formState.lineItems.map((item, index) => (
            <div key={`${item.marble}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <p className="font-semibold text-slate-900">
                {marbleList.find((marble) => marble.value === item.marbleSlug)?.label || 'Custom marble'}
              </p>
              <p>Qty: {item.quantity}</p>
              <p>Thickness: {item.thickness || 'TBD'} · Destination: {item.destination || 'TBD'}</p>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="mt-2 text-xs font-semibold text-rose-500"
              >
                Remove item
              </button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-slate-900">Step 3 · Notes</h3>
        <textarea
          rows={4}
          placeholder="Share timeline, finishing needs, budget guidance, etc."
          value={formState.notes}
          onChange={updateField('notes')}
          className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
        />
      </section>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        <h4 className="text-base font-semibold text-slate-900">Summary</h4>
        <p className="mt-2">Line items added: {formState.lineItems.length}</p>
        <p>Total requested quantity: {totalQuantity.toFixed(2)} (calculated from numeric values)</p>
        <p className="mt-2">We will reply with quarry availability, pricing, and logistics options.</p>
      </div>
      <button type="submit" className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white">
        Submit Quote Request
      </button>
      {submitted ? <p className="text-sm text-emerald-600">Quote request logged. Expect a reply shortly.</p> : null}
      {/* TODO: Replace console.log with secure API endpoint in Phase 3. */}
    </form>
  );
};
