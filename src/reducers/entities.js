import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questions(state = {}, action) {
  switch (action.type) {
    case consts.APPEND_QUESTIONS:
    case consts.REFRESH_QUESTION:
      return {...state,  ...action.payload.entities.questions}
    default:
      return state
  }
}

function users(state = {}, action) {
  switch (action.type){
    case consts.APPEND_QUESTIONS:
    case consts.APPEND_USERS:
    case consts.REFRESH_USER:
      return {...state,  ...action.payload.entities.users}
    case consts.APPEND_USER_QUESTIONS:
      const user = state[action.payload.userId]
      const filter = action.payload.filter
      const list = user[filter] ? user[filter] : []
      let prevPage = user[filter] ? user[filter].page : 1

      let nextList = {
        [filter]: [
          ...list,
          ...action.payload.result
        ]
      }
      nextList[filter].page = prevPage + 1

      return {
        ...state,
        [action.payload.userId]: {
          ...user,
          ...nextList
        }
      }
    default:
      return state
  }
}

function schools(state = {}, action) {
  switch (action.type) {
    case consts.APPEND_USERS:
    case consts.REFRESH_USER:
      return {...state, ...action.payload.entities.schools}
    default:
      return state
  }
}

const entities = combineReducers({
  questions,
  users,
  schools
})

export default entities