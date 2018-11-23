import { withRouter } from 'next/router'
import React, { Children } from 'react'
import routes, { Link } from 'routes'

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children)
  const href = routes.findAndGetUrls(props.route, props.params).urls.as

  let className = child.props.className || null

  if (router.pathname === href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim()
  }

  const onClick = (className === 'active') ? e => { e.preventDefault() } : null

  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, { className, onClick })}</Link>
}

export default withRouter(ActiveLink)
