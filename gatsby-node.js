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
    const dataVideo = new RegExp('/content/video/')
    const dataSnippet = new RegExp('/content/snippet/')

    let slug
    let url

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

  const tags = []

  const postsPerPage = 10

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
