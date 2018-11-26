import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import SVG from 'static/images/react.svg'

const Content = ({ children, content = '' }) =>
  <Wrapper>
    {children}
    <SVG />
    <p>{ content }</p>
  </Wrapper>

Content.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Content
