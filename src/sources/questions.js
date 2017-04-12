import { commonFetchGet, checkStatus } from 'sources/utils'
import { questions, question } from 'sources/schemas'

/**
 * 获取首页的问题列表及其实体
 * @param {number=} page 页数
 * @return {Promise}
 */
export const getQuestions = (page = 1) => (
  commonFetchGet(`/api/v1/questions?_page=${page}`, questions)
)

/**
 * 获取单个问题的实体
 * @param {!(number | string)} id
 * @return {Promise}
 */
export const getQuestion = id => (
  commonFetchGet(`/api/v1/questions/${id}`, question)
)

/**
 * 创建新问题并直接拉回新问题信息，忽视付款步骤
 * @param {!string} content
 * @param {!(string|number)} answererId
 * @return {Promise}
 */
export const postQuestions = (content, answererId) => (
  fetch(`/api/v1/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      content,
      answererId
    })
  })
    .then(checkStatus)
    .then(data => data.json())
    .then(data => getQuestion(data.questionId))
)

/**
 * 变更一个问题的付款或回答状态
 * @param {!(string | number)} id 问题 id
 * @param {!number} type 变更请求的类别，1：付款；2：回答
 * @param {(string | number)=} mediaId 在 type = 2 时才需要
 * @return {Promise} type 1 返回订单详情，type 2 返回成功标记
 */
export const patchQuestion = (id, type, mediaId = undefined) => (
  fetch(`/api/v1/questions/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      id,
      type,
      mediaId
    })
      .then(checkStatus)
      .then(data => data.json())
      .then(data => getQuestion(id))
  })
)

