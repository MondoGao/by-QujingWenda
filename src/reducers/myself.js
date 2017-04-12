import * as consts from 'actions/consts'

export default function myself(state = {}, action) {
  switch (action.type) {
    case consts.LOGIN_IN:
      return {
        id: action.payload.id
      }
    default:
      return state
  }
}