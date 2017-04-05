import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function hot(state = {isLoading: false, page: 0}, action) {
  switch (action.type) {
    case consts.UPDATE_PAGE_HOT:
      return Object.assign({}, state, {
        isLoading: action.payload.isLoading
      })
      break
    default:
      return state
  }
}

function users(state = { page: 0 }) {
  return state
}

function me(state = {isLoading: false, lastTab: 'asked'}, action) {
  switch (action.type) {
    case consts.UPDATE_PAGE_ME:
      let lastTab = action.payload.lastTab ? action.payload.lastTab : state.lastTab
      let isLoading = action.payload.isLoading ? action.payload.isLoading : state.isLoading

      return {
        ...state,
        lastTab,
        isLoading
      }
    default:
      return state
  }
}

const pages = combineReducers({
  hot,
  users,
  me
})

export default pages