import React from 'react'
import SVG from 'static/images/react.svg'

const File = ({ file, selectNowPlaying }) => {
  return (
    <a href={`static/files/${file}`} onClick={e => {
      e.preventDefault()
      selectNowPlaying(file)
    }}>
      <div className='cover'><SVG /></div>
      <div className='info'>{file}</div>
    </a>
  )
}

export default File