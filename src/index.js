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

import App from 'components/App';

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

let store = createStore(
  storage.reducer(reducers),
  applyMiddleware(
    thunk,
    storageMiddleware,
    logger
  )
)

const storageLoad = storage.createLoader(storageEngine)
storageLoad(store)
  .then(newState => console.log('加载本地状态'))

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
}