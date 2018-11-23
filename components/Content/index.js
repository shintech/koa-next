import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Content = ({ content = '' }) =>
  <Wrapper>
    <p>{ content }</p>
  </Wrapper>

Content.propTypes = {
  content: PropTypes.string.isRequired
}

export default Content
