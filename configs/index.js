module.exports = {
  siteTitle: 'KodeKoki', // Navigation and Site Title
  siteUrl: process.env.ROOT_URL || 'https://kodekoki.com', // Domain of your site. No trailing slash!
  siteUrlWww: 'https://www.kodekoki.com', // Domain of your site with www
  siteLanguage: 'id', // Language Tag on <html> element
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Pelajari Resep Membuat Aplikasi Web Modern Bersama KodeKoki',
  minibio: `
    <strong>Dwiki Arlan</strong> is a fullstack JavaScript developer that try to
    help people with create a good software. From Indonesia I want to share all of my knowledge's
    to others.
    `,
  author: 'Dwiki Arlan', // Author for schemaORGJSONLD
  organization: 'KodeKoki',

  userTwitter: '@arrlancore', // Twitter Username
  ogSiteName: 'Dwiki Arlan', // Facebook Site Name
  ogLanguage: 'id_ID',
  googleAnalyticsID: 'UA-XXX123-1',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  twitter: 'https://twitter.com/arrlancore/',
  twitterHandle: '@arrlancore',
  github: 'https://github.com/arrlancore/',
  linkedin: 'https://www.linkedin.com/in/dwiki-arlan-62645770/',
  youtube: 'https://www.youtube.com/',
  rss: 'https://arlan.net/blog/rss.xml',
}
