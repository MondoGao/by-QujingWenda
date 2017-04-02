import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function hot(state = {isLoading: false}, action) {
  switch (action.type) {
    case consts.REQUEST_TOGGLE:
      if (action.page === consts.PAGES.HOT) {
        return Object.assign({}, state, {
          isLoading: action.isLoading
        })
      }
      break
    default:
      return state
  }
}

function me(state = {isLoading: false, lastTab: 'asked'}, action) {
  switch (action.type) {
    case consts.UPDATE_LAST_TAB:
      return {...state, lastTab: action.payload}
    default:
      return state
  }
}

const pages = combineReducers({
  hot,
  me
})

export default pages