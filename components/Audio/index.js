import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Audio = ({ media }) =>
  <Wrapper>
    <audio controls>
      <source src={media} type="audio/mp3" />
    </audio> 
  </Wrapper>

Audio.propTypes = {
  // media: PropTypes.array
}

export default Audio
