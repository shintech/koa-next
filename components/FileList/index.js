import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import SVG from 'static/images/react.svg'

const nowPlaying = (file, cb) => {
  const fileURL = `${process.env['BASE_URL']}/api/files/${file}`
  cb(fileURL)
}

const FileList = ({ files, selectNowPlaying }) =>
  <Wrapper>
    {files.list.map((file, n) =>
      <a key={n} href='javascript:void(0);' onClick={ e => { e.preventDefault(); nowPlaying(file, selectNowPlaying) } }>
        <div className='cover'><SVG /></div>
        <div className='info'>{file}</div>
      </a>
    )}
  </Wrapper>

FileList.propTypes = {
  files: PropTypes.object.isRequired,
  selectNowPlaying: PropTypes.func
}

export default FileList
