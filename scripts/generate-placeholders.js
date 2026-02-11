// Placeholder image generator for development
// This creates simple placeholder images for the scroll sequence

const fs = require('fs');
const path = require('path');

const TOTAL_FRAMES = 120;
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'sequence');

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Creating placeholder HTML files for image sequence...');
console.log('Note: Replace these with actual JBL Tune 770NC product renders');

// Create a simple SVG placeholder for each frame
for (let i = 1; i <= TOTAL_FRAMES; i++) {
  const frameNumber = String(i).padStart(3, '0');
  const progress = (i - 1) / (TOTAL_FRAMES - 1);

  // Create SVG with animation state indication
  const svg = `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <!-- Background matching #080707 -->
  <rect width="1920" height="1080" fill="#080707"/>
  
  <!-- Frame indicator -->
  <text x="960" y="540" font-family="Inter, sans-serif" font-size="48" fill="rgba(255,255,255,0.3)" text-anchor="middle">
    Frame ${frameNumber} / ${TOTAL_FRAMES}
  </text>
  
  <!-- Progress indicator -->
  <text x="960" y="600" font-family="Inter, sans-serif" font-size="24" fill="rgba(255,255,255,0.15)" text-anchor="middle">
    ${Math.round(progress * 100)}% scroll progress
  </text>
  
  <!-- Placeholder headphone representation -->
  <circle cx="960" cy="400" r="${80 + Math.sin(progress * Math.PI) * 40}" fill="none" stroke="rgba(105,92,88,0.3)" stroke-width="4"/>
  <circle cx="860" cy="400" r="50" fill="rgba(73,76,73,0.2)" stroke="rgba(105,92,88,0.3)" stroke-width="2"/>
  <circle cx="1060" cy="400" r="50" fill="rgba(73,76,73,0.2)" stroke="rgba(105,92,88,0.3)" stroke-width="2"/>
</svg>`;

  // Write SVG file (browsers can display SVGs as images)
  const filename = path.join(OUTPUT_DIR, `frame_${frameNumber}.svg`);
  fs.writeFileSync(filename, svg);
}

console.log(`✓ Created ${TOTAL_FRAMES} placeholder frames in ${OUTPUT_DIR}`);
console.log('✓ Run npm run dev to start the development server');
