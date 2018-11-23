import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Footer = ({ message = 'localhost' }) =>
  <Wrapper>
    <a href='#'>&#169;&nbsp;<span>{ message }</span></a>
  </Wrapper>

Footer.propTypes = {
  message: PropTypes.string.isRequired
}

export default Footer
