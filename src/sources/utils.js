import { normalize } from 'normalizr'

export function commonFetchGet(url, schema) {
  return fetch(url)
    .then(data => data.json())
    .then(data => normalize(data, schema))
}
