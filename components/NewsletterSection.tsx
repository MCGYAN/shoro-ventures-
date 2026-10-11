'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus('success');
      setEmail('');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-plum mb-3 sm:mb-4 leading-snug">Stay In The Loop</h3>
      <p className="text-brand-plum/70 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
        Be the first to know when new shoes and styles drop, plus member-only offers.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 boutique-input !py-3.5 text-center sm:text-left min-h-[48px]"
        />
        <button type="submit" disabled={isSubmitting} className="boutique-btn-primary w-full sm:w-auto disabled:opacity-70 min-h-[48px]">
          {isSubmitting ? 'Joining…' : 'Subscribe'}
        </button>
      </form>
      {submitStatus === 'success' && (
        <p className="mt-4 text-sm text-brand-plum/70 font-medium">Welcome to the community!</p>
      )}
    </div>
  );
}
