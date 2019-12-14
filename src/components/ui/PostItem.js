import React from 'react'
import css from '@emotion/css'
import theme from './theme'
import { string, oneOfType, object } from 'prop-types'
import { Link } from '@reach/router'
import { zoomAnimation } from './styles'
import Img from 'gatsby-image'

const rootStyle = css`
  background: white;
  text-align: center;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.05);
  transition: all ease-in 0.5s;
  cursor: pointer;
  overflow: hidden;
  width: 48%;
  margin-bottom: 4rem;
  & > section {
    padding: 2rem 4rem;
  }
  & div > .gatsby-image-wrapper > picture > img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }
  & h2 {
    transition: all ease-in 2s;
    letter-spacing: -1px;
  }
  & :hover {
    box-shadow: -1px 5px 19px 10px rgba(0, 0, 0, 0.1);
    & h2 {
      color: ${theme.colors.secondary};
      background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    & div > .gatsby-image-wrapper > picture > img {
      ${zoomAnimation('60s')}
    }
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
    max-width: 400px;
    justify-content: center;
  }
`

const PostItem = ({ link, image, title, description }) => {
  return (
    <div css={rootStyle}>
      <Link to={link}>
        <div>
          {image && (
            <Img
              style={{ height: 330, objectFit: 'cover' }}
              fluid={image}
              alt={`pic for ${title}`}
            />
          )}
        </div>
      </Link>
      <section>
        <Link to={link}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      </section>
    </div>
  )
}

PostItem.propTypes = {
  link: string,
  image: oneOfType([string, object]),
  title: string,
  description: string,
}

export default PostItem
