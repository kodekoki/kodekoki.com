import React from 'react'
import Tilted from './Tilted'
import Section from './Section'
import theme from './theme'
import { Styled } from 'theme-ui'
import css from '@emotion/css'
import { string, object, oneOfType } from 'prop-types'

const PageTitle = ({ backgroundColor, title, description, image }) => {
  const backgroundColorContainer = backgroundColor || theme.colors.primary
  return (
    <section>
      <Section
        backgroundColor={backgroundColorContainer}
        id="page-title-section"
        light
        enableWave={false}
        waveBottom={false}
      >
        <section
          css={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            flex-direction: column-reverse;
            & > span {
              flex: 1;
            }
            & > header {
              flex: 1;
            }
            @media only screen and (min-width: ${theme.breakpoints[0]}) {
              flex-direction: row;
              margin-top: 3rem;
            }
          `}
        >
          <header>
            <Styled.h1
              style={{
                fontSize: '3rem',
                lineHeight: 1,
                margin: '1.25rem 0 1.75rem',
              }}
            >
              {title}
            </Styled.h1>
            <Styled.p>{description}</Styled.p>
          </header>
          <span
            css={css`
              width: 100%;
              opacity: 0.25;
              position: relative;
              /* Remove the parts of the circle that is outside of the image */
              overflow: hidden;

              &:after {
                content: '';
                position: absolute;
                /* Center element on the middle of it's parent */
                top: 50%;
                left: 50%;
                /* Reset back the image so it's center is locked on the center of the parent */
                transform: translate(-50%, -50%);
                /* Only set the width of the image */
                width: 100%;
                /* Using the padding-force-ratio trick, we force the elments padding bottom to push down the height */
                padding-bottom: 100%;
                box-shadow: inset 0px 0px 150px 60px ${backgroundColorContainer};
              }
              & img {
                max-width: 100%;
                display: block;
                margin: 0;
                mask-image: linear-gradient(
                  to left,
                  ${backgroundColorContainer},
                  rgba(0, 0, 0, 0)
                );
              }
            `}
          >
            {image.src && <img alt="image-cover" src={image.src} />}
          </span>
        </section>
      </Section>
      <Tilted backgroundColor={backgroundColor} />
    </section>
  )
}

PageTitle.propTypes = {
  backgroundColor: string,
  title: string,
  description: string,
  image: oneOfType([string, object]),
}

PageTitle.defaultProps = {
  image:
    'https://fbcd.co/product-lg/a1bee6a0f5805ab8b7ef25ffd0565015_resize.jpg',
  title: 'Hello World!, Here is the plan for the next year',
  description:
    'Where we found something that we love and work at it, like never enough time',
}

export default PageTitle
