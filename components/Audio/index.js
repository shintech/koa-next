import PropTypes from 'prop-types'
import Wrapper from './wrapper'

export default class Player extends React.Component {
  static propTypes = {
    media: PropTypes.string.isRequired
  }

  componentWillReceiveProps () {
    const { audio } = this.refs
    audio.pause()

    if (this.props.media) {
      audio.load()
      audio.play()
    }
  }

  render () {
    return (
      <Wrapper>
        <audio controls autoPlay ref="audio">
          <source src={this.props.media} />
        </audio>
      </Wrapper>
    )
  }
}
