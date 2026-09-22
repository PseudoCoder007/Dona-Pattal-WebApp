'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { products } from '@/content/products';
import { FormField } from '@/components/forms/FormField';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    city: '',
    state: 'Uttar Pradesh',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = (data: typeof formData) => {
    const newErrors: Record<string, string> = {};
    if (!data.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!data.companyName.trim()) newErrors.companyName = 'Business name is required';
    if (!data.phone.trim()) newErrors.phone = 'Phone/WhatsApp is required';
    if (!data.city.trim()) newErrors.city = 'Delivery city is required';
    if (!data.state.trim()) newErrors.state = 'State is required';
    if (!data.product) newErrors.product = 'Please select a product';
    if (!data.quantity.trim()) newErrors.quantity = 'Estimated quantity is required';
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleReset = () => {
    setFormData({ fullName: '', companyName: '', phone: '', email: '', product: '', quantity: '', city: '', state: 'Uttar Pradesh', message: '' });
    setErrors({});
    setShowSuccess(false);
  };

  if (showSuccess) {
    return (
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center p-8 text-center border border-brick/20 z-20" role="alert">
        <div className="w-14 h-14 bg-paper border border-stone text-brick rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        </div>
        <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs mb-1 block">ENQUIRY RECEIVED</span>
        <h3 className="font-serif text-2xl font-bold text-ink mb-2">Thank You for Sharing Your Requirement</h3>
        <p className="text-sm text-muted max-w-md mb-6 leading-relaxed">
          We&apos;ll review your specification details and get back to you regarding pricing, batch availability, and delivery dispatch to your city.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <WhatsAppButton message="Hello Sahlok, I just submitted a wholesale enquiry form." label="CHAT ON WHATSAPP" />
          <Button variant="primary" onClick={handleReset}>BACK TO PRODUCTS</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} required placeholder="e.g. Ramesh Chandra" />
        <FormField label="Business / Company Name" name="companyName" value={formData.companyName} onChange={handleChange} error={errors.companyName} required placeholder="e.g. Purvanchal Caterers / Maa Sharda Sweets" />
        <FormField label="Phone / WhatsApp Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required placeholder="+91 XXXXX XXXXX" />
        <FormField label="Email (Optional)" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Optional" />
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">Product / Requirement <span className="text-brick">*</span></label>
          <select name="product" value={formData.product} onChange={handleChange} className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick" required aria-invalid={errors.product ? 'true' : 'false'}>
            <option value="">Select a product size...</option>
            {products.map(p => <option key={p.slug} value={p.slug}>{p.name}</option>)}
            <option value="multiple-products">Multiple Products</option>
            <option value="custom-size">Custom Size / OEM Requirement</option>
          </select>
          {errors.product && <p className="text-xs text-brick mt-1" role="alert">{errors.product}</p>}
        </div>
        <FormField label="Approximate Quantity" name="quantity" value={formData.quantity} onChange={handleChange} error={errors.quantity} required placeholder="e.g. 50 Cartons / 10,000 pieces" />
        <FormField label="Delivery City" name="city" value={formData.city} onChange={handleChange} error={errors.city} required placeholder="e.g. Varanasi / Prayagraj / Patna / Lucknow" />
        <FormField label="State" name="state" value={formData.state} onChange={handleChange} error={errors.state} placeholder="e.g. Uttar Pradesh" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">Message / Details</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick placeholder:text-muted/60" placeholder="Share any specifics: recurring order, preferred pack counts, or dispatch timelines..." rows={4} />
      </div>
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone/40">
        <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">{isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}</Button>
        <div className="text-center sm:text-left w-full">
          <WhatsAppButton message="Hi, submitting direct bulk enquiry for paper plates and dona." label="Or chat directly on WhatsApp (+91 87872 01971)" className="text-xs font-medium text-muted hover:text-brick transition-colors flex items-center gap-1.5 justify-center sm:justify-start" />
        </div>
      </div>
    </form>
  );
}
