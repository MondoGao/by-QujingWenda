import { combineReducers } from 'redux'
import * as consts from 'actions/consts'

function questions(state = {}, action) {
  switch (action.type) {
    case consts.APPEND_QUESTIONS:
    case consts.REFRESH_QUESTION:
    case consts.APPEND_USER_QUESTIONS:
    case consts.REFRESH_USER_QUESTIONS:
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
    case consts.APPEND_USER_QUESTIONS:
    case consts.REFRESH_USER_QUESTIONS:
      return {
        ...state,
        ...action.payload.entities.users
      }
    default:
      return state
  }
}

const questionList = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const userQuestions = (state = {}, action) => {
  switch (action.type) {
    case consts.APPEND_QUESTIONS:
    case consts.APPEND_USERS:
    case consts.REFRESH_USER:
      const hadUsers = Object.keys(state)
      const newUsers = Object.keys(action.payload.entities.users).filter(userId => !hadUsers.includes(userId))
      let nextState = {
        ...state
      }
      newUsers.map(userId => nextState[userId] = {})
      
      return nextState
    case consts.APPEND_USER_QUESTIONS:
      const userQuestion = state[action.payload.userId]
      const filter = action.payload.filter
      return {
        ...state,
        [action.payload.userId]: {
          ...userQuestion,
          [filter]: [
            ...userQuestion[filter],
            ...action.payload.result
          ]
        }
      }
    case consts.REFRESH_USER_QUESTIONS:
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          [action.payload.filter]: action.payload.result
        }
      }
    default:
      return state
  }
}

const schools = (state = {}, action) => {
  switch (action.type) {
    case consts.APPEND_USERS:
    case consts.REFRESH_USER:
    case consts.REFRESH_SCHOOL:
      return {...state, ...action.payload.entities.schools}
    default:
      return state
  }
}

const entities = combineReducers({
  questions,
  users,
  userQuestions,
  schools
})

export default entities