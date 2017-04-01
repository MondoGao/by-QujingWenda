import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questions(state = [], action) {
  if (action.type === consts.ADD_QUESTIONS) {
    return [...state,  ...action.data]
  }
  return state
}

function users(state = {}, action) {
  switch (action.type){
    case consts.ADD_USERS:
      return {...state,  ...action.payload.entities.users}
    default:
      return state
  }
}

function schools(state = {}, action) {
  switch (action.type) {
    case consts.ADD_USERS:
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