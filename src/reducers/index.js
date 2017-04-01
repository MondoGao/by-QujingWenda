import { combineReducers } from 'redux'
import * as consts from 'actions/consts'
import entities from 'reducers/entities'
import pages from 'reducers/pages'

const combinedReducers = combineReducers({
  entities,
  pages
})

export default combinedReducers