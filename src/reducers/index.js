import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questions(state = [], action) {
  if (action.type === consts.ADD_QUESTIONS) {
    return [...state,  ...action.data]
  }
  return state
}

function hotPage(state = {isLoading: false}, action) {
  switch (action.type) {
    case consts.REQUEST_TOGGLE:
      if (action.page === consts.PAGES.HOT) {
        return Object.assign({}, state, {
          isLoading: action.isLoading
        })
      }
      break
    default:
      return state
  }
}

const combinedReducer = combineReducers({
  questions,
  hotPage
})

export default combinedReducer