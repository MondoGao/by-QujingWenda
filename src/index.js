import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { AppContainer } from 'react-hot-loader';

import reducers from 'reducers/index'

import App from 'components/App';

let store = createStore(
  reducers,
  applyMiddleware(logger)
)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {Component}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(
  <Router>
    <Route path="/" component={App}/>
  </Router>
);

if (module.hot) {
  module.hot.accept('components/App', () => {
    render(
      <Router>
        <Route path="/" component={App}/>
      </Router>
    )
  })

  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers');
    store.replaceReducer(nextReducer);
  })
}