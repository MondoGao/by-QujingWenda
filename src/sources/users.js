import { commonFetchGet, checkStatus } from 'sources/utils'
import { user, users, questions } from 'sources/schemas'

/**
 * 获取热度用户列表
 * @param {number=} page
 * @return {Promise}
 */
export const getUsers = (page = 1) => {
  return commonFetchGet(`/api/v1/users?_page=${page}`, users)
}

/**
 * 获取单个用户信息
 * @param {!string|number} id
 * @return {Promise}
 */
export const getUser = (id) => {
  if (!id) {
    throw new Error('无效的用户id')
  }

  return commonFetchGet(`/api/v1/users/${id}`, user)
}

/**
 * 获取所属用户的问题
 * @param {string|number} id 用户 id
 * @param {number=} page 页码
 * @param {1|2|3=} type 1 问我的|2 我问的|3 我听过
 * @return {Promise}
 */
export const getUserQuestions = (id, page = 1, type = 1) => {
  if (!id) {
    throw new Error('无效的用户id')
  }

  return commonFetchGet(`/api/v1/users/${id}/questions?type=${type}&page=${page}`, questions)
}

/**
 * 登陆并获取用户信息
 * @param {string} code 微信登陆代码
 * @return {Promise}
 */
export const login = code => (
  fetch(`/api/v1/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      code
    })
  })
    .then(checkStatus)
    .then(data => data.json())
    .then(data => getUser(data.id))
)