import PropTypes from 'prop-types'
import File from './File'
import Wrapper from './wrapper'

const FileList = ({ files, selectNowPlaying }) =>
  <Wrapper>
    {files.list.map(file =>  <File selectNowPlaying={selectNowPlaying} key={file} file={file} />)}
  </Wrapper>

FileList.propTypes = {
  files: PropTypes.object.isRequired
}

export default FileList
