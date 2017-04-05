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

export const appendQuestions = page => (dispatch, getState) => {
  let prevPage = getState().pages.hot.page
  dispatch(togglePagesLoading(consts.PAGES.HOT, true))
  sources.getQuestions(prevPage + 1)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.APPEND_QUESTIONS, normalizedData))

      dispatch(togglePagesLoading(consts.PAGES.HOT, false))
    })
}

export function updateLastTab(tabUrl) {
  return {
    type: consts.UPDATE_LAST_TAB,
    payload: tabUrl
  }
}