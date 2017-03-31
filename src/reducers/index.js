import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questionById(state = [], action) {
  if (action.type == consts.addQuestions) {
    return [...state,  ...action.data]
  }
  return state
}

const combinedReducer = combineReducers({
  questionById
})

export default combinedReducer