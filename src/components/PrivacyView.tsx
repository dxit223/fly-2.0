import React from 'react';
import { PageTab } from '../types';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-24 space-y-12">
      <div className="text-center space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy & Terms of Service
        </h1>
        <p className="text-slate-500 text-sm">Last updated: August 2026 • Furious Fly</p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2>1. Introduction & Scope</h2>
          </div>
          <p>
            Welcome to <strong>Furious Fly</strong> (accessible at furiousfly.in). We are committed to safeguarding the privacy and security of your personal data and proprietary project intellectual property. This Privacy Policy outlines our standards regarding data collection, usage, and protection.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-100 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Lock className="w-5 h-5 text-blue-600" />
            <h2>2. Information Collection & Client Code Confidentiality</h2>
          </div>
          <p>
            When you submit an architectural inquiry or partner with Furious Fly:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Contact details:</strong> Name, work email, and company details are used exclusively for direct communication with founder Hitesh Kumar.</li>
            <li><strong>Intellectual Property:</strong> All client source code, database architectures, and business logic remain 100% strictly confidential and protected under mutual NDA agreements.</li>
            <li><strong>No third-party data selling:</strong> We never sell, monetize, or transfer your contact or telemetry data to third parties.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-slate-100 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Eye className="w-5 h-5 text-blue-600" />
            <h2>3. AI Processing & Enterprise Data Governance</h2>
          </div>
          <p>
            For client systems integrating generative AI (such as Google Gemini LLMs), client enterprise prompts and confidential inputs are processed strictly via enterprise API zero-data-retention tiers and are <strong>never</strong> utilized for model retraining.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-100 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <FileText className="w-5 h-5 text-blue-600" />
            <h2>4. Contact Us</h2>
          </div>
          <p>
            For any legal inquiries, data protection requests, or NDA execution, contact Hitesh Kumar directly at:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800">
            Email: <a href="mailto:hiteshdxit005@gmail.com" className="text-blue-600 underline">hiteshdxit005@gmail.com</a><br/>
            Location: Delhi, India
          </div>
        </section>
      </div>

      <div className="text-center">
        <button
          onClick={() => onNavigate('home')}
          className="px-6 py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};
