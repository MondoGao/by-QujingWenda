import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questions(state = [], action) {
  if (action.type === consts.ADD_QUESTIONS) {
    return [...state,  ...action.data]
  }
  return state
}

function users(state = {}, action) {
  if (action.type === consts.ADD_USERS) {
    return {...state,  ...action.payload.entities.users}
  }
  return state
}

const entities = combineReducers({
  questions,
  users
})

export default entities