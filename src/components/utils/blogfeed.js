const configs = require('../../../configs')

function getBlogFeed({ filePathRegex, blogUrl, ...overrides }) {
  return {
    serialize: ({ query: { allMarkdownRemark } }) => {
      const stripSlash = slug => (slug.startsWith('/') ? slug.slice(1) : slug)
      return allMarkdownRemark.edges.map(edge => {
        const url = `${configs.siteUrl}/${stripSlash(edge.node.fields.slug)}`
        // TODO: clean this up... This shouldn't be here and it should be dynamic.
        const footer = `
            <div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
              <div style="display: flex;">
                <div style="padding-right: 20px;">

                </div>
                <p>
                  ${configs.minibio}
                </p>
              </div>
            </div>
          `

        const postText = `<div>${footer}</div><div style="margin-top=55px; font-style: italic;">(This article was posted to my blog at <a href="${blogUrl}">${blogUrl}</a>. You can <a href="${url}">read it online by clicking here</a>.)</div>`

        // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
        const html = (edge.node.html || ``)
          .replace(/href="\//g, `href="${configs.siteUrl}/`)
          .replace(/src="\//g, `src="${configs.siteUrl}/`)
          .replace(/"\/static\//g, `"${configs.siteUrl}/static/`)
          .replace(/,\s*\/static\//g, `,${configs.siteUrl}/static/`)

        return {
          ...edge.node.frontmatter,
          description: edge.node.excerpt,
          date: edge.node.fields.date,
          url,
          guid: url,
          custom_elements: [
            {
              'content:encoded': `<div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
                  ${html}
                  ${postText}
                </div>`,
            },
          ],
        }
      })
    },
    query: `
       {
         site {
           siteMetadata {
             title
             description
           }
         }
         allMarkdownRemark(
           limit: 1000,
           filter: {
             frontmatter: {published: {ne: false}}
             fileAbsolutePath: {regex: "${filePathRegex}"}
           }
           sort: { order: DESC, fields: [frontmatter___date] }
         ) {
           edges {
             node {
               excerpt(pruneLength: 250)
               html
               fields {
                 slug
               }
               frontmatter {
                 title
               }
             }
           }
         }
       }
     `,
    ...overrides,
  }
}

module.exports = getBlogFeed
