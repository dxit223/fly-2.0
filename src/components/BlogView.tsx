import React, { useState } from 'react';
import { PageTab, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { Calendar, Clock, User, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Artificial Intelligence', 'Web Engineering', 'Product Design'];

  const filteredPosts = selectedCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
          Engineering & Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Furious Fly Knowledge Base
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Deep dives into software architecture, edge AI inference, distributed computing, and aerodynamic user interfaces.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            onClick={() => setActiveArticle(post)}
          >
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-4">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.author}</span>
              </div>
              <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {activeArticle.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activeArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}</span>
                </div>
              </div>

              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line space-y-4 border-t border-slate-100 pt-6">
                {activeArticle.content}
              </div>

              <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">Published by Furious Fly Editorial Team</div>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onNavigate('contact');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white font-semibold text-xs rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Consult Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
