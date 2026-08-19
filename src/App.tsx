import React, { useState, useEffect } from 'react';
import { PageTab, InquiryLead } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { BlogView } from './components/BlogView';
import { ContactView } from './components/ContactView';
import { PrivacyView } from './components/PrivacyView';
import { AdminView } from './components/AdminView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persistent leads in LocalStorage
  const [leads, setLeads] = useState<InquiryLead[]>(() => {
    try {
      const saved = localStorage.getItem('furiousfly_leads');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: '1',
        name: 'Samantha Lee',
        email: 'samantha@apexhealth.io',
        service: 'Enterprise AI & LLM Systems',
        budget: '$7,000 - $15,000',
        message: 'Looking to build an autonomous medical records parsing agent with strict HIPAA compliance.',
        createdAt: 'Aug 17, 2026, 11:20 AM',
        status: 'new'
      },
      {
        id: '2',
        name: 'David Chen',
        email: 'david@fintechpulse.com',
        service: 'Web Application Development',
        budget: '$3,000 - $7,000',
        message: 'Need a high-frequency trading dashboard with real-time WebSockets and sub-50ms render latency.',
        createdAt: 'Aug 15, 2026, 04:45 PM',
        status: 'contacted'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('furiousfly_leads', JSON.stringify(leads));
    } catch (e) {
      console.error(e);
    }
  }, [leads]);

  const handleNavigate = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddLead = (newLead: InquiryLead) => {
    setLeads(prev => [newLead, ...prev]);
    showToast('Inquiry received! We will contact you within 24 hours.');
  };

  const handleUpdateLeadStatus = (id: string, status: 'new' | 'contacted' | 'resolved') => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    showToast(`Lead marked as ${status}`);
  };

  const handleDeleteLead = (id: string) => {
    setLeads(prev => prev.filter(l => l.id !== id));
    showToast('Inquiry deleted from inbox');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-800 text-xs font-semibold flex items-center gap-2 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navigation Bar */}
      <Navbar currentTab={currentTab} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {currentTab === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentTab === 'about' && <AboutView onNavigate={handleNavigate} />}
        {currentTab === 'services' && <ServicesView onNavigate={handleNavigate} />}
        {currentTab === 'blog' && <BlogView onNavigate={handleNavigate} />}
        {currentTab === 'contact' && <ContactView onNavigate={handleNavigate} onSubmitLead={handleAddLead} />}
        {currentTab === 'privacy' && <PrivacyView onNavigate={handleNavigate} />}
        {currentTab === 'admin' && (
          <AdminView 
            onNavigate={handleNavigate}
            leads={leads}
            onUpdateLeadStatus={handleUpdateLeadStatus}
            onDeleteLead={handleDeleteLead}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
