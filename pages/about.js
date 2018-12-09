import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class About extends React.Component {
  static async getInitialProps ({ req, store }) {
    const { DOMAIN, BASE_URL } = (req) ? serverRuntimeConfig : publicRuntimeConfig
    let title, content

    try {
      const response = await fetchRemoteData(`${BASE_URL}/api/about`)

      title = response.title
      content = response.content
    } catch (err) {
      title = 'About'
      content = 'shintech.ninja'
    }

    return {
      DOMAIN,
      title,
      content
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired
  }

  render () {
    const { title, content, DOMAIN } = this.props

    return (
      <Main title='about' domain={DOMAIN} favicon='/static/images/react.svg' >
        <Content content={content}>
          <Title title={title} fontSize='24ch' colors={['gold', 'green']} />
        </Content>
      </Main>
    )
  }
}

function fetchRemoteData (BASE_URL) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(BASE_URL, options).then(response => response.json())
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)
