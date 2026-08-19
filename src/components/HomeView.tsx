import React from 'react';
import { PageTab } from '../types';
import { SERVICES_DATA, TESTIMONIALS } from '../data/mockData';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Cpu, 
  Code2, 
  Layers, 
  Star, 
  CheckCircle2,
  Sparkles,
  Bot,
  Globe,
  Smartphone
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Next-Gen Engineering & Enterprise AI</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Transforming Ideas Into <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  Intelligent Digital Realities
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Furious Fly is a premier software engineering and AI consultancy. We architect ultra-fast web platforms, custom LLM intelligence, and mission-critical cloud backends.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                Launch Your Project <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 transition-all cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Lighthouse Score</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">&lt; 20ms</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">AI Inference Target</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">99.9%</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Visual Mascot Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-50 to-blue-50/50 p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden group">
              <div className="w-40 h-40 mx-auto flex items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-inner group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/assets/logo.svg" 
                  alt="Furious Fly Insignia" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-6 text-center space-y-2">
                <span className="text-[11px] uppercase font-bold tracking-widest text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full inline-block">
                  Brand Mascot
                </span>
                <h3 className="text-xl font-bold text-slate-900">The Continuous Bird</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Representing streamlined aerodynamic velocity, lightweight execution, and continuous perfection in every line of code.
                </p>
              </div>

              {/* Code snippet decoration */}
              <div className="mt-6 bg-slate-900 text-slate-300 p-4 rounded-xl text-left font-mono text-xs border border-slate-800">
                <div className="text-slate-500">// Furious Fly Architecture</div>
                <div className="text-blue-400">const <span className="text-cyan-300">agency</span> = <span className="text-emerald-400">new FuriousFly</span>({`{`}</div>
                <div className="pl-4 text-slate-400">founder: <span className="text-amber-300">"Hitesh Kumar"</span>,</div>
                <div className="pl-4 text-slate-400">motto: <span className="text-amber-300">"Fly Beyond Limits"</span>,</div>
                <div className="pl-4 text-slate-400">status: <span className="text-emerald-400">"Ready for Production"</span></div>
                <div className="text-blue-400">{`}`});</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            Our Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Performance Digital Solutions Built to Scale
          </h2>
          <p className="text-slate-600 text-base">
            From modern responsive user interfaces to distributed enterprise AI systems, we engineer software that sets the benchmark in speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 6).map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {index === 0 && <Globe className="w-6 h-6" />}
                    {index === 1 && <Bot className="w-6 h-6" />}
                    {index === 2 && <Smartphone className="w-6 h-6" />}
                    {index === 3 && <Cpu className="w-6 h-6" />}
                    {index === 4 && <Layers className="w-6 h-6" />}
                    {index === 5 && <Shield className="w-6 h-6" />}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    Learn more & Tech Specs <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Furious Fly Banner */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60 inline-block">
              The Furious Fly Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Speed Isn't an Accident. It's Our Architectural Standard.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We eliminate bloated dependencies, heavy frameworks, and unnecessary overhead. Everything we build is tuned for aerodynamic agility and peak reliability.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Sub-Second Execution</h4>
                  <p className="text-sm text-slate-400">Zero bloat, edge caching, and optimized client bundles for lightning fast response times.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 shrink-0 mt-1">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Enterprise TypeScript Precision</h4>
                  <p className="text-sm text-slate-400">Rigorous type-safe contracts preventing runtime surprises across the entire stack.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shrink-0 mt-1">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Dedicated Founder-Led Engineering</h4>
                  <p className="text-sm text-slate-400">Direct architecture oversight by founder Hitesh Kumar with zero delegation to junior contractors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-slate-400">Live Engineering Telemetry</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Systems Nominal
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between items-center bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">Frontend Bundle Size</span>
                <span className="text-emerald-400 font-bold">&lt; 45 KB (Gzipped)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">Core Web Vitals (LCP)</span>
                <span className="text-emerald-400 font-bold">0.32s (Good)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">AI Prompt Pipeline Throughput</span>
                <span className="text-cyan-400 font-bold">1,200 req/sec</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">Security & Encryption</span>
                <span className="text-blue-400 font-bold">TLS 1.3 + AES-256</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
              >
                Request Technical Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Forward-Thinking Founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-slate-200/60 pt-4">
                <div className="text-sm font-bold text-slate-900">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-tr from-blue-700 to-blue-500 rounded-3xl p-10 sm:p-14 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Fly Beyond Limits?
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto text-base">
              Let's turn your concept into an enterprise-grade digital product with unmatched velocity and precision.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-4 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 hover:shadow-xl transition-all cursor-pointer"
            >
              Start Your Project Now
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 bg-blue-800/60 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl border border-blue-400/40 transition-all cursor-pointer"
            >
              Meet the Founder
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
