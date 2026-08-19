/**
 * Furious Fly - Core Client JavaScript Framework
 * Handles animations, state persistence, dynamic blog filtering, contact inquiries, and local CMS sync.
 * Created by Hitesh Kumar
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initRevealOnScroll();
  initContactForm();
  initLocalStorageCMS();
  initDynamicBlog();
  initDynamicServices();
  initNewsletter();
  initLinkClickTracker();
});

/* ==========================================================================
   1. Sticky Header Navigation
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-md', 'backdrop-blur-md');
      header.classList.remove('border-transparent');
    } else {
      header.classList.remove('shadow-md', 'backdrop-blur-md');
      header.classList.add('border-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initially
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!menuBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    overlay.classList.add('block');
    document.body.classList.add('overflow-hidden');
  };

  const closeDrawer = () => {
    drawer.classList.add('translate-x-full');
    overlay.classList.remove('block');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Esc key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
}

/* ==========================================================================
   3. Scroll Reveal Animations (High-End Interaction)
   ========================================================================== */
function initRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once revealed, no need to keep observing this element
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. Local Storage CMS & Mock Data Initializer
   ========================================================================== */
const DEFAULT_SERVICES = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Architecting responsive, lightning-fast web systems optimized for conversion and search performance. We construct secure enterprise applications using custom-designed codebases.",
    features: ["Custom Code Architectures", "Speed & Core Web Vitals Optimization", "E-Commerce Engines", "Tailored Database Integrations"],
    icon: "layers"
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Integrating modern machine learning and language models directly into your business processes. Create intelligent chatbots, workflow automation, and predictive data analyzers.",
    features: ["Cognitive Task Automation", "Custom LLM Integrations", "Natural Language Analytics", "Enterprise Data Cleansing & Training"],
    icon: "cpu"
  },
  {
    id: "tech-consulting",
    title: "Technical Consulting",
    description: "Professional architecture guidance, performance optimization audits, and modern technology transformation roadmaps mapped to scalable business expansions.",
    features: ["Infrastructure Design & Cloud Audits", "Systems Scalability Reviews", "Database Optimization", "Security & Pen-testing Audits"],
    icon: "shield-check"
  },
  {
    id: "custom-digital",
    title: "Custom Digital Projects",
    description: "From concept blueprint to server deployment, we architect high-performance, robust software tailored precisely to complex operational requirements.",
    features: ["Proprietary Cloud Integrations", "API Architectures", "High-Throughput Node Ecosystems", "Hardware/Software Integrations"],
    icon: "code"
  }
];

const DEFAULT_BLOGS = [
  {
    id: 1,
    title: "Migrating to High-Performance Static Architectures: A Blueprint",
    category: "Development",
    date: "July 08, 2026",
    excerpt: "Discover why modern high-growth technology startups are abandoning monolithic servers in favor of blazing fast, secure, edge-rendered Jamstack frameworks.",
    author: "Hitesh Kumar",
    readTime: "6 min read",
    content: "Migrating from traditional monolithic setups (like traditional servers) to high-performance decoupled systems is a fundamental shift in architecture. This article details our direct pipeline blueprint for moving enterprise databases to dynamic serverless architectures. By decoupling client interfaces and serving assets through global Edge Networks, you achieve not only sub-100ms Load speeds but drastically simplify server-side vulnerabilities."
  },
  {
    id: 2,
    title: "Integrating Large Language Models securely inside Enterprise Ecosystems",
    category: "AI",
    date: "June 24, 2026",
    excerpt: "A guide on utilizing private AI vector embeddings and custom-tuned generative models without leaking sensitive client datasets.",
    author: "Furious Fly AI Team",
    readTime: "8 min read",
    content: "Enterprise organizations look at artificial intelligence integrations with a dual sense of excitement and security dread. The primary challenge lies in preserving intellectual property and customer privacy while reaping LLM efficiency rewards. Our architected sandbox solution uses secure local middleware gateways, isolated routing, and localized vector matching to feed model prompts securely, keeping your core business intelligence within secure boundaries."
  },
  {
    id: 3,
    title: "The Architecture of Scalable APIs: Best Practices for 2026",
    category: "Consulting",
    date: "May 15, 2026",
    excerpt: "How to build resilient microservices using rate limiters, token-bucket filters, and real-time stateful load balancing.",
    author: "Hitesh Kumar",
    readTime: "5 min read",
    content: "An API is only as good as its worst traffic surge. Building scalable, resilient data pipelines requires deep structural adherence to rate-limiting models, request queue filtering, and proactive auto-scaling clusters. We'll explore our standard template configuration for high-performance Node servers running on containerized environments."
  },
  {
    id: 4,
    title: "Harnessing Agentic Workflows: Beyond Simple Conversational AI",
    category: "AI",
    date: "July 01, 2026",
    excerpt: "Move past basic chat triggers. Explore how multi-agent consensus, recursive self-correction loops, and tool-use capabilities are automating entire software development lifecycles.",
    author: "Furious Fly AI Team",
    readTime: "7 min read",
    content: "The transition from simple conversational models to agentic workflows is the defining shift of 2026. Rather than responding to static single-turn prompts, modern autonomous agents employ planning algorithms, memory reflection, and external tools to accomplish complex goals.\n\nAt Furious Fly, we have implemented multi-agent orchestration frameworks where specialized sub-agents collaborate to design, code, and audit systems. This article details our learnings on building reflection loops, limiting token consumption, and implementing safe sandbox code execution environments."
  },
  {
    id: 5,
    title: "WebGPU & Wasm: Running Heavy AI Models Directly in the Browser",
    category: "Development",
    date: "June 18, 2026",
    excerpt: "With WebGPU reaching mature standards, complex vector models and language decoders can now run locally on client devices with zero cloud hosting overhead.",
    author: "Hitesh Kumar",
    readTime: "9 min read",
    content: "Running machine learning models historically required expensive, centralized GPU servers. In 2026, WebGPU paired with WebAssembly (Wasm) is changing the equation by giving web applications direct, high-performance access to local hardware acceleration.\n\nIn this deep-dive, we analyze how model quantization (e.g., 4-bit and 3-bit weights) allows modern small language models (SLMs) to execute fluidly in standard client browser tabs. This zero-latency, private, and serverless approach is opening up massive design avenues for interactive web software."
  },
  {
    id: 6,
    title: "Preparing for the Post-Quantum Cryptography (PQC) Transition",
    category: "Security",
    date: "May 30, 2026",
    excerpt: "NIST has finalized post-quantum encryption standards. Here is how enterprise organizations must update their transport layer security and database schemas.",
    author: "Furious Fly SecTeam",
    readTime: "8 min read",
    content: "While large-scale quantum computers are still evolving, the security threat they represent is immediate due to 'harvest now, decrypt later' strategies. Quantum-safe security is no longer a research topic—it is an active deployment mandate.\n\nThis technical blueprint covers the migration from standard RSA/ECC algorithms to NIST's approved primary post-quantum algorithms: ML-KEM for key establishment and ML-DSA for digital signatures. We outline how to transition your application's HTTPS layers and API gateways to hybrid cryptographic setups."
  }
];

function initLocalStorageCMS() {
  if (!localStorage.getItem('furiousfly_services')) {
    localStorage.setItem('furiousfly_services', JSON.stringify(DEFAULT_SERVICES));
  }
  
  const existingBlogs = localStorage.getItem('furiousfly_blogs');
  if (!existingBlogs) {
    localStorage.setItem('furiousfly_blogs', JSON.stringify(DEFAULT_BLOGS));
  } else {
    try {
      const blogs = JSON.parse(existingBlogs);
      let updated = false;
      DEFAULT_BLOGS.forEach(db => {
        if (!blogs.some(b => b.title === db.title || b.id === db.id)) {
          blogs.push(db);
          updated = true;
        }
      });
      if (updated) {
        localStorage.setItem('furiousfly_blogs', JSON.stringify(blogs));
      }
    } catch (e) {
      localStorage.setItem('furiousfly_blogs', JSON.stringify(DEFAULT_BLOGS));
    }
  }

  if (!localStorage.getItem('furiousfly_messages')) {
    localStorage.setItem('furiousfly_messages', JSON.stringify([]));
  }
  if (!localStorage.getItem('furiousfly_settings')) {
    localStorage.setItem('furiousfly_settings', JSON.stringify({
      companyName: "Furious Fly",
      tagline: "Fly Beyond Limits",
      domain: "furiousfly.in",
      email: "info@furiousfly.in",
      phone: "+91 9876543210",
      address: "New Delhi, India",
      founder: "Hitesh Kumar"
    }));
  }
}

/* ==========================================================================
   5. Dynamic Blog Rendering and Category Filters
   ========================================================================== */
function initDynamicBlog() {
  const container = document.getElementById('blog-posts-grid');
  if (!container) return;

  const searchInput = document.getElementById('blog-search');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogs = JSON.parse(localStorage.getItem('furiousfly_blogs') || '[]');

  let currentCategory = 'all';
  let searchQuery = '';

  const renderBlogs = () => {
    container.innerHTML = '';
    
    const filtered = blogs.filter(post => {
      const matchCategory = currentCategory === 'all' || post.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <svg class="mx-auto h-12 w-12 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-lg font-semibold text-slate-800">No Articles Found</h3>
          <p class="text-sm mt-1">Try refining your keyword search or switching categories.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((post, index) => {
      const card = document.createElement('article');
      card.className = 'premium-card overflow-hidden flex flex-col h-full bg-white relative reveal active';
      card.innerHTML = `
        <div class="p-8 flex-1 flex flex-col">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">${post.category}</span>
            <span class="text-xs text-slate-400">${post.date}</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            <a href="#" class="blog-title-link" data-id="${post.id}">${post.title}</a>
          </h3>
          <p class="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-3">${post.excerpt}</p>
          <div class="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">${post.author[0]}</div>
              <span class="text-xs font-medium text-slate-700">${post.author}</span>
            </div>
            <span class="text-xs text-slate-400 font-medium">${post.readTime}</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Add overlay reading click listeners
    document.querySelectorAll('.blog-title-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(e.target.getAttribute('data-id'));
        openBlogDetail(id);
      });
    });
  };

  // Add filters listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
      filterBtns.forEach(b => b.classList.add('bg-slate-50', 'text-slate-600', 'hover:bg-slate-100'));
      btn.classList.remove('bg-slate-50', 'text-slate-600', 'hover:bg-slate-100');
      btn.classList.add('bg-blue-600', 'text-white');
      
      currentCategory = btn.getAttribute('data-category');
      renderBlogs();
    });
  });

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderBlogs();
    });
  }

  // Initial render
  renderBlogs();
}

function openBlogDetail(id) {
  const blogs = JSON.parse(localStorage.getItem('furiousfly_blogs') || '[]');
  const post = blogs.find(b => b.id === id);
  if (!post) return;

  // Create full viewport detailed modal
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden border border-slate-100 relative animate-fade-in my-8 max-h-[90vh] flex flex-col">
      <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">${post.category}</span>
          <span class="text-xs text-slate-400">${post.date}</span>
        </div>
        <button id="close-blog-modal" class="text-slate-400 hover:text-slate-700 p-1.5 hover:bg-slate-200 rounded-lg">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="p-8 overflow-y-auto space-y-6 flex-1">
        <h2 class="text-3xl font-bold text-slate-900">${post.title}</h2>
        <div class="flex items-center gap-4 text-sm text-slate-500 py-3 border-y border-slate-100">
          <span class="font-medium text-slate-700">By ${post.author}</span>
          <span>•</span>
          <span>${post.readTime}</span>
        </div>
        <p class="text-slate-800 leading-relaxed text-lg font-medium bg-slate-50 p-4 border-l-4 border-blue-600 rounded-r-xl">${post.excerpt}</p>
        <div class="text-slate-700 leading-relaxed space-y-4 text-base whitespace-pre-line">
          ${post.content}
        </div>
      </div>
      <div class="p-6 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
        <button id="close-blog-modal-bottom" class="px-5 py-2.5 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-900 transition-colors">Close Reader</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add('overflow-hidden');

  const closeModal = () => {
    modal.remove();
    document.body.classList.remove('overflow-hidden');
  };

  document.getElementById('close-blog-modal').addEventListener('click', closeModal);
  document.getElementById('close-blog-modal-bottom').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ==========================================================================
   6. Dynamic Services Rendering
   ========================================================================== */
function initDynamicServices() {
  const container = document.getElementById('services-grid-dynamic');
  if (!container) return;

  const services = JSON.parse(localStorage.getItem('furiousfly_services') || '[]');

  container.innerHTML = '';
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'premium-card p-8 md:p-10 bg-white relative reveal active';
    
    // Choose icon based on category type
    let iconSvg = '';
    if (service.icon === 'layers' || service.id.includes('web')) {
      iconSvg = `<svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`;
    } else if (service.icon === 'cpu' || service.id.includes('ai')) {
      iconSvg = `<svg class="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`;
    } else if (service.icon === 'shield-check' || service.id.includes('consult')) {
      iconSvg = `<svg class="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`;
    } else {
      iconSvg = `<svg class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`;
    }

    let featuresList = '';
    if (service.features && Array.isArray(service.features)) {
      featuresList = service.features.map(f => `
        <li class="flex items-center gap-2.5 text-sm text-slate-600">
          <svg class="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          ${f}
        </li>
      `).join('');
    }

    card.innerHTML = `
      <div class="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
        ${iconSvg}
      </div>
      <h3 class="text-2xl font-bold text-slate-900 mb-3">${service.title}</h3>
      <p class="text-slate-600 mb-6 text-sm leading-relaxed">${service.description}</p>
      <ul class="space-y-3 mb-8">
        ${featuresList}
      </ul>
      <a href="contact.html?service=${encodeURIComponent(service.title)}" class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
        Inquire about ${service.title} 
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   7. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Pre-fill service field if query param exists
  const urlParams = new URLSearchParams(window.location.search);
  const selectedService = urlParams.get('service');
  const serviceDropdown = document.getElementById('form-service');
  if (selectedService && serviceDropdown) {
    serviceDropdown.value = selectedService;
  }

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const service = document.getElementById('form-service').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending Inquire...
      `;
    }

    // Save submission to LocalStorage for future Admin view
    const savedMessages = JSON.parse(localStorage.getItem('furiousfly_messages') || '[]');
    const newMessage = {
      id: Date.now(),
      name,
      email,
      phone,
      service,
      message,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    savedMessages.push(newMessage);
    localStorage.setItem('furiousfly_messages', JSON.stringify(savedMessages));

    // Simulated network latency
    setTimeout(() => {
      // Show elegant custom success overlay
      showCustomSuccessModal(name, email);

      // Reset form & button
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Inquiry';
      }
    }, 1200);
  });
}

function showCustomSuccessModal(name, email) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-slate-100 relative animate-fade-in">
      <div class="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
        <svg class="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-slate-900 mb-3">Inquiry Received Successfully</h3>
      <p class="text-slate-600 text-sm leading-relaxed mb-6">
        Thank you, <strong>${name}</strong>. Hitesh Kumar and the Furious Fly digital team have received your request. We have dispatched a confirmation receipt to <strong>${email}</strong> and will reach out to you within 12 business hours.
      </p>
      <button id="close-success-btn" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">Back to Website</button>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => {
    modal.remove();
  };

  document.getElementById('close-success-btn').addEventListener('click', closeModal);
}

/* ==========================================================================
   8. Simple Newsletter Trigger
   ========================================================================== */
function initNewsletter() {
  const newsletters = document.querySelectorAll('.newsletter-form');
  newsletters.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value.trim()) return;

      const email = input.value.trim();
      alert(`Thank you! ${email} has been subscribed to Furious Fly architectural update streams.`);
      form.reset();
    });
  });
}

/* ==========================================================================
   9. Global Link & Button Click Tracker ("Links Click in Backend")
   ========================================================================== */
function initLinkClickTracker() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    // Skip close/toggle modal elements or dashboard-internal clicks if loaded there
    if (window.location.pathname.includes('/admin/')) return;

    let text = target.innerText.trim() || target.getAttribute('aria-label') || target.getAttribute('title') || '';
    if (!text && target.querySelector('svg')) {
      text = "Icon Button";
    }
    if (!text) text = "Generic Element";
    if (text.length > 50) text = text.substring(0, 50) + "...";

    const href = target.getAttribute('href') || '#';
    const pageTitle = document.title.split(' - ')[0] || 'Home';

    const clicks = JSON.parse(localStorage.getItem('furiousfly_clicks') || '[]');
    clicks.push({
      id: Date.now(),
      page: pageTitle,
      element: text,
      href: href,
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    });

    // Cap at last 200 click events to maintain local storage efficiency
    if (clicks.length > 200) clicks.shift();
    localStorage.setItem('furiousfly_clicks', JSON.stringify(clicks));
  });
}
