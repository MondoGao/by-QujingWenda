import React from 'react'
import { Route, NavLink, Link, Redirect, Switch } from 'react-router-dom'
import styles from './MePage.scss'
import Button from 'components/Button'
import UserMetaContainer from 'containers/UserMetaContainer'
import FilterQuestionList from 'containers/FilterQuestionList'
import PageLoading from 'components/PageLoading'

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
  const tabLinks = tabs.map(tab => <NavLink to={`/me/${tab.name}`} replace onClick={() => updateLastTab(tab.name)} activeClassName={styles.active} key={tab.name}>{tab.text}</NavLink>)

  return (
    <div className={styles['me-container']}>
      <section className={styles.information}>
        <UserMetaContainer only id={myself.id}/>
        <Button className={styles['btn-upgrade']} disable><Link to="#">成为答主</Link></Button>
      </section>
      <section>
        <div className={styles.nav}>
          {tabLinks}
          <span className={styles['slider']}/>
        </div>
      </section>
      <Switch>
        <Route path={`/me/${tabs[0].name}`} render={() => <FilterQuestionList filter={tabs[0].name} userId={myself.id} type={tabs[0].type}/>}/>
        <Route path={`/me/${tabs[1].name}`} render={() => <FilterQuestionList filter={tabs[1].name} userId={myself.id} type={tabs[1].type}/>}/>
        <Route path={`/me/${tabs[2].name}`} render={() => <FilterQuestionList filter={tabs[2].name} userId={myself.id} type={tabs[2].type}/>}/>
        <Route path="/me" render={() => <ForceRedirect to={`/me/${page.lastTab}`}/>}/>
      </Switch>
      <PageLoading isLoading={page.loadingNum > 0}/>
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