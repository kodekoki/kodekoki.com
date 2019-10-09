import React from "react"
import kebabCase from "../utils/kebabCase"
import { graphql, Link } from "gatsby"

const BlogTags = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data

  return (
    <>
      <h1>Tags:</h1>
      {pageContext.allTags.map(tag => (
        <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
      ))}
      <br />

      {allMarkdownRemark.edges.map(({ node }) => {
        const imageSource = node.frontmatter.image.childImageSharp.fluid.src

        return (
          <>
            <Link to={node.fields.slug}>
              <img src={imageSource} alt={node.frontmatter.title} />
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>By {node.frontmatter.author}</p>
            <p>
              In:{" "}
              {node.frontmatter.tags.map(tag => (
                <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
              ))}
            </p>
          </>
        )
      })}

      <ul>
        {Array.from({ length: pageContext.numPages }).map((item, i) => {
          const index = i + 1
          const tags = kebabCase(pageContext.tags)
          const link =
            index === 1
              ? `/blog/tags/${tags}`
              : `/blog/tags/${tags}/page/${index}`

          return (
            <li>
              {pageContext.currentPage === index ? (
                <span>{index}</span>
              ) : (
                <a href={link}>{index}</a>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BlogTags

export const query = graphql`
  query blogPostsListByTags($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: $limit
      skip: $skip
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
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`