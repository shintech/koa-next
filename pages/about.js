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

    const data = faker.company.bs()
    const title = faker.company.bsBuzz()

    return {
      DOMAIN,
      title,
      data
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    DOMAIN: PropTypes.string.isRequired
  }

  render () {
    const { title, data, DOMAIN } = this.props

    return (
      <Main title='about' domain={DOMAIN} favicon='/static/images/react.svg' >
        <Content content={data}>
          <Title title={title} fontSize='24ch' colors={['gold', 'green']} />
        </Content>
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)
