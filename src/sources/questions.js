import { commonFetchGet } from 'sources/utils'
import { questions, question } from 'sources/schemas'

export function getQuestions(page = 1) {
  return commonFetchGet(`/api/v1/questions?_page=${page}`, questions)
}

export function getQuestion(id) {
  if (!id) {
    throw new Error('无效的问题id')
  }

  return commonFetchGet(`/api/v1/questions/${id}`, question)
}