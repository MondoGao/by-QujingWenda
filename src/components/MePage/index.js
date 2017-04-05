import React from 'react'
import { Route, NavLink, Link, Redirect, Switch } from 'react-router-dom'
import styles from './MePage.scss'
import Button from 'components/Button'
import UserMetaContainer from 'containers/UserMetaContainer'
import FilterQuestionList from 'containers/FilterQuestionList'

const MePage = ({ myself, lastTab, updateLastTab }) => (
  <div className={styles['me-container']}>
    <section className={styles.information}>
      <UserMetaContainer only id={myself.id}/>
      <Button className={styles['btn-upgrade']} disable><Link to="#">成为答主</Link></Button>
    </section>
    <section>
      <ul className={styles.nav}>
        <li><NavLink to="/me/asked" replace onClick={() => updateLastTab('asked')} activeClassName={styles.active}>问我的</NavLink></li>
        <li><NavLink to="/me/asking" replace onClick={() => updateLastTab('asking')} activeClassName={styles.active}>我问的</NavLink></li>
        <li><NavLink to="/me/listened" replace onClick={() => updateLastTab('listened')} activeClassName={styles.active}>我听过</NavLink></li>
      </ul>
    </section>
    <Switch>
      <Route path={`/me/asked`} render={() => <FilterQuestionList filter="answerTo" userId={myself.id}/>}/>
      <Route path={`/me/asking`} render={() => <FilterQuestionList filter="askByMe" userId={myself.id}/>}/>
      <Route path={`/me/listened`} render={() => <FilterQuestionList filter="listenTo" userId={myself.id}/>}/>
      <Route path="/me" render={() => <ForceRedirect to={`/me/${lastTab}`}/>}/>
    </Switch>
  </div>
)

class ForceRedirect extends React.Component {
  shouldComponentUpdate() {
    return true
  }

  render() {
    return <Redirect {...this.props}/>
  }
}

export default MePage