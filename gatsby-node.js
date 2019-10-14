/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom

// function extractContent(html) {
//   const dom = new JSDOM(`<!DOCTYPE html>`)
//   var span = dom.window.document.createElement('span')
//   span.innerHTML = html
//   return span.textContent || span.innerText || ''
// }

// function countReadingTime(text) {
//   const wordsPerMinute = 200
//   const noOfWords = text.split(/\s/g).length
//   const minutes = noOfWords / wordsPerMinute
//   const readTime = Math.ceil(minutes)
//   return readTime
// }

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    // const [month, day, year] = new Date(node.frontmatter.date)
    //   .toLocaleDateString('en-EN', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //   })
    //   .split('/')
    const slug = value.replace('/blog/', '').replace(/\/$/, '')
    const url = `/blog${slug}`

    // const html = node.html
    // const readingTime = countReadingTime(extractContent(html))

    createNodeField({
      name: `slug`,
      node,
      value: url,
    })
  }
}

// 1. This is called once the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  // 1.1 Getting the method to create pages
  const { createPage } = actions
  // 1.2 Tell which layout Gatsby should use to thse pages
  const singlePageLayout = path.resolve(`./src/components/layout/singlePage.js`)

  // 2 Return the method with the query
  return graphql(`
    query blogPosts {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              author
              category
              tags
              featured
              published
              description
            }
            html
          }
        }
      }
    }
  `).then(result => {
    // 2.1 Handle the errors
    if (result.errors) {
      console.error(result.errors)
      Promise.reject(result.errors)
    }

    // 2.2 Our posts are here
    const posts = result.data.allMarkdownRemark.edges
    const categories = []
    const tags = []

    // 3 Loop throught all posts
    posts.forEach((post, index, arr) => {
      post.node.frontmatter.category.forEach(cat => categories.push(cat))
      post.node.frontmatter.tags.forEach(tag => tags.push(tag))

      const prev = arr[index - 1]
      const next = arr[index + 1]

      // 3.1 Finally create posts
      createPage({
        path: post.node.fields.slug,
        component: singlePageLayout,
        context: {
          slug: post.node.fields.slug,
          prev: prev,
          next: next,
        },
      })
    })

    // *** BLOG LIST LAYOUT***
    const blogListLayout = path.resolve(`./src/components/layout/blogList.js`)
    const postsPerPage = 10
    // const postsWithoutFeatured = posts.filter(({ node }) => {
    //   return !node.frontmatter.featured
    // })
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
        component: blogListLayout,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages,
        },
      })
    })

    // *** BLOG CATEGORIES ***

    const categoryLayout = path.resolve(
      `./src/components/layout/blogCategory.js`
    )

    const countCategories = categories.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1
      return prev
    }, {})

    const allCategories = Object.keys(countCategories)

    allCategories.forEach(cat => {
      const link = `/blog/category/${kebabCase(cat)}`

      Array.from({
        length: Math.ceil(countCategories[cat] / postsPerPage),
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? link : `${link}/page/${i + 1}`,
          component: categoryLayout,
          context: {
            allCategories: allCategories,
            category: cat,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage: i + 1,
            numPages: Math.ceil(countCategories[cat] / postsPerPage),
          },
        })
      })
    })

    // *** BLOG TAGS ***

    const tagsLayout = path.resolve(`./src/components/layout/blogTags.js`)

    const countTags = tags.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1
      return prev
    }, {})

    const allTags = Object.keys(countTags)

    allTags.forEach(tag => {
      const link = `/blog/tags/${kebabCase(tag)}`

      Array.from({
        length: Math.ceil(countTags[tag] / postsPerPage),
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? link : `${link}/page/${i + 1}`,
          component: tagsLayout,
          context: {
            allTags: allTags,
            tag: tag,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage: i + 1,
            numPages: Math.ceil(countTags[tag] / postsPerPage),
          },
        })
      })
    })
  })
}
