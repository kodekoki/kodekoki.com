import React from 'react'
import { string } from 'prop-types'

const VideoYoutube = ({ videoId }) => (
  <>
    {videoId && (
      <div className="videoWrapper">
        <iframe
          width="560"
          height="349"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&hd=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    )}
  </>
)
VideoYoutube.propTypes = {
  videoId: string,
}

export default VideoYoutube
