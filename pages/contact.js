import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import ContactInfo from 'components/ContactInfo'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class Home extends React.Component {
  static async getInitialProps ({ req, store }) {
    const { DOMAIN, PKG } = (req) ? serverRuntimeConfig : publicRuntimeConfig

    return {
      title: 'Contact',
      DOMAIN,
      PKG
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired,
    PKG: PropTypes.object.isRequired
  }

  render () {
    const { title, DOMAIN, PKG } = this.props

    return (
      <Main title='contact' domain={DOMAIN} favicon='/static/images/nodejs-icon.svg'>
        <Title title={title} fontSize='22ch' colors={['steelblue', 'lightgreen']} />
        <ContactInfo {...PKG} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(Home)
