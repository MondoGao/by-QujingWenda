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

const filterInitialState = () => ({
  isLoadComplete: false,
  list: [],
  page: 1
})

const userQuestions = (state = {}, action) => {
  switch (action.type) {
    case consts.APPEND_QUESTIONS:
    case consts.APPEND_USERS:
    case consts.REFRESH_USER: {
      const users = action.payload.entities.users ? action.payload.entities.users : {}
      const hadUsers = Object.keys(state)
      const newUsers = Object.keys(users).filter(userId => !hadUsers.includes(userId))
      let nextState = {
        ...state
      }
      newUsers.map(userId => nextState[userId] = {
        asked: filterInitialState(),
        asking: filterInitialState(),
        paid: filterInitialState()
      })
  
      return nextState
    }
    case consts.APPEND_USER_QUESTIONS:
    case consts.REFRESH_USER_QUESTIONS: {
      const userQuestion = state[action.payload.userId]
      const filter = action.payload.filter
      const page = state[action.payload.userId][filter].page
      const isLoadComplete = action.payload.result.length > 0
      
      return {
        ...state,
        [action.payload.userId]: {
          ...userQuestion,
          [filter]: {
            list: [
              ...userQuestion[filter].list,
              ...action.payload.result.filter(questionId => !userQuestion[filter].list.includes(questionId))
            ],
            isLoadComplete,
            page: isLoadComplete ? page : page + 1
          }
        }
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