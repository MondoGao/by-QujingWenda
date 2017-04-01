import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import './App.scss';

import Nav from 'components/Nav'
import QuestionListContainer from 'containers/QuestionListContainer'
import UserListContainer from 'containers/UserListContainer'

const App = (props) => (
  <div>
    <Route path="/" exact render={() => <QuestionListContainer/>}/>
    <Route path="/users" render={() => <UserListContainer/>}/>
    <Route path="/me" render={() => <div>我的</div>}/>
    <Nav/>
  </div>
)

export default App;