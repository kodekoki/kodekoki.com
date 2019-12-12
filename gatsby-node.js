/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()

const POST_TYPE = {
  BLOG: 'blog',
  VIDEO: 'video',
  SNIPPET: 'snippet',
  TAGS: 'tags',
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    // const dataBlog = new RegExp('/content/blog/')
    const dataVideo = new RegExp('/content/video/')
    const dataSnippet = new RegExp('/content/snippet/')

    let slug
    let url

    // if (dataBlog.test(node.fileAbsolutePath)) {
    //   slug = value.replace(`/${POST_TYPE.BLOG}/`, '').replace(/\/$/, '')
    //   url = `/${POST_TYPE.BLOG}${slug}`
    //   createNodeField({
    //     name: `type`,
    //     node,
    //     value: POST_TYPE.BLOG,
    //   })
    // }
    if (dataVideo.test(node.fileAbsolutePath)) {
      slug = value.replace(`/${POST_TYPE.VIDEO}/`, '').replace(/\/$/, '')
      url = `/${POST_TYPE.VIDEO}${slug}`
      createNodeField({
        name: `type`,
        node,
        value: POST_TYPE.VIDEO,
      })
    }
    if (dataSnippet.test(node.fileAbsolutePath)) {
      slug = value.replace(`/${POST_TYPE.SNIPPET}/`, '').replace(/\/$/, '')
      url = `/${POST_TYPE.SNIPPET}${slug}`
      createNodeField({
        name: `type`,
        node,
        value: POST_TYPE.SNIPPET,
      })
    }

    createNodeField({
      name: `slug`,
      node,
      value: url,
    })
  }
}

// 1. This is called once the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  // 1.1 Getting the method to create pages
  const { createPage } = actions
  // 1.2 Tell which layout Gatsby should use to thse pages
  // const singlePageLayout = path.resolve(`./src/components/layout/singlePage.js`)

  /**
   * ***BLOG POST QUERY***
   */
  // const blogs = await graphql(`
  //   query blogPost {
  //     allMarkdownRemark(
  //       sort: { fields: [frontmatter___date], order: DESC }
  //       filter: {
  //         frontmatter: { published: { ne: false } }
  //         fileAbsolutePath: { regex: "//content/blog//" }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             title
  //             date
  //             author
  //             category
  //             tags
  //             featured
  //             published
  //             description
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `)
  // if (blogs.errors) {
  //   console.error(blogs.errors)
  //   Promise.reject(blogs.errors)
  // }

  // // 2.2 Our posts are here
  // const posts = blogs.data.allMarkdownRemark.edges
  // const categories = []
  const tags = []

  // // 3 Loop throught all posts
  // posts.forEach((post, index, arr) => {
  //   post.node.frontmatter.category.forEach(cat => categories.push(cat))

  //   const prev = arr[index - 1]
  //   const next = arr[index + 1]

  //   // 3.1 Finally create posts
  //   createPage({
  //     path: post.node.fields.slug,
  //     component: singlePageLayout,
  //     context: {
  //       slug: post.node.fields.slug,
  //       prev: prev,
  //       next: next,
  //     },
  //   })
  // })

  // // *** BLOG LIST LAYOUT***
  // const blogListLayout = path.resolve(`./src/components/layout/blogList.js`)
  const postsPerPage = 10
  // // const postsWithoutFeatured = posts.filter(({ node }) => {
  // //   return !node.frontmatter.featured
  // // })
  // const numPages = Math.ceil(posts.length / postsPerPage)

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/${POST_TYPE.BLOG}` : `/${POST_TYPE.BLOG}/page/${i + 1}`,
  //     component: blogListLayout,
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       currentPage: i + 1,
  //       numPages,
  //     },
  //   })
  // })

  // // *** BLOG CATEGORIES ***

  // const categoryLayout = path.resolve(`./src/components/layout/blogCategory.js`)

  // const countCategories = categories.reduce((prev, curr) => {
  //   prev[curr] = (prev[curr] || 0) + 1
  //   return prev
  // }, {})

  // const allCategories = Object.keys(countCategories)

  // allCategories.forEach(cat => {
  //   const link = `/${POST_TYPE.BLOG}/category/${kebabCase(cat)}`

  //   Array.from({
  //     length: Math.ceil(countCategories[cat] / postsPerPage),
  //   }).forEach((_, i) => {
  //     createPage({
  //       path: i === 0 ? link : `${link}/page/${i + 1}`,
  //       component: categoryLayout,
  //       context: {
  //         allCategories: allCategories,
  //         category: cat,
  //         limit: postsPerPage,
  //         skip: i * postsPerPage,
  //         currentPage: i + 1,
  //         numPages: Math.ceil(countCategories[cat] / postsPerPage),
  //       },
  //     })
  //   })
  // })

  // // *** BLOG TAGS ***

  // const tagsLayout = path.resolve(`./src/components/layout/blogTags.js`)

  // const countTags = tags.reduce((prev, curr) => {
  //   prev[curr] = (prev[curr] || 0) + 1
  //   return prev
  // }, {})

  // const allTags = Object.keys(countTags)

  // allTags.forEach(tag => {
  //   const link = `/${POST_TYPE.BLOG}/tags/${kebabCase(tag)}`

  //   Array.from({
  //     length: Math.ceil(countTags[tag] / postsPerPage),
  //   }).forEach((_, i) => {
  //     createPage({
  //       path: i === 0 ? link : `${link}/page/${i + 1}`,
  //       component: tagsLayout,
  //       context: {
  //         allTags: allTags,
  //         tag: tag,
  //         limit: postsPerPage,
  //         skip: i * postsPerPage,
  //         currentPage: i + 1,
  //         numPages: Math.ceil(countTags[tag] / postsPerPage),
  //       },
  //     })
  //   })
  // })

  /**
   * ***VIDEO POST QUERY***
   */
  const videos = await graphql(`
    query videoPost {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { ne: false } }
          fileAbsolutePath: { regex: "//content/video//" }
        }
      ) {
        edges {
          node {
            fields {
              slug
              type
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
              videoId
            }
            html
          }
        }
      }
    }
  `)
  if (videos.errors) {
    console.error(videos.errors)
    Promise.reject(videos.errors)
  }

  // 2.2 Our posts are here
  const videoPosts = videos.data.allMarkdownRemark.edges
  const videoPostLayout = path.resolve(
    `./src/components/ui/layout/VideoPostLayout.js`
  )

  // 3 Loop throught all posts
  videoPosts.forEach((videoPost, index, arr) => {
    const prev = arr[index - 1]
    const next = arr[index + 1]

    videoPost.node.frontmatter.tags.forEach(tag => {
      tags.push(tag)
    })

    // 3.1 Finally create posts
    createPage({
      path: videoPost.node.fields.slug,
      component: videoPostLayout,
      context: {
        slug: videoPost.node.fields.slug,
        prev: prev,
        next: next,
      },
    })
  })

  // *** VIDEO LIST LAYOUT***
  const videoListLayout = path.resolve(
    `./src/components/ui/layout/VideoListLayout.js`
  )

  const videoNumPages = Math.ceil(videoPosts.length / postsPerPage)

  Array.from({ length: videoNumPages }).forEach((_, i) => {
    createPage({
      path:
        i === 0 ? `/${POST_TYPE.VIDEO}` : `/${POST_TYPE.VIDEO}/page/${i + 1}`,
      component: videoListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages: videoNumPages,
      },
    })
  })

  /**
   * ***SNIPPET POST QUERY***
   */
  const snippets = await graphql(`
    query videoPost {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { ne: false } }
          fileAbsolutePath: { regex: "//content/snippet//" }
        }
      ) {
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
  `)
  if (snippets.errors) {
    console.error(snippets.errors)
    Promise.reject(snippets.errors)
  }

  // 2.2 Our posts are here
  const snippetPosts = snippets.data.allMarkdownRemark.edges
  const snippetPostLayout = path.resolve(
    `./src/components/ui/layout/SnippetPostLayout.js`
  )

  // 3 Loop throught all posts
  snippetPosts.forEach((snippetPost, index, arr) => {
    const prev = arr[index - 1]
    const next = arr[index + 1]

    snippetPost.node.frontmatter.tags.forEach(tag => {
      tags.push(tag)
    })

    // 3.1 Finally create posts
    createPage({
      path: snippetPost.node.fields.slug,
      component: snippetPostLayout,
      context: {
        slug: snippetPost.node.fields.slug,
        prev: prev,
        next: next,
      },
    })
  })

  // *** SNIPPET LIST LAYOUT***
  const snippetListLayout = path.resolve(
    `./src/components/ui/layout/SnippetListLayout.js`
  )

  const snippetNumPages = Math.ceil(snippetPosts.length / postsPerPage)

  Array.from({ length: snippetNumPages }).forEach((_, i) => {
    createPage({
      path:
        i === 0
          ? `/${POST_TYPE.SNIPPET}`
          : `/${POST_TYPE.SNIPPET}/page/${i + 1}`,
      component: snippetListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages: snippetNumPages,
      },
    })
  })

  // *** TAGS ***

  const tagsPostLayout = path.resolve(
    `./src/components/ui/layout/TagListLayout.js`
  )

  const countTagsPost = tags.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const allTagsPost = Object.keys(countTagsPost)

  allTagsPost.forEach(tag => {
    const link = `/${POST_TYPE.TAGS}/${kebabCase(tag)}`

    Array.from({
      length: Math.ceil(countTagsPost[tag] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: tagsPostLayout,
        context: {
          allTags: allTagsPost,
          tag: tag,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countTagsPost[tag] / postsPerPage),
        },
      })
    })
  })
}
