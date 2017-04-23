import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader';
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import storageFilter from 'redux-storage-decorator-filter'
import storageDebounce from 'redux-storage-decorator-debounce'

import reducers from 'reducers/index'

import App from 'containers/App';

const storageEngine = storageFilter(
  storageDebounce(
    createEngine('qujing'),
    1500
  ),
  [
  
  ],
  [
    'myself',
    'pages'
  ]
)

const storageMiddleware = storage.createMiddleware(storageEngine)

let middlewares = [
  thunk,
  storageMiddleware
]

if (process.env.NODE_ENV === 'develop') {
  middlewares.push(logger)
}

let store = createStore(
  storage.reducer(reducers),
  applyMiddleware(...middlewares)
)

const storageLoad = storage.createLoader(storageEngine)
storageLoad(store)
  .then(newState => {
    if (process.env.NODE_ENV === 'develop') {
      console.log('加载本地实体状态完毕')
    }
  })

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
  module.hot.accept('containers/App', () => {
    render(
      <Router>
        <Route path="/" component={App}/>
      </Router>
    )
  })
}