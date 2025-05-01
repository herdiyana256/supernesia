// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://supernesia.id', // Ganti sesuai domain kamu
    generateRobotsTxt: true,          // Auto-generate robots.txt
    sitemapSize: 5000,                // Default batasan jumlah link per sitemap
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/admin', '/test-page'], // Halaman yang tidak ingin disertakan
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://supernesia.id/my-custom-sitemap-1.xml',
        'https://supernesia.id/my-custom-sitemap-2.xml',
      ],
    },
  }
  