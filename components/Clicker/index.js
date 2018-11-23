import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Clicker = ({ trees, increment = () => {}, decrement = () => {} }) => {
  return (
    <Wrapper theme={theme(trees)} >
      <div className='counter'>Number &#10144; <span>{trees.value}</span></div>
      <button className='decrement' onClick={() => { decrement(1) }}>Decrement!</button>
      <button className='increment' onClick={() => { increment(1) }}>Increment!</button>
    </Wrapper>
  )
}

Clicker.propTypes = {
  trees: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Clicker
