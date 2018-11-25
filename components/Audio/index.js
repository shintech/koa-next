import PropTypes from 'prop-types'
import Wrapper from './wrapper'

export default class Player extends React.Component {
  componentWillReceiveProps () {
    const { audio } = this.refs
    audio.pause()
    
    if (this.props.media) {
      audio.load()
      audio.play()
    }
  }
  
  render () {
    return (  <Wrapper>
    <audio controls autoPlay ref="audio">
      <source src={`static/files/${this.props.media}`} type="audio/mp3" />
    </audio> 
  </Wrapper>)
  }
}

