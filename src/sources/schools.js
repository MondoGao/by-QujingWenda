import { commonFetchGet } from 'sources/utils'
import { school } from 'sources/schemas'

export function getSchool(id) {
  return commonFetchGet(`/api/v1/schools/${id}`, school)
}