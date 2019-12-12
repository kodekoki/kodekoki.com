import React from 'react'

// eslint-disable-next-line react/prop-types
const WaveBar = ({ direction = 'top', color, background = 'white' }) => {
  const styleSecondShape = {
    position: 'absolute',
    top: 8,
    opacity: 0.3,
    left: 0,
  }
  return (
    <div
      style={{
        background,
        margin: -1,
        position: 'relative',
        transform: direction === 'down' ? 'rotate(180deg)' : 'none',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={color}
          fillOpacity="1"
          d="M0,320L40,304C80,288,160,256,240,224C320,192,400,160,480,138.7C560,117,640,107,720,106.7C800,107,880,117,960,133.3C1040,149,1120,171,1200,181.3C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <svg
        style={styleSecondShape}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,320L40,304C80,288,160,256,240,224C320,192,400,160,480,138.7C560,117,640,107,720,106.7C800,107,880,117,960,133.3C1040,149,1120,171,1200,181.3C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  )
}

export default WaveBar
