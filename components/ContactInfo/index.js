import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const ContactInfo = ({ name, author, repository }) =>
  <Wrapper>
    <li className='email'><a target="_blank" rel="noopener noreferrer" href={`mailto:${author.email}`}>{author.email}</a></li>
    <li className='repo'><a target="_blank" rel="noopener noreferrer" href={`${repository.url}`}>{author.name}/{name}</a></li>
  </Wrapper>

ContactInfo.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  repository: PropTypes.object.isRequired
}

export default ContactInfo
