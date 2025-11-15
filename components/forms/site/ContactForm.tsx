'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  message: string;
}

const defaultData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  message: ''
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(defaultData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Contact form submission', formData);
    setSubmitted(true);
    setFormData(defaultData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            value={formData.name}
            onChange={handleChange('name')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            value={formData.phone}
            onChange={handleChange('phone')}
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Company
          <input
            value={formData.company}
            onChange={handleChange('company')}
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Country
          <input
            value={formData.country}
            onChange={handleChange('country')}
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Message
        <textarea
          value={formData.message}
          onChange={handleChange('message')}
          rows={4}
          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
      >
        Send Message
      </button>
      {submitted ? <p className="text-sm text-emerald-600">Thanks! We will reply shortly.</p> : null}
      {/* TODO: Connect to /api/contact in later phases. */}
    </form>
  );
};
