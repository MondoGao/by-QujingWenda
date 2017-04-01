import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questions(state = [], action) {
  if (action.type === consts.ADD_QUESTIONS) {
    return [...state,  ...action.data]
  }
  return state
}

const entities = combineReducers({
  questions
})

export default entities