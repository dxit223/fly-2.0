import React, { useState } from 'react';
import { PageTab } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    onNavigate(tab);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo and Brand */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <img 
              src="/assets/logo.svg" 
              alt="Furious Fly Logo" 
              className="h-10 w-10 object-contain group-hover:scale-105 transition-transform shrink-0" 
              onError={(e) => {
                // Fallback SVG if image not found
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Furious Fly
              </span>
              <span className="text-[9px] font-semibold tracking-wider uppercase text-blue-500">
                Fly Beyond Limits
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer ${
                    isActive ? 'text-blue-600 font-bold' : 'hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1 cursor-pointer ${
                currentTab === 'admin' 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'text-slate-500 hover:text-slate-800 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Admin CMS <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 md:hidden"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl border-l border-slate-100 transform transition-transform duration-300 flex flex-col md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Furious Fly Logo" className="h-8 w-8 object-contain shrink-0" />
            <span className="text-base font-bold text-slate-900">Furious Fly</span>
          </div>
          <button 
            onClick={() => setMobileOpen(false)}
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-lg font-semibold transition-colors py-1 cursor-pointer ${
                currentTab === item.id ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-slate-100 pt-5 mt-2 space-y-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center block px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="w-full text-center block px-4 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Admin CMS Portal
            </button>
          </div>
        </nav>
        <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400 font-medium">furiousfly.in • Founded by Hitesh Kumar</p>
        </div>
      </div>
    </>
  );
};
