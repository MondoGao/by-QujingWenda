import * as consts from 'actions/consts'

export function addQuestions(data)  {
  return {
    type: consts.ADD_QUESTIONS,
    data
  }
}

export function addUsers(data) {
  return {
    type: consts.ADD_USERS,
    payload: data
  }
}

export function toggleRequest(page, isLoading) {
  return {
    type: consts.REQUEST_TOGGLE,
    page,
    isLoading
  }
}

export function updateLastTab(tabUrl) {
  return {
    type: consts.UPDATE_LAST_TAB,
    payload: tabUrl
  }
}