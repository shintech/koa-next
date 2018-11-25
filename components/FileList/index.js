import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import SVG from 'static/images/react.svg'

const FileList = ({ files, selectNowPlaying }) =>
  <Wrapper>
    {files.list.map((file, n) =>  
      <a key={n} href={`static/files/${file}`} onClick={ e => { e.preventDefault(); selectNowPlaying(file) } }>
        <div className='cover'><SVG /></div>
        <div className='info'>{file}</div>
      </a>
    )}
  </Wrapper>

FileList.propTypes = {
  files: PropTypes.object.isRequired
}

export default FileList
