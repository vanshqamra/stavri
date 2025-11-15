'use client';

import { FormEvent, useState } from 'react';

export const B2BLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('B2B login attempt', { email });
    setStatus('Mock login submitted. Authentication will be added later.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2"
        required
      />
      <button type="submit" className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white">
        Sign In
      </button>
      {status ? <p className="text-sm text-emerald-600">{status}</p> : null}
    </form>
  );
};
