import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function hot(state = { isLoading: false, page: 0, list: [], isLoadComplete: false }, action) {
  switch (action.type) {
    case consts.UPDATE_PAGE_HOT_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    case consts.APPEND_QUESTIONS:
      const appendList = action.payload.result.filter(id => !state.list.includes(id))
      if (appendList.length === 0) {
        return {
          ...state,
          isLoadComplete: true
        }
      }

      return {
        ...state,
        list: [
          ...state.list,
          ...appendList
        ]
      }
    default:
      return state
  }
}

function users(state = { isLoading: false, page: 0, list: [], isLoadComplete: false }, action) {
  switch (action.type) {
    case consts.UPDATE_PAGE_USERS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    case consts.APPEND_USERS:
      const appendList = action.payload.result.filter(id => !state.list.includes(id))
      if (appendList.length === 0) {
        return {
          ...state,
          isLoadComplete: true
        }
      }

      return {
        ...state,
        list: [
          ...state.list,
          ...appendList
        ]
      }
    default:
      return state
  }
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