const configs = require('./configs')
const getBlogFeed = require('./src/components/utils/blogfeed')
// const path = require('path')

// const here = (...p) => path.join(__dirname, ...p)

module.exports = {
  siteMetadata: {
    title: configs.siteTitle,
    description: configs.siteDescription,
    author: configs.author,
    siteUrl: configs.siteUrl,
    logo: `https://github.com/arrlancore/kodekoki.com/blob/master/src/images/logo-small.png?raw=true`,
    keywords: ['Software Engineer', 'Javascript', 'Frontend', 'Backend'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kodekoki.com`,
        short_name: `kodekoki`,
        start_url: `/`,
        background_color: configs.backgroundColor,
        theme_color: configs.themeColor,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/video`,
        name: `video`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/snippet`,
        name: `snippet`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: false,
              className: `heading-content`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: { sh: 'bash', js: 'javascript' },
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: {
    //       default: here('./src/templates/markdown-page.js'),
    //     },
    //     extensions: ['.mdx', '.md', '.markdown'],
    //     gatsbyRemarkPlugins: [
    //       { resolve: 'gatsby-remark-copy-linked-files' },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           backgroundColor: '#fafafa',
    //           maxWidth: 1035,
    //         },
    //       },
    //       { resolve: 'gatsby-remark-embedder' },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `PT Serif`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          getBlogFeed({
            filePathRegex: `//src/content/video//`,
            blogUrl: 'https://kodekoki.com/video',
            output: '/blog/rss.xml',
            title: 'KodeKoki Video RSS Feed',
          }),
          getBlogFeed({
            filePathRegex: `//src/content/snippet//`,
            blogUrl: 'https://kodekoki.com/snippet',
            output: '/blog/rss.xml',
            title: 'KodeKoki Snippet RSS Feed',
          }),
        ],
      },
    },
    'gatsby-plugin-robots-txt',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
