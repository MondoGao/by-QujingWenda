import * as consts from 'actions/consts'
import * as sources from 'sources'

const asyncActionsCreator = (type, payload) => ({
  type,
  payload
})

const togglePagesLoading = (page, isLoading) => ({
  type: consts[`UPDATE_PAGE_${page}`],
  payload: {
    isLoading
  }
})

export const appendQuestions = () => (dispatch, getState) => {
  let prevPage = getState().pages.hot.page
  dispatch(togglePagesLoading(consts.PAGES.HOT, true))
  sources.getQuestions(prevPage + 1)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.APPEND_QUESTIONS, normalizedData))

      dispatch(togglePagesLoading(consts.PAGES.HOT, false))
    })
}

export const appendUsers = () => (dispatch, getState) => {
  let prevPage = getState().pages.users.page

  dispatch(togglePagesLoading(consts.PAGES.USERS, true))
  sources.getUsers(prevPage + 1)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.APPEND_USERS, normalizedData))

      dispatch(togglePagesLoading(consts.PAGES.USERS, false))
    })
}

export const updateLastTab = (lastTab) => ({
  type: consts.UPDATE_PAGE_ME,
  payload: {
    lastTab
  }
})