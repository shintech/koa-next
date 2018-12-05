import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import faker from 'faker'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class About extends React.Component {
  static async getInitialProps ({ req, store }) {
    const { DOMAIN } = (req) ? serverRuntimeConfig : publicRuntimeConfig

    const DATA = faker.company.bs()
    const TITLE = faker.company.bsBuzz()

    return {
      DOMAIN,
      TITLE,
      DATA
    }
  }

  static propTypes = {
    TITLE: PropTypes.string.isRequired,
    DATA: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired
  }

  render () {
    const { TITLE, DATA, DOMAIN } = this.props

    return (
      <Main title='about' domain={DOMAIN} favicon='/static/images/react.svg' >
        <Content content={DATA}>
          <Title title={TITLE} fontSize='24ch' colors={['gold', 'green']} />
        </Content>
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)
