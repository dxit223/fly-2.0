const fs = require('fs');
const path = require('path');

const dir = '/new_html';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');

  // We missed font application in h1 because I screwed up the regex? No, h1 in index wasn't replaced properly. Wait, it says font-extrabold!
  // Let me just replace the logo directly and use a robust regex.

  const oldLogoIndex = `<div id="logo-container" class="w-12 h-12 rounded-xl bg-white/80 shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow relative z-10">
                    <!-- Logo Placeholder -->
                    <span class="text-[10px] font-bold text-slate-400 mono text-center leading-tight">AWAITING<br>IMAGE</span>
                </div>
                <span class="font-bold text-xl tracking-tight text-slate-800 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all">Furious Fly</span>`;

  const oldLogoOther = `<div id="logo-container" class="w-12 h-12 rounded-xl bg-white/80 shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow relative z-10">
                    <span class="text-[10px] font-bold text-slate-400 mono text-center leading-tight">AWAITING<br>IMAGE</span>
                </div>
                <span class="font-bold text-xl tracking-tight text-slate-800 transition-all">Furious Fly</span>`;

  const newLogo = `<div id="logo-container" class="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 relative z-10 mix-blend-multiply -ml-2">
                    <img src="https://storage.googleapis.com/aistudio-user-uploads-production/uploads/d76wmt1r9i24/furious%20fly.png" alt="Furious Fly Logo" class="w-full h-full object-contain mix-blend-multiply">
                </div>`;

  content = content.replace(oldLogoIndex, newLogo);
  content = content.replace(oldLogoOther, newLogo);

  // Apply fonts
  if (!content.includes('family=Permanent+Marker')) {
    content = content.replace(
      'family=Fira+Code:wght@400;500&display=swap',
      'family=Fira+Code:wght@400;500&family=Permanent+Marker&display=swap'
    );
  }

  if (!content.includes('.marker-font')) {
    content = content.replace(
      '.mono { font-family: \'Fira Code\', monospace; }',
      '.mono { font-family: \'Fira Code\', monospace; }\n        .marker-font { font-family: \'Permanent Marker\', cursive; }'
    );
  }

  // Force add marker-font to any h1/h2 that doesn't have it
  content = content.replace(/<h1 class="([^"]+)"/g, (match, p1) => {
    if (!p1.includes('marker-font')) return `<h1 class="${p1} marker-font"`;
    return match;
  });
  content = content.replace(/<h2 class="([^"]+)"/g, (match, p1) => {
    if (!p1.includes('marker-font')) return `<h2 class="${p1} marker-font"`;
    return match;
  });

  content = content.replace(/font-extrabold/g, 'font-normal');
  content = content.replace(/tracking-tighter/g, 'tracking-normal');
  content = content.replace(/tracking-tight/g, 'tracking-normal');
  
  fs.writeFileSync(p, content);
});
console.log("Done");
