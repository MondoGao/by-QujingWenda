import { commonFetchGet } from 'sources/utils'
import { user, users, questions } from 'sources/schemas'

export function getUsers(page = 1) {
  return commonFetchGet(`/api/v1/users?page=${page}`, users)
}

export function getUser(id) {
  if (!id) {
    throw new Error('无效的用户id')
  }

  return commonFetchGet(`/api/v1/users/${id}`, user)
}

// type = 1 问我的|2 我问的|3 我听过
export function getUserQuestions(id, page = 1, type = 1) {
  if (!id) {
    throw new Error('无效的用户id')
  }

  return commonFetchGet(`/api/v1/users/${id}/questions?type=${type}&page=${page}`, questions)
}
