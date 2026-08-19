const fs = require('fs');
const path = require('path');

const dir = './new_html';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');

  // Replace font link
  if (!content.includes('family=Permanent+Marker')) {
    content = content.replace(
      'family=Fira+Code:wght@400;500&display=swap',
      'family=Fira+Code:wght@400;500&family=Permanent+Marker&display=swap'
    );
  }

  // Add marker-font css
  if (!content.includes('.marker-font')) {
    content = content.replace(
      '.mono { font-family: \'Fira Code\', monospace; }',
      '.mono { font-family: \'Fira Code\', monospace; }\n        .marker-font { font-family: \'Permanent Marker\', cursive; }'
    );
  }

  // Replace logo in navbar
  const logoRegex = /<div id="logo-container"[\s\S]*?<\/div>\s*<span class="[^"]*">Furious Fly<\/span>/g;
  const newLogo = `<div id="logo-container" class="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 relative z-10 mix-blend-multiply">
                    <img src="https://storage.googleapis.com/aistudio-user-uploads-production/uploads/d76wmt1r9i24/furious%20fly.png" alt="Furious Fly Logo" class="w-full h-full object-contain mix-blend-multiply">
                </div>`;
  content = content.replace(logoRegex, newLogo);
  
  // also handle the case without class="..." if any
  const logoRegex2 = /<div id="logo-container"[\s\S]*?<\/div>\s*<span[^>]*>Furious Fly<\/span>/g;
  content = content.replace(logoRegex2, newLogo);

  // Apply font to h1 and h2
  content = content.replace(/<h1 class="([^"]+)"/g, (match, p1) => {
    if (!p1.includes('marker-font')) return `<h1 class="${p1} marker-font"`;
    return match;
  });
  content = content.replace(/<h2 class="([^"]+)"/g, (match, p1) => {
    if (!p1.includes('marker-font')) return `<h2 class="${p1} marker-font"`;
    return match;
  });

  // Adjust tracking/weight for marker font
  content = content.replace(/font-extrabold/g, 'font-normal');
  content = content.replace(/font-bold/g, 'font-medium'); // Replace bold with medium to soften it, or keep it.
  content = content.replace(/tracking-tighter/g, 'tracking-normal');
  content = content.replace(/tracking-tight/g, 'tracking-normal');

  fs.writeFileSync(p, content);
});
console.log("Done");
