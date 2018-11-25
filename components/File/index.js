import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const File = ({ filename = '' }) =>
  <Wrapper>
    <a key={filename} href={`static/files/${filename}`}>{filename}</a>
  </Wrapper>

File.propTypes = {
  filename: PropTypes.string.isRequired
}

export default File
