import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

const loadingNum = (state = 0, action) => {
  let loadingNum = state
  if (action.payload.isLoading) {
    loadingNum++
  } else {
    loadingNum--
  }
  return loadingNum
}

const hot = (state = { loadingNum: 0, page: 0, list: [], isLoadComplete: false }, action) => {
  switch (action.type) {
    case consts.UPDATE_PAGE_HOT_LOADING:
      return {
        ...state,
        loadingNum: loadingNum(state.loadingNum, action)
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

const users = (state = { loadingNum: 0, page: 0, list: [], isLoadComplete: false }, action) => {
  switch (action.type) {
    case consts.UPDATE_PAGE_USERS_LOADING:
      return {
        ...state,
        loadingNum: loadingNum(state.loadingNum, action)
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

const me = (state = { loadingNum: 0, lastTab: 'asked' }, action) => {
  switch (action.type) {
    case consts.UPDATE_PAGE_ME_LOADING:
      return {
        ...state,
        loadingNum: loadingNum(state.loadingNum, action)
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