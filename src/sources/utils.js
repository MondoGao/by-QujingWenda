import { normalize } from 'normalizr'

/**
 * 通用 Fetch Get 方法
 * @param {string} url URl
 * @param {schema} schema 用于标准化返回数据的 schema
 * @return {Promise}
 */
export const commonFetchGet = (url, schema) => (
  fetch(url)
    .then(data => data.json())
    .then(data => normalize(data, schema))
)