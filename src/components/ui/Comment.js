import React from 'react'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import styled from '@emotion/styled'
import { string } from 'prop-types'

const CommentContainer = styled.div`
  margin: 2.5rem 0;
  width: 100%;
`

const Comment = ({ title }) => {
  React.useEffect(() => {
    const gitalk = new Gitalk({
      clientID: '176a0a0e2d31fa0032be',
      clientSecret: process.env.GITALK_APP_SECRET,
      repo: 'kodekoki.com',
      owner: 'kodekoki',
      admin: ['kodekoki'],
      id: `comment_${Date.now()}`, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
      title: `Diskusi "${title}"`,
      labels: ['diskusi'],
      language: 'id-ID',
    })
    gitalk.render('gitalk-container')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <CommentContainer id="gitalk-container" />
}

Comment.propTypes = {
  title: string,
}

export default Comment
