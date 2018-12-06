import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'
import {Motion, spring} from 'react-motion';

const Clicker = ({ trees, toggle, increment = () => {}, decrement = () => {} }) => {
  let  value 

  if (trees.value === 0) { 
    value = 36
  } else {
    value = (trees.value > 0) ? 72.5 : 0
  }

  return (
    <Wrapper theme={theme(trees)} >
      <div className='counter'>Number &#10144; <span>{trees.value}</span></div>
      <button className='decrement' onClick={() => { decrement(1) }}>Decrement!</button>
      <button className='increment' onClick={() => { increment(1) }}>Increment!</button>
      
      <Motion style={{x: spring(value)}}>
        {({x}) =>
          <div className="motion">
            <div className="block" style={{
              WebkitTransform: `translate3d(${x}vh, 0, 0)`,
              transform: `translate3d(${x}vh, 0, 0)`,
            }} />
          </div>
        }
      </Motion>
    </Wrapper>
  )
}

Clicker.propTypes = {
  trees: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Clicker
