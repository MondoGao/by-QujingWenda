import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import EntityList from 'components/EntityList'
import UserItemContainer from 'containers/UserItemContainer'
import UserMetaContainer from 'containers/UserMetaContainer'
import Button from 'components/Button'

class UsersPage extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`/users/${this.props.myself.id}`}>
            <Redirect to="/me"/>
          </Route>
          <Route path="/users/:id" component={UserPage}/>
          <Route path="/users">
            <EntityList entityIds={this.props.page.list} entity={UserItemContainer} fullscreen/>
          </Route>
        </Switch>
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
    <div>
      <Button size="lg">¥1 提个问题</Button>
    </div>
  </div>
)

export default UsersPage