import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import './App.scss';

import Nav from 'components/Nav'
import HotPageContainer from 'containers/HotPageContainer'
import MePageContainer from 'containers/MePageContainer'
import UsersPageContainer from 'containers/UsersPageContainer'

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      console.log('re-config wx')
    }
  }

  render() {
    return (
      <div>
        <Route path="/" exact component={HotPageContainer}/>
        <Route path="/users" component={UsersPageContainer}/>
        <Route path="/me" component={MePageContainer}/>
        <Nav/>
      </div>
    )
  }
}

export default App;