import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Footer = ({ domain }) =>
  <Wrapper>
    <a href='#'>&#169;&nbsp;<span>{ domain }</span></a>
  </Wrapper>

Footer.propTypes = {
  domain: PropTypes.string.isRequired
}

export default Footer
