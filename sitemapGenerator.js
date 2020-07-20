const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://dbski.pl/', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
});

// register event listeners
generator.on('done', () => {
  console.log('Sitemap Generated')
});

// start the crawler
generator.start();
