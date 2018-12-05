import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Title = ({ title = 'Hello World', fontSize = '16ch', colors = ['orange', 'red'] }) =>
  <Wrapper theme={theme({ fontSize, colors })}>
    <h1 className='title'>{ `${title.charAt(0).toUpperCase()}${title.slice(1)}!!` }</h1>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title
