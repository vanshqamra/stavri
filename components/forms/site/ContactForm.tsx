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
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a short brief.';
    }
    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    console.log('Contact form submission', formData);
    setSubmitted(true);
    setFormData(defaultData);
    setErrors({});
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
            className={`mt-1 w-full rounded-2xl border bg-white px-4 py-2 ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            required
            className={`mt-1 w-full rounded-2xl border bg-white px-4 py-2 ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
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
          className={`mt-1 w-full rounded-2xl border bg-white px-4 py-2 ${errors.message ? 'border-red-400' : 'border-slate-200'}`}
          required
        />
        {errors.message ? <p className="mt-1 text-xs text-red-500">{errors.message}</p> : null}
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
