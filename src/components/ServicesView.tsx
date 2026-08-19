import React, { useState } from 'react';
import { PageTab } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { Check, ArrowRight, Calculator, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  // Interactive Project Estimator State
  const [selectedType, setSelectedType] = useState('web-app');
  const [selectedTimeline, setSelectedTimeline] = useState('standard');
  const [selectedAi, setSelectedAi] = useState(true);

  const calculateEstimate = () => {
    let base = 1500;
    if (selectedType === 'mobile') base = 2200;
    if (selectedType === 'enterprise-ai') base = 2800;
    if (selectedType === 'fullstack-cloud') base = 3500;

    if (selectedAi && selectedType !== 'enterprise-ai') base += 800;
    if (selectedTimeline === 'expedited') base = Math.round(base * 1.25);

    return base;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
          Services & Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Engineering Suite
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          From rapid prototype MVP delivery to multi-tier enterprise AI infrastructure, we provide the full development lifecycle under one roof.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {service.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Key Deliverables:</div>
                <ul className="space-y-1.5">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1.5">Tech Core:</div>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-700 font-semibold text-xs rounded-xl border border-blue-200 hover:border-blue-600 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                Inquire For This Service <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Scope & Cost Estimator */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-400 text-xs font-semibold border border-blue-800">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Scope Estimator</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Plan Your Project Sprint</h2>
            <p className="text-slate-400 text-sm">
              Configure your requirements below to calculate an approximate starting estimate for your custom build.
            </p>

            <div className="space-y-5 pt-2">
              {/* Type selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Project Architecture Type</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'web-app', label: 'Web Application / Platform' },
                    { id: 'mobile', label: 'Cross-Platform Mobile App' },
                    { id: 'enterprise-ai', label: 'Custom Enterprise AI Agent' },
                    { id: 'fullstack-cloud', label: 'Fullstack + Cloud Infra' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedType(item.id)}
                      className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                        selectedType === item.id 
                          ? 'bg-blue-600 border-blue-400 text-white font-bold' 
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Deployment Velocity</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setSelectedTimeline('standard')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      selectedTimeline === 'standard' 
                        ? 'bg-blue-600 border-blue-400 text-white font-bold' 
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    Standard Sprint (3–6 Weeks)
                  </button>
                  <button
                    onClick={() => setSelectedTimeline('expedited')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      selectedTimeline === 'expedited' 
                        ? 'bg-blue-600 border-blue-400 text-white font-bold' 
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    Expedited Velocity (1–2 Weeks)
                  </button>
                </div>
              </div>

              {/* AI toggle */}
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  id="ai-toggle"
                  checked={selectedAi}
                  onChange={(e) => setSelectedAi(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded bg-slate-950 border-slate-700 cursor-pointer"
                />
                <label htmlFor="ai-toggle" className="text-xs text-slate-300 font-medium cursor-pointer">
                  Include Autonomous Gemini / LLM Integration Layer
                </label>
              </div>
            </div>
          </div>

          {/* Estimate card */}
          <div className="lg:col-span-5 bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Estimated Starting Investment</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 font-mono">
                ${calculateEstimate().toLocaleString()}
              </div>
              <span className="text-[11px] text-slate-500 block">Includes complete architecture, design & deployment</span>
            </div>

            <div className="space-y-2 text-left text-xs text-slate-400 border-t border-slate-800 pt-4">
              <div className="flex justify-between">
                <span>Code Ownership:</span>
                <span className="text-white font-semibold">100% Client Owned</span>
              </div>
              <div className="flex justify-between">
                <span>Post-Launch Warranty:</span>
                <span className="text-white font-semibold">60 Days Included</span>
              </div>
              <div className="flex justify-between">
                <span>Code Standards:</span>
                <span className="text-white font-semibold">TypeScript Strict</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              Lock In Scope & Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
