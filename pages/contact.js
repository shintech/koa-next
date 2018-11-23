import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import ContactInfo from 'components/ContactInfo'

class Home extends React.Component {
  static async getInitialProps ({ store }) {
    return {
      title: 'Contact!!',
      email: process.env['EMAIL']
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }

  render () {
    const { title, email } = this.props

    return (
      <Main title='contact' host='shintech.ninja' favicon='/static/images/nodejs-icon.svg'>
        <Title title={title} fontSize='22ch' colors={['steelblue', 'lightgreen']} />
        <ContactInfo email={email} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(Home)
