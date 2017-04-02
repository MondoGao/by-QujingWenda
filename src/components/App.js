import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import './App.scss';

import Nav from 'components/Nav'
import HotPageContainer from 'containers/HotPageContainer.js'
import MePageContainer from 'containers/MePageContainer'
import UsersPageContainer from 'containers/UsersPageContainer'

const App = (props) => (
  <div>
    <Route path="/" exact render={() => <HotPageContainer/>}/>
    <Route path="/users" component={UsersPageContainer}/>
    <Route path="/me" component={MePageContainer}/>
    <Nav/>
  </div>
)

export default App;