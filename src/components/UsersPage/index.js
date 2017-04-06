import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import styles from './UsersPage.scss'

import EntityList from 'components/EntityList'
import UserItemContainer from 'containers/UserItemContainer'
import UserMetaContainer from 'containers/UserMetaContainer'
import Button from 'components/Button'
import FilterQuestionList from 'containers/FilterQuestionList'
import LoadingIcon from 'components/LoadingIcon'

class UsersPage extends React.Component {
  render() {
    return (
      <div className={styles.fullscreen}>
        <Switch>
          <Route path={`/users/${this.props.myself.id}`}>
            <Redirect to="/me"/>
          </Route>
          <Route path="/users/:id" component={UserPage}/>
          <Route path="/users">
            <EntityList entityIds={this.props.page.list} entity={UserItemContainer} fullscreen/>
          </Route>
        </Switch>
        <LoadingIcon isLoading={this.props.page.isLoading}/>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.page.page === 0) {
      this.props.appendData()
    }
  }
}

const UserPage = ({ match }) => (
  <div>
    <UserMetaContainer id={match.params.id} only/>
    <div className={styles['ask-container']}>
      <textarea id={styles.question} placeholder="在此输入你的问题。如果回答被别人收听，你将得到收入的一半。若超过48小时未被回答，费用会退回你的微信钱包。"/>
      <Button size="lg">¥1 提个问题</Button>
    </div>
    <FilterQuestionList filter="asked" type={1} userId={match.params.id}/>
  </div>
)

export default UsersPage