import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questions(state = {}, action) {
  switch (action.type) {
    case consts.ADD_USERS:
      return {...state,  ...action.payload.entities.questions}
    default:
      return state
  }
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