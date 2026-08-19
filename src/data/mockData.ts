import { BlogPost, ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Custom Web & Application Development',
    category: 'Engineering',
    description: 'Ultra-fast, responsive web applications built with modern architectures. Designed for peak conversion, sub-second latency, and frictionless scaling.',
    highlights: ['Micro-frontend & SSR architectures', 'PWA & Native-speed capabilities', 'Lighthouse 100/100 performance', 'Secure end-to-end authentication'],
    technologies: ['React', 'TypeScript', 'Next.js / Vite', 'Tailwind CSS', 'Node.js'],
    icon: 'Globe'
  },
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI & LLM Systems',
    category: 'Artificial Intelligence',
    description: 'Custom intelligent agents, RAG document pipelines, semantic search engines, and fine-tuned LLM workflows that automate complex operations.',
    highlights: ['Autonomous multi-agent workflows', 'RAG knowledge base grounding', 'Custom fine-tuning & prompt pipelines', 'High-throughput inference optimization'],
    technologies: ['Gemini 2.5/3.5', 'Python', 'LangChain / LlamaIndex', 'Vector Databases', 'FastAPI'],
    icon: 'Bot'
  },
  {
    id: 'mobile-apps',
    title: 'Cross-Platform Mobile Apps',
    category: 'Mobile',
    description: 'Native-feel iOS and Android applications developed with unified codebases. Fluid 60fps animations, offline-first syncing, and biometric security.',
    highlights: ['iOS & Android unified delivery', 'Offline-first database sync', 'Biometric & Push notification suite', 'App Store / Play Store automated CI/CD'],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'SQLite', 'Firebase'],
    icon: 'Smartphone'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    category: 'Infrastructure',
    description: 'Scalable cloud infrastructure deployed on Google Cloud, AWS, or Azure with automated CI/CD pipelines, container orchestration, and zero-downtime releases.',
    highlights: ['Kubernetes & Docker containerization', 'Serverless & auto-scaling clusters', 'Infrastructure as Code (Terraform)', '24/7 telemetry & security auditing'],
    technologies: ['Google Cloud Run', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    icon: 'Cloud'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design Systems',
    category: 'Design',
    description: 'Sophisticated, human-centered interfaces built on mathematical typography scales, deliberate spacing, and intuitive interaction design.',
    highlights: ['Atomic design systems & token libraries', 'Interactive prototypes & motion physics', 'Accessibility WCAG AA+ compliance', 'Comprehensive brand identity'],
    technologies: ['Figma', 'Design Tokens', 'Tailwind', 'Motion UI', 'Radix UI'],
    icon: 'Palette'
  },
  {
    id: 'consulting',
    title: 'Technical Consulting & System Architecture',
    category: 'Strategy',
    description: 'Expert guidance on tech stack selection, monolithic-to-microservice migration, database optimization, and high-stakes system design.',
    highlights: ['Architecture reviews & audits', 'Database indexing & query tuning', 'Security posture evaluation', 'Roadmap & cost optimization planning'],
    technologies: ['PostgreSQL', 'Redis', 'GraphQL', 'gRPC', 'Distributed Systems'],
    icon: 'ShieldCheck'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Architecting Scalable AI Microservices with Sub-20ms Latency',
    slug: 'scalable-ai-microservices',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    date: 'August 14, 2026',
    author: 'Hitesh Kumar',
    excerpt: 'How we engineered asynchronous streaming pipelines to deliver blazing fast LLM inference for enterprise customer interactions.',
    content: `When integrating generative AI into consumer applications, raw latency is the single biggest threat to user retention. In this technical deep dive, we examine our production architecture at Furious Fly.

Key Principles Explored:
1. Edge Routing & Smart Caching: Leveraging edge proxying to serve deterministic responses instantly.
2. Chunked Token Streaming: Eliminating time-to-first-token delay via HTTP SSE (Server-Sent Events) protocols.
3. Fallback Graceful Degradation: Using multi-model tiering to guarantee 99.99% availability even during upstream API outages.

Conclusion: By structuring AI microservices with lightweight runtime layers, modern organizations can build conversational and analytical tools that feel completely instant.`
  },
  {
    id: '2',
    title: 'Why Modern Web Apps are Ditching Heavy Monoliths for Continuous Architectures',
    slug: 'continuous-architectures-vs-monoliths',
    category: 'Web Engineering',
    readTime: '5 min read',
    date: 'August 02, 2026',
    author: 'Furious Fly Engineering',
    excerpt: 'A pragmatic guide to breaking down monolithic systems into lean, independent modules that ship faster with zero downtime.',
    content: `For decades, developers were forced to choose between the unwieldy complexity of bloated microservices and the fragile bottlenecks of a single codebase.

In 2026, modern continuous architectures bridge this divide by using modular serverless runtimes combined with unified typed contracts (TypeScript/tRPC/gRPC).

Our benchmarks show a 70% decrease in deployment time and a 4x reduction in cloud hosting bills.`
  },
  {
    id: '3',
    title: 'The Design Philosophy Behind Furious Fly: Aerodynamic Simplicity',
    slug: 'design-philosophy-aerodynamic-simplicity',
    category: 'Product Design',
    readTime: '4 min read',
    date: 'July 28, 2026',
    author: 'Hitesh Kumar',
    excerpt: 'Why every pixel, margin, and typography scale in our brand represents frictionless speed and uninterrupted execution.',
    content: `The name Furious Fly is rooted in the belief that software should be as lightweight, focused, and aerodynamic as a bird in flight.

We reject cluttered bloated interfaces and 'AI Slop' in favor of high-contrast typography, mathematical spacing, and zero unnecessary visual noise. Every element must earn its place on the screen.`
  }
];

export const FAQS = [
  {
    q: 'What types of projects does Furious Fly take on?',
    a: 'We specialize in custom web applications, enterprise AI/LLM systems, cross-platform mobile apps, cloud infrastructure setup, and full-stack technical consulting.'
  },
  {
    q: 'How fast can Furious Fly deliver a project?',
    a: 'For focused web applications and MVPs, our rapid deployment sprints take 1–3 weeks. Larger enterprise architectures and custom AI pipelines typically span 4–8 weeks.'
  },
  {
    q: 'Who is the founder of Furious Fly?',
    a: 'Furious Fly was founded by Hitesh Kumar, a visionary technologist and engineer dedicated to delivering high-performance digital systems and AI solutions.'
  },
  {
    q: 'Can Furious Fly work with our existing codebase?',
    a: 'Yes! We frequently conduct code audits, performance optimizations, migrations to modern TypeScript/Cloud stacks, and custom AI feature integrations into existing platforms.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Furious Fly completely revamped our web platform. Our Lighthouse performance score went from 48 to 99, and our conversion rate jumped by 42% in the first month.',
    author: 'Rajiv Sharma',
    role: 'CTO, OmniTech Solutions',
    rating: 5
  },
  {
    quote: 'The AI automation pipeline engineered by Hitesh and his team reduced our customer response latency from 15 minutes to under 2 seconds. Truly outstanding craftsmanship.',
    author: 'Elena Rostova',
    role: 'Head of Product, Apex Mobility',
    rating: 5
  },
  {
    quote: 'Furious Fly lives up to its name: ultra-fast delivery, immaculate code quality, and zero fluff. They are our go-to technology partner.',
    author: 'Amitabh Sen',
    role: 'Founder, CloudPulse Media',
    rating: 5
  }
];
