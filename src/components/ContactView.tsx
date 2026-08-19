import React, { useState } from 'react';
import { PageTab, InquiryLead } from '../types';
import { FAQS } from '../data/mockData';
import { Mail, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (tab: PageTab) => void;
  onSubmitLead: (lead: InquiryLead) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onSubmitLead }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Application Development',
    budget: '$1,500 - $5,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newLead: InquiryLead = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'new'
    };

    onSubmitLead(newLead);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
          Contact & Inquiries
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let's Build Something Exceptional
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Tell us about your project vision, requirements, or architecture challenge. Our team responds within 24 hours.
        </p>
      </div>

      {/* Main Grid: Form + Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Direct Inquiries</span>
              <h2 className="text-2xl font-bold text-white">Furious Fly HQ</h2>
              <p className="text-sm text-slate-400">
                Founder-led technical agency based out of Delhi, delivering software worldwide.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Direct Founder Email</div>
                  <a href="mailto:hiteshdxit005@gmail.com" className="text-white hover:text-blue-300 font-medium">
                    hiteshdxit005@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Location</div>
                  <div className="text-white font-medium">Delhi, India</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Availability</div>
                  <div className="text-white font-medium">Mon–Sat • 9:00 AM – 8:00 PM IST</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/70 border border-blue-800/80 text-xs text-blue-200 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
              <span>Free initial 30-minute system architecture review with every inquiry.</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to <strong>Hitesh Kumar</strong>. We will review your technical requirements and reply to <strong>{formData.email}</strong> shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      service: 'Web Application Development',
                      budget: '$1,500 - $5,000',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-slate-900">Project Inquiry Form</h3>
                <p className="text-xs text-slate-500">Fill in the fields below to receive an architectural proposal.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  >
                    <option>Web Application Development</option>
                    <option>Enterprise AI & LLM Systems</option>
                    <option>Cross-Platform Mobile App</option>
                    <option>Cloud Infrastructure & DevOps</option>
                    <option>UI/UX & Product Design</option>
                    <option>Technical Architecture Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  >
                    <option>$1,500 - $3,000</option>
                    <option>$3,000 - $7,000</option>
                    <option>$7,000 - $15,000</option>
                    <option>$15,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Scope & Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project goals, key requirements, target timeline, or existing stack..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Submit Inquiry Directly to Furious Fly
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-500">Everything you need to know about working with Furious Fly.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="text-base">{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
