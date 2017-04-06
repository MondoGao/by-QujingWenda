import React from 'react'
import { Route, NavLink, Link, Redirect, Switch } from 'react-router-dom'
import styles from './MePage.scss'
import Button from 'components/Button'
import UserMetaContainer from 'containers/UserMetaContainer'
import FilterQuestionList from 'containers/FilterQuestionList'
import LoadingIcon from 'components/LoadingIcon'

const MePage = ({ myself, page, updateLastTab }) => {
  const tabs = [{
    name: 'asked',
    text: '问我的',
    type: 1
  }, {
    name: 'asking',
    text: '我问的',
    type: 2
  }, {
    name: 'paid',
    text: '我听的',
    type: 3
  }]
  const tabLinks = tabs.map(tab => <li key={tab.name}><NavLink to={`/me/${tab.name}`} replace onClick={() => updateLastTab(tab.name)} activeClassName={styles.active}>{tab.text}</NavLink></li>
  )
  const tabRoutes = tabs.map(tab => <Route path={`/me/${tab.name}`} render={() => <FilterQuestionList filter={tab.name} userId={myself.id} key={tab.name} type={tab.type}/>}/>
  )

  return (
    <div className={styles['me-container']}>
      <section className={styles.information}>
        <UserMetaContainer only id={myself.id}/>
        <Button className={styles['btn-upgrade']} disable><Link to="#">成为答主</Link></Button>
      </section>
      <section>
        <ul className={styles.nav}>
          {tabLinks}
        </ul>
      </section>
      <Switch>
        {tabRoutes}
        <Route path="/me" render={() => <ForceRedirect to={`/me/${page.lastTab}`}/>}/>
      </Switch>
      <LoadingIcon isLoading={page.isLoading}/>
    </div>
  )
}

class ForceRedirect extends React.Component {
  shouldComponentUpdate() {
    return true
  }

  render() {
    return <Redirect {...this.props}/>
  }
}

export default MePage