'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

interface ArchitectFormState {
  firm: string;
  contact: string;
  email: string;
  city: string;
  focus: string;
  resources: string;
}

const defaultState: ArchitectFormState = {
  firm: '',
  contact: '',
  email: '',
  city: '',
  focus: '',
  resources: ''
};

export const ArchitectRegistrationForm = () => {
  const [formState, setFormState] = useState(defaultState);
  const [message, setMessage] = useState('');

  const updateField = (field: keyof ArchitectFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
      setMessage('');
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.firm || !formState.email) {
      setMessage('Please share your firm name and email.');
      return;
    }
    console.log('Architect registration', formState);
    setMessage('Thanks for registering! We will send access details shortly.');
    setFormState(defaultState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="Firm name*"
          value={formState.firm}
          onChange={updateField('firm')}
          required
        />
        <input
          className="rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="Contact person"
          value={formState.contact}
          onChange={updateField('contact')}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="email"
          className="rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="Email*"
          value={formState.email}
          onChange={updateField('email')}
          required
        />
        <input
          className="rounded-2xl border border-slate-200 px-4 py-2"
          placeholder="City / Country"
          value={formState.city}
          onChange={updateField('city')}
        />
      </div>
      <input
        className="w-full rounded-2xl border border-slate-200 px-4 py-2"
        placeholder="Project focus (hospitality, residential, retail...)"
        value={formState.focus}
        onChange={updateField('focus')}
      />
      <textarea
        className="w-full rounded-2xl border border-slate-200 px-4 py-2"
        rows={4}
        placeholder="Resources you need (CAD textures, samples, spec sheets...)"
        value={formState.resources}
        onChange={updateField('resources')}
      />
      <button type="submit" className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white">
        Register as an Architect Partner
      </button>
      {message ? <p className="text-sm text-emerald-700">{message}</p> : null}
      {/* TODO: Connect to CRM API in next phase. */}
    </form>
  );
};
