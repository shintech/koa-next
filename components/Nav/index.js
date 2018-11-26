import React from 'react'
import Link from './ActiveLink'
// import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'
import SVG from 'static/images/nodejs.svg'
import Router from 'routes'

function toggleResponsive () { // TODO create redux action
  var x = document.getElementById('container')
  if (x.classList.contains('responsive')) {
    x.classList.remove('responsive')
  } else {
    x.classList.add('responsive')
  }
}

const Nav = () =>
  <Wrapper id='container'theme={theme()}>
    {Router.routes.map(link => {
      let name = (link.name === 'index') ? 'home' : link.name

      return <Link key={name} prefetch activeClassName='active' route={link.page}><a>{name}</a></Link>
    })}

    <SVG className='logo' />

    <a href='javascript:void(0);' className='icon' onClick={() => { toggleResponsive() }}>
      <i className='fa fa-bars' />
    </a>
  </Wrapper>

Nav.propTypes = {}

export default Nav
