// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://supernesia.id', // Ganti sesuai domain kamu
  generateRobotsTxt: true,          // Auto-generate robots.txt
  sitemapSize: 5000,                // Default batasan jumlah link per sitemap
  changefreq: 'daily',              // Update frekuensi untuk Mei 2026 SEO
  priority: 0.7,
  exclude: ['/admin', '/test-page', '/api/*'], // Halaman yang tidak ingin disertakan
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom Priority for Core Pages
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }
    }
    if (['/layanan', '/tentang', '/harga'].includes(path)) {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() }
    }
    if (path.startsWith('/blog')) {
      return { loc: path, changefreq: 'daily', priority: 0.85, lastmod: new Date().toISOString() }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}