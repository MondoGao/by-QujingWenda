import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import './App.scss';

import Nav from 'components/Nav'
import HotPageContainer from 'containers/HotPageContainer.js'
import UserListContainer from 'containers/UserListContainer'
import MePageContainer from 'containers/MePageContainer'

const App = (props) => (
  <div>
    <Route path="/" exact render={() => <HotPageContainer/>}/>
    <Route path="/users" render={() => <UserListContainer/>}/>
    <Route path="/me" component={MePageContainer}/>
    <Nav/>
  </div>
)

export default App;