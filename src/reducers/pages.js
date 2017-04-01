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

const pages = combineReducers({
  hot
})

export default pages