import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function hot(state = {isLoading: false, page: 0, list: [], isLoadComplete: false}, action) {
  switch (action.type) {
    case consts.UPDATE_PAGE_HOT_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    case consts.APPEND_QUESTIONS:
      return {
        ...state,
        list: [
          ...state.list,
          ...action.payload.result
        ]
      }
    default:
      return state
  }
}

function users(state = { page: 0 }) {
  return state
}

function me(state = {isLoading: false, lastTab: 'asked'}, action) {
  switch (action.type) {
    case consts.UPDATE_PAGE_ME_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    case consts.UPDATE_PAGE_ME:
      return {
        ...state,
        lastTab: action.payload.lastTab
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