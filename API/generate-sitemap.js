const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, existsSync, mkdirSync } = require('fs');
const path = require('path');

// Define the links for the sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/career', changefreq: 'daily', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
];

// Define the hostname
const hostname = 'https://www.trackalways.in';

// Ensure the 'public' directory exists
const publicDir = path.join(__dirname, 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Create a sitemap stream and a write stream
const sitemapStream = new SitemapStream({ hostname });
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const writeStream = createWriteStream(sitemapPath);

// Handle errors on the write stream
writeStream.on('error', (err) => {
  console.error('Error writing to sitemap file:', err);
});

// Use a promise to handle the stream completion
const promise = new Promise((resolve, reject) => {
  writeStream.on('finish', resolve);
  writeStream.on('error', reject);
});

// Pipe the sitemap stream to the write stream
sitemapStream.pipe(writeStream);

// Write each link to the sitemap stream
links.forEach(link => {
  try {
    sitemapStream.write(link);
  } catch (error) {
    console.error('Error writing link to sitemap stream:', error, link);
  }
});

// End the sitemap stream
sitemapStream.end();

// Wait for the stream to finish
promise
  .then(() => console.log('Sitemap created successfully'))
  .catch(err => console.error('Error creating sitemap:', err));
