module.exports = {
  siteTitle: 'KodeKoki', // Navigation and Site Title
  siteUrl: process.env.ROOT_URL || 'https://kodekoki.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: 'Let see another story from a dreamer software developer',
  minibio: `
    <strong>Dwiki Arlan</strong> is a fullstack JavaScript developer that try to
    help people with create a good software. From Indonesia I want to share all of my knowledge's
    to others.
    `,
  author: 'Dwiki Arlan', // Author for schemaORGJSONLD
  organization: 'Open Source Organization',

  userTwitter: '@arrlancore', // Twitter Username
  ogSiteName: 'Dwiki Arlan', // Facebook Site Name
  ogLanguage: 'en_US',
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
