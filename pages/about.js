import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'
import api from 'api/about'
import actions from 'state/actions/about'

class About extends React.Component {
  static async getInitialProps ({ store }) {
    try {
      let json = await api.fetch()

      store.dispatch(actions.fetch(json))
    } catch (err) {
      console.error(err.message)
    }

    return {
      custom: 'About!!'
    }
  }

  static propTypes = {
    about: PropTypes.object.isRequired
  }

  render () {
    const { about } = this.props

    return (
      <Main title='about' host='shintech.ninja' favicon='/static/images/react.svg' >
        <Title title={about.title} fontSize='24ch' colors={['gold', 'green']} />
        <Content content={about.data} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)
