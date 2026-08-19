import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Apple, Search, ShoppingBag, ChevronRight, PlayCircle, Battery, Cpu, Wifi } from "lucide-react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero section animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  // Second section animations
  const section2Opacity = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
  const section2Scale = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0.95, 1, 0.95]);

  return (
    <div className="bg-black text-[#f5f5f7] min-h-screen font-sans selection:bg-white selection:text-black" ref={containerRef}>
      {/* Global Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-12">
        <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between text-xs tracking-wide text-neutral-300 font-light">
          <a href="#" className="hover:text-white transition-colors">
            <Apple className="w-4 h-4" />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-white transition-colors">Store</a>
            <a href="#" className="hover:text-white transition-colors">Mac</a>
            <a href="#" className="hover:text-white transition-colors">iPad</a>
            <a href="#" className="hover:text-white transition-colors">iPhone</a>
            <a href="#" className="hover:text-white transition-colors">Watch</a>
            <a href="#" className="hover:text-white transition-colors">Vision</a>
            <a href="#" className="hover:text-white transition-colors">AirPods</a>
            <a href="#" className="hover:text-white transition-colors">TV & Home</a>
            <a href="#" className="hover:text-white transition-colors">Entertainment</a>
            <a href="#" className="hover:text-white transition-colors">Accessories</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Search className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><ShoppingBag className="w-4 h-4" /></a>
          </div>
        </div>
      </nav>

      {/* Spacer for nav */}
      <div className="h-12"></div>

      <div className="relative h-[300vh]">
        {/* Sticky Container for Scroll Animations */}
        <div className="sticky top-12 h-[calc(100vh-3rem)] overflow-hidden flex flex-col items-center justify-center">
          
          {/* Hero Section (iPhone Pro) */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          >
            <h2 className="text-[#f5f5f7] text-3xl md:text-5xl font-semibold tracking-tight mb-2">iPhone 15 Pro</h2>
            <h3 className="text-[#f5f5f7] text-xl md:text-3xl font-normal tracking-wide mb-6">Titanium. So strong. So light. So Pro.</h3>
            
            <div className="flex items-center gap-6 mb-16">
              <a href="#" className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
                Learn more
              </a>
              <a href="#" className="text-white text-sm font-medium hover:underline flex items-center gap-1 group">
                Buy <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Abstract device representation */}
            <div className="relative w-full max-w-4xl h-[40vh] bg-gradient-to-b from-[#1a1a1a] to-black rounded-t-[3rem] md:rounded-t-[4rem] border-t-8 border-x-8 border-[#333] shadow-2xl flex items-center justify-center overflow-hidden">
               {/* Wallpaper representation */}
               <div className="absolute inset-2 md:inset-4 rounded-t-[2.5rem] md:rounded-t-[3.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"></div>
               <div className="absolute inset-2 md:inset-4 rounded-t-[2.5rem] md:rounded-t-[3.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-60"></div>
               {/* Dynamic Island mock */}
               <div className="absolute top-6 w-32 h-8 bg-black rounded-full shadow-lg z-10"></div>
            </div>
          </motion.div>

          {/* Section 2 (M3 Chip / Mac) */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-white text-black"
            style={{ opacity: section2Opacity, scale: section2Scale }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">
              MacBook Pro
            </h2>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6">Mind-blowing. Head-turning.</h3>
            
            <div className="flex items-center gap-6 mb-16">
              <a href="#" className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
                Learn more
              </a>
              <a href="#" className="text-black text-sm font-medium hover:underline flex items-center gap-1 group">
                Buy <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="w-full max-w-5xl h-[30vh] md:h-[40vh] relative">
              <div className="absolute inset-0 bg-[#f5f5f7] rounded-t-3xl border-t-2 border-x-2 border-neutral-300 shadow-inner flex flex-col items-center pt-8">
                 <div className="w-4/5 h-full bg-black rounded-t-xl border-t-[12px] border-x-[12px] border-[#222] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-80"></div>
                 </div>
                 <div className="w-full h-4 bg-neutral-300 mt-auto rounded-b-3xl"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Grid Features Section (Bento Box style) */}
      <div className="bg-[#f5f5f7] text-black py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center">The latest. <span className="text-neutral-500">Take a look at what’s new, right now.</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-3xl p-8 flex flex-col justify-between h-[400px] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden"
            >
              <div className="z-10">
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2">Apple Watch Series 9</h4>
                <h3 className="text-2xl font-semibold mb-4">Smarter. Brighter. Mightier.</h3>
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-rose-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="z-10 mt-auto flex justify-between items-end">
                 <div className="bg-rose-100 p-4 rounded-2xl">
                    <PlayCircle className="w-8 h-8 text-rose-500" />
                 </div>
                 <a href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                   <ChevronRight className="w-5 h-5" />
                 </a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-black text-white rounded-3xl p-8 flex flex-col justify-between h-[400px] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden lg:col-span-2"
            >
              <div className="z-10 max-w-md">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">iPad Pro</h4>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">Thinpossible.</h3>
                <p className="text-neutral-400 font-medium">The all‑new iPad Pro packs astonishing power into an unbelievably thin, light, and portable design.</p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
              <div className="z-10 mt-auto">
                 <a href="#" className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium inline-block hover:scale-105 transition-transform">Buy</a>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-3xl p-8 flex flex-col h-[400px] shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="mb-auto">
                <Cpu className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-2">M3 Chip</h3>
                <p className="text-neutral-500 font-medium leading-relaxed">Scary fast. The most advanced chips ever built for a personal computer.</p>
              </div>
              <a href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 flex flex-col h-[400px] shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="mb-auto">
                <Battery className="w-10 h-10 text-green-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-2">All-day battery life.</h3>
                <p className="text-neutral-500 font-medium leading-relaxed">Go all day and into the night, thanks to the power‑efficient Apple silicon.</p>
              </div>
              <a href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 flex flex-col h-[400px] shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="mb-auto">
                <Wifi className="w-10 h-10 text-indigo-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-2">Wi-Fi 6E</h3>
                <p className="text-neutral-500 font-medium leading-relaxed">Up to 2x faster wireless connectivity. For faster downloads and smoother streaming.</p>
              </div>
              <a href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] border-t border-neutral-300 text-xs text-neutral-500 py-12 px-4">
         <div className="max-w-5xl mx-auto">
            <p className="mb-4">1. Battery life varies by use and configuration. See apple.com/batteries for more information.</p>
            <p className="mb-8 border-b border-neutral-300 pb-8">2. Wi-Fi 6E available in countries and regions where supported.</p>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <div>Copyright © 2026 Apple Inc. All rights reserved. (Demo)</div>
               <div className="flex flex-wrap gap-4">
                  <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
                  <a href="#" className="hover:text-black transition-colors">Sales and Refunds</a>
                  <a href="#" className="hover:text-black transition-colors">Legal</a>
                  <a href="#" className="hover:text-black transition-colors">Site Map</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
