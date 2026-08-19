import React from 'react';
import { PageTab } from '../types';
import { Mail, MapPin, ArrowRight, Shield, Globe, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.svg" alt="Furious Fly Logo" className="h-10 w-10 object-contain shrink-0" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">Furious Fly</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">Fly Beyond Limits</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              High-end digital agency & technology studio specializing in custom web architecture, enterprise AI systems, and scalable cloud solutions.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-blue-400" /> Enterprise Grade</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400" /> Global Standards</span>
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-emerald-400" /> 100% Delivery</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Engineering Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} className="hover:text-white transition-colors cursor-pointer text-slate-500">
                  Admin CMS
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Capabilities</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">Next-Gen Web Apps</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">Enterprise AI & LLMs</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">Cross-Platform Mobile</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">Cloud & DevOps Systems</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">Technical Architecture</button></li>
            </ul>
          </div>

          {/* Direct Contact & Founder info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Get in Touch</h4>
            <div className="space-y-2.5 text-sm">
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:hiteshdxit005@gmail.com" className="hover:text-white transition-colors">
                  hiteshdxit005@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Delhi, India</span>
              </p>
            </div>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 group cursor-pointer"
              >
                Schedule Architecture Consultation <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Furious Fly. Founded by Hitesh Kumar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy & Terms
            </button>
            <a href="https://furiousfly.in" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              furiousfly.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
