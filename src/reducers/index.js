import { combineReducers } from 'redux'
import * as consts from 'actions/consts'
import entities from 'reducers/entities'
import pages from 'reducers/pages'
import myself from 'reducers/myself'

const combinedReducers = combineReducers({
  myself,
  entities,
  pages
})

export default combinedReducers

if (module.hot) {
  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers');
    store.replaceReducer(nextReducer);
  })
}