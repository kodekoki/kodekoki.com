import React from 'react'
import { node, string, array } from 'prop-types'
import { Styled, Container } from 'theme-ui'
import PostItem from './PostItem'
import css from '@emotion/css'

const PostList = ({ heading, description, listItem }) => {
  const Desc = description
  return (
    <Container>
      {heading && <Styled.h2>{heading}</Styled.h2>}
      {description && (
        <Styled.p>
          <Desc />
        </Styled.p>
      )}
      {listItem && (
        <div
          css={css`
            margin: 3rem 0 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          `}
        >
          {listItem.map((data, index) => {
            const { title, description, image } = data.node.frontmatter
            return (
              <PostItem
                key={title + index}
                image={image && image.childImageSharp.fluid}
                title={title}
                link={data.node.fields.slug}
                description={description}
              />
            )
          })}
        </div>
      )}
    </Container>
  )
}

PostList.propTypes = {
  heading: string,
  description: node,
  listItem: array,
}

export default PostList
