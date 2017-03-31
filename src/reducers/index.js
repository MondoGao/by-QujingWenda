import { combineReducers } from 'redux'

function questionById(state = [], action) {
  if (action.type == 'ADD_QUESTIONS') {
    return [...state,  ...action.data]
  }
  return state
}

const combinedReducer = combineReducers({
  questionById
})

export default combinedReducer