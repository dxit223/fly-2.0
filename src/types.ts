export type PageTab = 'home' | 'about' | 'services' | 'blog' | 'contact' | 'privacy' | 'admin';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
}

export interface InquiryLead {
  id: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
