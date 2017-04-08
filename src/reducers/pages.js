import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

const hot = (state = { isLoading: false, page: 0, list: [], isLoadComplete: false }, action) => {
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
        ],
        page: state.page + 1
      }
    case consts.REFRESH_QUESTIONS:
      return {
        ...state,
        list: action.payload.result,
        page: 1
      }
    default:
      return state
  }
}

const users = (state = { isLoading: false, page: 0, list: [], isLoadComplete: false }, action) => {
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
        ],
        page: state.page + 1
      }
    case consts.REFRESH_USERS:
      return {
        ...state,
        list: action.payload.result,
        page: 1
      }
    default:
      return state
  }
}

const me = (state = {isLoading: false, lastTab: 'asked'}, action) => {
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

const playingAudioId = (state = -1, action) => {
  if (action.type === consts.UPDATE_PLAYING_AUDIO) {
    return action.payload.id
  }
  return state
}

const pages = combineReducers({
  hot,
  users,
  me,
  playingAudioId
})

export default pages