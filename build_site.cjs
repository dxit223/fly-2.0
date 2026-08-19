const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'new_html');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const template = (title, activeNav, content) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Permanent+Marker&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #ffffff; color: #111111; overflow-x: hidden; }
        .marker { font-family: 'Permanent Marker', cursive; }
        
        /* Watermark Background */
        .watermark-bg {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150vw;
            height: 150vh;
            background-image: url('logo2.png'); /* Using logo2.png as the watermark if available */
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            opacity: 0.05; 
            pointer-events: none;
            z-index: 0;
            mix-blend-mode: multiply;
        }

        .slide-up {
            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(30px);
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        
        @keyframes slideUp {
            to { opacity: 1; transform: translateY(0); }
        }
        
        .clean-card {
            background: rgba(249, 249, 251, 0.8);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(234, 234, 234, 0.8);
            border-radius: 1.5rem;
            transition: all 0.3s ease;
        }
        .clean-card:hover {
            border-color: #d0d0d0;
            transform: translateY(-4px);
            box-shadow: 0 12px 24px -10px rgba(0,0,0,0.05);
        }
        
        .nav-link { position: relative; }
        .nav-link::after {
            content: ''; position: absolute; width: 0; height: 3px;
            bottom: -6px; left: 0; background-color: currentColor;
            transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        
        .accent-blue { color: #007AFF; }
        .accent-red { color: #FF3B30; }
        .accent-orange { color: #FF9500; }
        .accent-purple { color: #AF52DE; }
        .accent-green { color: #34C759; }
        
        .nav-glass {
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid #eaeaea;
        }

        #mobile-menu {
            transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
        }
        #mobile-menu.open {
            max-height: 400px;
            opacity: 1;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-black selection:text-white relative">
    
    <div class="watermark-bg"></div>

    <nav class="fixed top-0 w-full z-50 nav-glass">
        <div class="max-w-7xl mx-auto px-4 md:px-6 h-28 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-4 group">
                <!-- Much larger logo as requested -->
                <div class="h-20 w-20 md:h-24 md:w-24 flex items-center justify-center overflow-hidden mix-blend-multiply origin-left shrink-0">
                    <!-- The user says logo.jpg or logo.png, we'll try logo.jpg and logo.png but since we don't know the exact extension, let's use the object tag with fallback -->
                    <object data="logo.jpg" type="image/jpeg" class="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform">
                        <img src="logo.png" alt="Furious Fly Logo" class="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform">
                    </object>
                </div>
                <span class="marker text-3xl md:text-5xl tracking-wide text-black mt-2">Furious Fly</span>
            </a>
            
            <div class="hidden md:flex items-center gap-8 text-xl marker text-gray-500 mt-2">
                <a href="index.html" class="nav-link hover:text-black transition-colors ${activeNav === 'core' ? 'active text-black' : ''}">Core</a>
                <a href="modules.html" class="nav-link hover:text-black transition-colors ${activeNav === 'modules' ? 'active text-black' : ''}">Modules</a>
                <a href="directives.html" class="nav-link hover:text-black transition-colors ${activeNav === 'directives' ? 'active text-black' : ''}">Directives</a>
                <a href="synapse.html" class="nav-link hover:text-black transition-colors ${activeNav === 'synapse' ? 'active text-black' : ''}">Synapse</a>
                <a href="telemetry.html" class="nav-link hover:text-black transition-colors ${activeNav === 'telemetry' ? 'active text-black' : ''}">Telemetry</a>
            </div>

            <!-- Very prominent hamburger menu as requested -->
            <button id="menu-btn" class="md:hidden flex flex-col justify-center items-center gap-2 p-3 mt-2 focus:outline-none relative z-50 bg-gray-100 rounded-lg border border-gray-300">
                <div class="w-8 h-1 bg-black rounded transition-all origin-left" id="bar1"></div>
                <div class="w-8 h-1 bg-black rounded transition-all" id="bar2"></div>
                <div class="w-8 h-1 bg-black rounded transition-all origin-left" id="bar3"></div>
            </button>
        </div>

        <div id="mobile-menu" class="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 flex flex-col items-center gap-6 py-8 marker text-3xl text-gray-500 shadow-xl absolute w-full top-28 left-0 z-40">
            <a href="index.html" class="hover:text-black ${activeNav === 'core' ? 'text-black' : ''}">Core</a>
            <a href="modules.html" class="hover:text-black ${activeNav === 'modules' ? 'text-black' : ''}">Modules</a>
            <a href="directives.html" class="hover:text-black ${activeNav === 'directives' ? 'text-black' : ''}">Directives</a>
            <a href="synapse.html" class="hover:text-black ${activeNav === 'synapse' ? 'text-black' : ''}">Synapse</a>
            <a href="telemetry.html" class="hover:text-black ${activeNav === 'telemetry' ? 'text-black' : ''}">Telemetry</a>
        </div>
    </nav>

    <main class="flex-1 pt-40 pb-20 px-6 max-w-7xl mx-auto w-full relative z-10">
        ${content}
    </main>

    <footer class="mt-auto border-t border-gray-100 bg-gray-50/80 backdrop-blur-md py-12 relative z-10">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <span class="marker text-gray-400 text-2xl tracking-wide mb-4 md:mb-0">Furious Fly © 2026</span>
            <div class="flex items-center gap-6 marker text-gray-400 text-lg">
                <span class="flex items-center gap-2">STATUS: <span class="accent-green">NOMINAL</span></span>
                <span class="flex items-center gap-2">NET: <span class="accent-blue">SECURE</span></span>
            </div>
        </div>
    </footer>

    <script>
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');
        const b1 = document.getElementById('bar1');
        const b2 = document.getElementById('bar2');
        const b3 = document.getElementById('bar3');
        let open = false;

        btn.addEventListener('click', () => {
            open = !open;
            if (open) {
                menu.classList.add('open');
                b1.style.transform = 'rotate(45deg) translate(3px, -3px)';
                b2.style.opacity = '0';
                b3.style.transform = 'rotate(-45deg) translate(2px, 4px)';
            } else {
                menu.classList.remove('open');
                b1.style.transform = 'rotate(0)';
                b2.style.opacity = '1';
                b3.style.transform = 'rotate(0)';
            }
        });
    </script>
</body>
</html>`;

const indexContent = `
<div class="flex flex-col items-center justify-center text-center py-20 min-h-[60vh] slide-up">
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 marker tracking-widest mb-8 border border-blue-100 text-lg">
        <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        System Initialized
    </div>
    
    <h1 class="marker text-6xl md:text-8xl tracking-wide mb-8 text-black leading-tight max-w-5xl mx-auto">
        The Next Evolution of <br>
        <span class="accent-blue">Cybernetic Autonomy.</span>
    </h1>
    
    <p class="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 slide-up delay-1 marker">
        Furious Fly represents a paradigm shift in decentralized network topology. We merge hyper-responsive UI frameworks with deeply entrenched zero-knowledge protocols. No fluff, just pure speed.
    </p>
    
    <div class="flex flex-wrap items-center justify-center gap-6 slide-up delay-2 marker text-2xl">
        <a href="modules.html" class="px-10 py-5 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors shadow-lg">
            Deploy Modules
        </a>
        <a href="directives.html" class="px-10 py-5 bg-gray-100 text-black rounded-2xl hover:bg-gray-200 transition-colors shadow-sm">
            Directives
        </a>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 slide-up delay-3">
    <div class="clean-card p-10">
        <h3 class="marker text-4xl mb-6 accent-red">Hyper-Kinetic</h3>
        <p class="text-gray-700 leading-relaxed text-lg marker">
            Our interface layer processes interactions at blazing speeds. Utilizing predictive pre-fetching, the visual state resolves before human perception registers the delay.
        </p>
    </div>
    <div class="clean-card p-10">
        <h3 class="marker text-4xl mb-6 accent-purple">Crypto Shell</h3>
        <p class="text-gray-700 leading-relaxed text-lg marker">
            Beneath the clean aesthetics lies a hardened cryptographic shell. Operations utilize symmetrical locking with dynamic key rotation.
        </p>
    </div>
    <div class="clean-card p-10">
        <h3 class="marker text-4xl mb-6 accent-orange">Fluid Synthesis</h3>
        <p class="text-gray-700 leading-relaxed text-lg marker">
            The platform continuously adapts. Agents learn from interaction frequency and dynamically restructure UI elements.
        </p>
    </div>
</div>
`;

const modulesContent = `
<div class="mb-20 text-center max-w-4xl mx-auto slide-up">
    <h1 class="marker text-6xl md:text-8xl mb-8 text-black">
        Operative <span class="accent-green">Modules.</span>
    </h1>
    <p class="text-2xl text-gray-600 leading-relaxed marker">
        The hardware and software frameworks powering the ecosystem. Built on robust microservice architecture for unparalleled resilience.
    </p>
</div>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 slide-up delay-1">
    <div class="clean-card p-12 flex flex-col">
        <div class="flex justify-between items-start mb-8">
            <span class="marker px-6 py-2 bg-green-50 text-green-600 rounded-xl text-2xl border border-green-100">MOD 01</span>
        </div>
        <h2 class="marker text-5xl mb-6">Sentient Broker</h2>
        <p class="text-gray-700 mb-10 leading-relaxed flex-1 text-xl marker">
            Our flagship autonomous broker operates entirely in isolated sandboxes. It interprets complex user requests and returns synthesized data without exposing the client.
        </p>
        <div class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 flex flex-col sm:flex-row gap-4 marker text-xl shadow-inner">
            <button class="flex-1 bg-gray-100 py-4 rounded-xl hover:bg-gray-200 transition-colors">Schematics</button>
            <button class="flex-1 bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg">Initialize</button>
        </div>
    </div>

    <div class="clean-card p-12 flex flex-col">
        <div class="flex justify-between items-start mb-8">
            <span class="marker px-6 py-2 bg-blue-50 text-blue-600 rounded-xl text-2xl border border-blue-100">MOD 02</span>
        </div>
        <h2 class="marker text-5xl mb-6">Void Messenger</h2>
        <p class="text-gray-700 mb-10 leading-relaxed flex-1 text-xl marker">
            A peer-to-peer transmission grid that actively shreds message fragments across thousands of relay nodes using quantum-resistant lattice cryptography.
        </p>
        <div class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 flex gap-4 marker text-xl shadow-inner">
            <button class="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg">Access Tunnel</button>
        </div>
    </div>
</div>
`;

const directivesContent = `
<div class="text-center mb-20 slide-up">
    <span class="inline-block py-3 px-8 rounded-full bg-red-50 text-red-600 border border-red-100 marker tracking-widest mb-8 text-2xl">Manifesto v2.0</span>
    <h1 class="marker text-6xl md:text-8xl mb-10 text-black leading-tight">
        Primary <span class="accent-red">Directives.</span>
    </h1>
    <p class="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed marker">
        We are architecting a digital landscape where autonomy is the default state.
    </p>
</div>

<div class="clean-card p-12 md:p-24 text-center max-w-5xl mx-auto slide-up delay-1 relative overflow-hidden shadow-sm">
    <h2 class="marker text-5xl mb-10 accent-red">Why "Furious Fly"?</h2>
    <p class="text-xl md:text-2xl text-gray-700 leading-relaxed marker">
        A fly represents the ultimate biological edge-device: incredibly lightweight, capable of multi-dimensional vector maneuvers, and possessing near-instantaneous threat-response latency. It does not confront obstacles with brute force; it outmaneuvers them with unparalleled agility. 
        <br><br>
        We deploy "furious" velocity to iterate and encrypt, weaving through the massive, sluggish data-trawling nets of modern tech monopolies. Our platforms are designed to be elusive to trackers, fiercely protective of user sovereignty, and blindingly fast.
    </p>
</div>
`;

const synapseContent = `
<div class="mb-16 slide-up">
    <h1 class="marker text-6xl md:text-8xl mb-6 text-black">
        Neural <span class="accent-purple">Synapse.</span>
    </h1>
    <p class="text-2xl text-gray-600 max-w-3xl marker">
        The decentralized interaction environment. Test the client-side rendering and cryptographic envelope packaging.
    </p>
</div>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 slide-up delay-1">
    <div class="lg:col-span-4 space-y-8">
        <div class="clean-card p-10">
            <h3 class="marker text-3xl mb-8 border-b border-gray-200 pb-4">Identity Config</h3>
            <div class="space-y-8">
                <div>
                    <label class="marker text-gray-500 block mb-3 text-xl">Network Handle</label>
                    <input type="text" value="Agent_Flyer_99" readonly class="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black focus:outline-none marker text-xl shadow-inner">
                </div>
                <div class="bg-purple-50 p-6 rounded-xl border border-purple-100 shadow-inner">
                    <p class="text-purple-800 text-lg marker leading-relaxed">Client-side isolation active. Input data is held in local volatile memory.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="lg:col-span-8">
        <div class="clean-card p-10 md:p-14 h-full">
            <div class="flex items-center gap-8 mb-12 pb-10 border-b border-gray-200">
                <div class="h-24 w-24 rounded-full border-2 border-gray-200 overflow-hidden mix-blend-multiply flex-shrink-0 bg-white">
                    <object data="logo.jpg" type="image/jpeg" class="w-full h-full object-contain p-2">
                        <img src="logo.png" class="w-full h-full object-contain p-2">
                    </object>
                </div>
                <div>
                    <h3 class="marker text-4xl text-black flex items-center gap-4 flex-wrap">
                        Agent_Flyer_99
                        <span class="bg-black text-white text-lg px-4 py-1.5 rounded-full marker tracking-widest shadow-md">VERIFIED</span>
                    </h3>
                    <p class="text-gray-500 mt-3 marker text-xl">Connecting to swarm protocol...</p>
                </div>
            </div>

            <div class="space-y-8">
                <div class="clean-card p-8 border-gray-200 bg-white shadow-sm">
                    <div class="flex justify-between items-start mb-6">
                        <div class="marker text-2xl">System Architect <span class="text-gray-400 text-lg ml-2">@sys_admin</span></div>
                        <span class="text-gray-400 text-lg marker">12m ago</span>
                    </div>
                    <p class="text-gray-700 leading-relaxed marker text-xl">
                        Deploying new interaction schemas. DOM repaints are batched to maintain 60fps, even while background workers negotiate lattice encryption. The swarm responds beautifully.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const telemetryContent = `
<div class="mb-20 border-b border-gray-200 pb-12 slide-up">
    <h1 class="marker text-6xl md:text-8xl mb-6 text-black">
        Data <span class="accent-orange">Telemetry.</span>
    </h1>
    <p class="text-2xl text-gray-600 marker">
        Public system logs, architectural update streams, and dispatches.
    </p>
</div>

<div class="space-y-10 slide-up delay-1">
    <article class="clean-card p-12 bg-white/80">
        <div class="flex flex-wrap items-center justify-between mb-8 gap-4">
            <span class="marker text-orange-600 bg-orange-50 border border-orange-100 px-6 py-2 rounded-xl text-xl shadow-sm">Architecture Update</span>
            <span class="text-gray-400 marker text-xl">OCT 12, 2026</span>
        </div>
        <h2 class="marker text-5xl mb-6">Zero-Knowledge Core</h2>
        <p class="text-gray-700 leading-relaxed text-2xl mb-8 marker">
            We have successfully migrated the primary database cluster to our proprietary zero-knowledge framework. Packets are stripped of metadata at the ingress layer. Node processing time reduced by 14%.
        </p>
        <button class="marker text-orange-600 text-2xl hover:text-orange-700 transition-colors inline-flex items-center gap-2">Access Schematic <span>&rarr;</span></button>
    </article>

    <article class="clean-card p-12 bg-white/80">
        <div class="flex flex-wrap items-center justify-between mb-8 gap-4">
            <span class="marker text-blue-600 bg-blue-50 border border-blue-100 px-6 py-2 rounded-xl text-xl shadow-sm">System Dispatch</span>
            <span class="text-gray-400 marker text-xl">SEP 28, 2026</span>
        </div>
        <h2 class="marker text-5xl mb-6">Alpha Phase Init</h2>
        <p class="text-gray-700 leading-relaxed text-2xl mb-8 marker">
            The alpha ring is now open to verified cryptographic keyholders. We are observing stable handshakes across decentralized edge nodes processing 10,000 messages per second.
        </p>
        <button class="marker text-blue-600 text-2xl hover:text-blue-700 transition-colors inline-flex items-center gap-2">Access Schematic <span>&rarr;</span></button>
    </article>
</div>
`;

fs.writeFileSync(path.join(dir, 'index.html'), template('Furious Fly - Core', 'core', indexContent));
fs.writeFileSync(path.join(dir, 'modules.html'), template('Furious Fly - Modules', 'modules', modulesContent));
fs.writeFileSync(path.join(dir, 'directives.html'), template('Furious Fly - Directives', 'directives', directivesContent));
fs.writeFileSync(path.join(dir, 'synapse.html'), template('Furious Fly - Synapse', 'synapse', synapseContent));
fs.writeFileSync(path.join(dir, 'telemetry.html'), template('Furious Fly - Telemetry', 'telemetry', telemetryContent));

console.log("Pages generated successfully.");
