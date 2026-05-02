import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://juanramirez.es'; // Cambia esto si tu dominio es otro
const FEED_PATH = path.join(process.cwd(), 'public', 'rss.xml');

async function generateRSS() {
  const posts = (await getCollection('blog'))
    .filter(post => post.data.lang === 'en')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 20);

  const items = posts.map(post => {
    const url = `${SITE_URL}/blog/${post.slug}`;
    return `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
      <description>${escape(post.data.excerpt || '')}</description>
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Juan Ramírez Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>Articles by Juan Ramírez on acquired brain injury, technology, and personal reflections.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  fs.writeFileSync(FEED_PATH, rss);
  console.log('RSS feed generated:', FEED_PATH);
}

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

generateRSS();
