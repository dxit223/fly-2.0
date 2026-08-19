import React from 'react';
import { PageTab } from '../types';
import { Shield, Sparkles, Target, Compass, Award, Cpu, Check, ArrowRight, User } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
          About Furious Fly
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pioneering Aerodynamic Digital Architecture
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Founded on the principle that software should be fast, elegant, and uncompromising in its reliability.
        </p>
      </div>

      {/* Founder Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-56 h-56 rounded-3xl bg-slate-900 flex flex-col items-center justify-center p-6 text-white text-center shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="w-20 h-20 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center mb-3">
              <User className="w-10 h-10 text-blue-400" />
            </div>
            <div className="font-bold text-lg text-white">Hitesh Kumar</div>
            <div className="text-xs text-blue-400 font-medium">Founder & Principal Engineer</div>
            <div className="text-[10px] text-slate-400 mt-1">Delhi, India</div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Genesis</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why We Built Furious Fly
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In an industry burdened by slow agencies, bloated tech stacks, and cookie-cutter templates, <strong>Hitesh Kumar</strong> established <strong>Furious Fly</strong> with a singular mission: to provide engineering leaders and founders with an agile, high-velocity technology partner.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From modern React/TypeScript single-page applications to distributed AI inference pipelines, we treat every system with aerodynamic precision. No fluff, no wasted clock cycles—just pristine execution.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
              <Check className="w-4 h-4 text-emerald-500" /> Founder-Led Delivery
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
              <Check className="w-4 h-4 text-emerald-500" /> End-to-End TypeScript
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
              <Check className="w-4 h-4 text-emerald-500" /> Next-Gen AI Integration
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To empower companies with lightning-fast digital infrastructure and autonomous AI systems that eliminate operational bottlenecks and drive sustained competitive advantages.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To be the premier global technology benchmark for speed, aesthetic craftsmanship, and intelligent software automation.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Core Values</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Relentless velocity, radical architectural transparency, mathematical design standards, and uncompromising client ownership.
          </p>
        </div>
      </div>

      {/* Technology Stack Grid */}
      <div className="space-y-8 bg-slate-900 text-white p-10 sm:p-14 rounded-3xl border border-slate-800">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-800">
            Our Tech Stack
          </span>
          <h2 className="text-3xl font-extrabold">Engineered With Modern Industry Standards</h2>
          <p className="text-slate-400 text-sm">
            We curate our stack for high developer throughput, rapid CI/CD deployment, and near-zero server maintenance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
          {['React 19 & Next.js', 'TypeScript Strict', 'Tailwind CSS', 'Gemini & PyTorch', 'Node.js & Express', 'Google Cloud Run'].map((tech, i) => (
            <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center font-mono text-xs text-slate-300 flex flex-col items-center justify-center gap-2 hover:border-blue-500 transition-colors">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-6 pt-6">
        <h3 className="text-2xl font-bold text-slate-900">Want to discuss your technical roadmap with Hitesh?</h3>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
        >
          Book An Engineering Consultation <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
