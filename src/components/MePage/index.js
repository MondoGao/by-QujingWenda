import React from 'react'
import { Route, NavLink, Link, Redirect } from 'react-router-dom'

import styles from './MePage.scss'

import Button from 'components/Button'
import UserMetaContainer from 'containers/UserMetaContainer'

const MePage = ({ myself }) => (
  <div className={styles['me-container']}>
    <section className={styles.information}>
      <UserMetaContainer myself id={myself.id}/>
      <Button className={styles['btn-upgrade']} disable><Link to="#">成为答主</Link></Button>
    </section>
    <section>
      <ul className={styles.nav}>
        <li><NavLink to="/me/asked" activeClassName={styles.active}>问我的</NavLink></li>
        <li><NavLink to="/me/asking" activeClassName={styles.active}>我问的</NavLink></li>
        <li><NavLink to="/me/listened" activeClassName={styles.active}>我听过</NavLink></li>
      </ul>
      <Route path={`/me/asked`} component={Button}/>
    </section>
    <Redirect path="/me/" to="/me/asked"/>
  </div>
)

export default MePage