import * as consts from 'actions/consts'

export function addQuestions(data)  {
  return {
    type: consts.addQuestions,
    data
  }
}