import PropTypes from 'prop-types'
import Wrapper from './wrapper'

export default class Player extends React.Component {
  render () {
    return (  <Wrapper>
    <audio controls>
      <source src={`static/files/${this.props.media}`} type="audio/mp3" />
    </audio> 
  </Wrapper>)
  }
}

