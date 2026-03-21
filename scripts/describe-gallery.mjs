import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const galleryDir = path.join(process.cwd(), 'public/images/gallery');
const images = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

console.log(`Found ${images.length} images to describe.`);

const descriptions = {};

for (const filename of images) {
  const imagePath = path.join(galleryDir, filename);
  const imageData = fs.readFileSync(imagePath);
  const base64 = imageData.toString('base64');

  // Detect media type
  const mediaType = filename.endsWith('.png') ? 'image/png' : 'image/jpeg';

  console.log(`Describing: ${filename}`);

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 200,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: { type: 'base64', media_type: mediaType, data: base64 },
          },
          {
            type: 'text',
            text: 'You are describing rooms and spaces in Bishops House, a supported living property in Hayes, Middlesex UK. Look at this image and provide: 1) A short title (3-5 words) 2) A one-sentence description for the website gallery. Format as JSON only, no markdown: {"title": "...", "description": "..."}',
          },
        ],
      }],
    });

    const text = response.content[0].text;
    const clean = text.replace(/```json|```/g, '').trim();
    descriptions[filename] = JSON.parse(clean);
    console.log(`  → ${descriptions[filename].title}`);
  } catch (e) {
    console.error(`  ✗ Error on ${filename}:`, e.message);
    // Derive fallback from filename
    const base = path.basename(filename, path.extname(filename));
    descriptions[filename] = {
      title: base,
      description: `A space at Bishops House supported living property, Hayes, Middlesex.`,
    };
  }
}

const outPath = path.join(process.cwd(), 'src/data/gallery-descriptions.json');
fs.writeFileSync(outPath, JSON.stringify(descriptions, null, 2));
console.log(`\nDone! Descriptions saved to src/data/gallery-descriptions.json`);
