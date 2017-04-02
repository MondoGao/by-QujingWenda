import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import UserListContainer from 'containers/UserListContainer'
import UserMetaContainer from 'containers/UserMetaContainer'

const UsersPage = ({ myself }) => (
  <div>
    <Switch>
      <Route path={`/users/${myself.id}`}>
        <Redirect to="/me"/>
      </Route>
      <Route path="/users/:id" render={({ match }) => <UserMetaContainer id={match.params.id} only/>}/>
      <Route path="/users">
        <UserListContainer/>
      </Route>
    </Switch>
  </div>
)

export default UsersPage