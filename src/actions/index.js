import * as consts from 'actions/consts'

export function addQuestions(data)  {
  return {
    type: consts.ADD_QUESTIONS,
    data
  }
}

export function toggleRequest(page, isLoading) {
  return {
    type: consts.REQUEST_TOGGLE,
    page,
    isLoading
  }
}