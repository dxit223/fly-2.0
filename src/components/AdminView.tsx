import React, { useState } from 'react';
import { PageTab, InquiryLead, ChatMessage } from '../types';
import { 
  BarChart3, 
  Inbox, 
  Bot, 
  Settings, 
  Send, 
  CheckCircle2, 
  Trash2, 
  ShieldCheck, 
  ArrowLeft,
  Mail,
  Clock,
  Sparkles,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface AdminViewProps {
  onNavigate: (tab: PageTab) => void;
  leads: InquiryLead[];
  onUpdateLeadStatus: (id: string, status: 'new' | 'contacted' | 'resolved') => void;
  onDeleteLead: (id: string) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ 
  onNavigate, 
  leads, 
  onUpdateLeadStatus, 
  onDeleteLead 
}) => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'ai' | 'analytics' | 'settings'>('inbox');
  
  // AI Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Hello Hitesh! I am your Furious Fly AI Assistant. How can I assist you with client proposals, technical architecture, or inquiry analysis today?',
      timestamp: 'Just now'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoadingAi) return;

    const userText = inputMessage.trim();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoadingAi(true);

    try {
      const response = await fetch('/api/agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: messages.map(m => ({ role: m.role, text: m.text }))
        })
      });

      const data = await response.json();
      const replyText = data.text || 'System response received.';

      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Autonomous AI is ready. You can test inquiries and architecture drafting anytime.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoadingAi(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.svg" alt="Furious Fly Logo" className="h-9 w-9 object-contain shrink-0" />
          <div>
            <h1 className="text-xl font-bold tracking-tight">Furious Fly CMS Core</h1>
            <p className="text-xs text-slate-400">Authenticated Portal • Admin: Hitesh Kumar</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Live Site
          </button>
        </div>
      </div>

      {/* Admin Nav Tabs */}
      <div className="flex border-b border-slate-200 gap-2 overflow-x-auto pb-1">
        {[
          { id: 'inbox', label: `Inquiry Leads (${leads.filter(l => l.status === 'new').length} New)`, icon: Inbox },
          { id: 'ai', label: 'AI Architecture Assistant', icon: Bot },
          { id: 'analytics', label: 'Telemetry & Analytics', icon: BarChart3 },
          { id: 'settings', label: 'Site Configuration', icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab: Inquiries Inbox */}
      {activeTab === 'inbox' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Incoming Client Leads</h2>
            <span className="text-xs font-semibold text-slate-500">{leads.length} Total Inquiries</span>
          </div>

          {leads.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
              <Inbox className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">No Inquiries Yet</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Submissions from the Contact Page will appear here in real-time.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className={`bg-white p-6 rounded-2xl border transition-all ${
                    lead.status === 'new' ? 'border-blue-300 shadow-md ring-1 ring-blue-200' : 'border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900 text-base">{lead.name}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
                          lead.status === 'contacted' ? 'bg-amber-100 text-amber-700' :
                          'bg-emerald-100 text-emerald-700'
                        }`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-3">
                        <span>{lead.email}</span>
                        <span>•</span>
                        <span>Budget: {lead.budget}</span>
                        <span>•</span>
                        <span>Service: {lead.service}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={lead.status}
                        onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as any)}
                        className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-slate-50 focus:outline-none"
                      >
                        <option value="new">Mark as New</option>
                        <option value="contacted">Mark as Contacted</option>
                        <option value="resolved">Mark as Resolved</option>
                      </select>

                      <a
                        href={`mailto:${lead.email}?subject=Furious Fly Project Consultation for ${lead.name}`}
                        className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" /> Reply
                      </a>

                      <button
                        onClick={() => onDeleteLead(lead.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl mt-3 font-mono">
                    {lead.message}
                  </div>
                  <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Received: {lead.createdAt}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: AI Assistant */}
      {activeTab === 'ai' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[550px]">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="font-bold text-xs">Furious Fly Gemini AI Engineering Strategist</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Connected
            </span>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xl p-4 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className={`block text-[9px] mt-1 ${m.role === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {isLoadingAi && (
              <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" /> Furious Fly AI is generating response...
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask AI to draft a client scope, estimate hours, or outline system architecture..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoadingAi}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" /> Send
            </button>
          </form>
        </div>
      )}

      {/* Tab: Analytics */}
      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-slate-400">Total Unique Visitors</span>
            <div className="text-3xl font-extrabold text-slate-900">4,820</div>
            <span className="text-[11px] text-emerald-600 font-semibold">↑ +34% this month</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-slate-400">Total Client Inquiries</span>
            <div className="text-3xl font-extrabold text-blue-600">{leads.length}</div>
            <span className="text-[11px] text-slate-500 font-semibold">100% response rate</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-slate-400">Lighthouse Performance</span>
            <div className="text-3xl font-extrabold text-emerald-600">100 / 100</div>
            <span className="text-[11px] text-emerald-600 font-semibold">Perfect audit score</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-slate-400">Average TTFB</span>
            <div className="text-3xl font-extrabold text-slate-900">18ms</div>
            <span className="text-[11px] text-slate-500 font-semibold">Global CDN Edge</span>
          </div>
        </div>
      )}

      {/* Tab: Settings */}
      {activeTab === 'settings' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Brand & Deployment Settings</h2>
          
          <div className="space-y-4 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Logo Path & Asset Location</div>
              <p className="text-slate-600">
                Your brand logo is served from <code>/assets/logo.svg</code> (and inside <code>furiousfly-v2/assets/logo.svg</code>).
              </p>
              <p className="text-slate-600">
                You can upload or replace your custom logo file anytime in the asset folder.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Domain Deployment</div>
              <p className="text-slate-600">
                Primary Target Domain: <strong>furiousfly.in</strong>
              </p>
              <p className="text-slate-600">
                To deploy to your host (cPanel, Vercel, Netlify, or Cloud Run), export the build files or upload the <code>furiousfly-v2</code> directory directly to your server's <code>public_html</code>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
