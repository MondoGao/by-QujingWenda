import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.scss'

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <NavItem to="/" exact replace className={styles.hot}>热门</NavItem>
      <NavItem to="/users" replace className={styles.user}>答主</NavItem>
      <NavItem to="/me" replace className={styles.me}>我的</NavItem>
    </div>
  )
}

const NavItem = (props) =>
  <NavLink {...props} className={styles['nav-item'] + ' ' + props.className} activeClassName={styles.active}>{props.children}</NavLink>


export default Nav