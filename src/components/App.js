import React from 'react';

import {
  Route,
  Redirect
} from 'react-router-dom';

import styles from './App.scss';

import Nav from 'components/Nav'

const App = (props) => (
  <div>
    <Route path="/" exact render={() => <div>热门</div>}/>
    <Route path="/users" render={() => <div>答主</div>}/>
    <Route path="/me" render={() => <div>我的</div>}/>
    <Nav/>
  </div>
)

export default App;