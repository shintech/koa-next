import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const ContactInfo = ({ email = 'example@example.org' }) =>
  <Wrapper>
    <a href={`mailto:${email}`}>{email}</a>
  </Wrapper>

ContactInfo.propTypes = {
  email: PropTypes.string.isRequired
}

export default ContactInfo
