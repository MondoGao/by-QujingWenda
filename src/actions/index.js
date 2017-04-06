import * as consts from 'actions/consts'
import * as sources from 'sources'

const asyncActionsCreator = (type, payload) => ({
  type,
  payload
})

const togglePagesLoading = (page, isLoading) => ({
  type: consts[`UPDATE_PAGE_${page}_LOADING`],
  payload: {
    isLoading
  }
})

export const appendQuestions = () => (dispatch, getState) => {
  const state = getState()
  const { prevPage, isLoadingComplete } = state.pages.hot

  if (!isLoadingComplete) {
    dispatch(togglePagesLoading(consts.PAGES.HOT, true))
    sources.getQuestions(prevPage + 1)
      .then(normalizedData => {
        dispatch(asyncActionsCreator(consts.APPEND_QUESTIONS, normalizedData))

        dispatch(togglePagesLoading(consts.PAGES.HOT, false))
      })
  }
}

export const appendUsers = () => (dispatch, getState) => {
  const state = getState()
  const { prevPage, isLoadingComplete } = state.pages.users

  if (!isLoadingComplete) {
    dispatch(togglePagesLoading(consts.PAGES.USERS, true))
    sources.getUsers(prevPage + 1)
      .then(normalizedData => {
        dispatch(asyncActionsCreator(consts.APPEND_USERS, normalizedData))

        dispatch(togglePagesLoading(consts.PAGES.USERS, false))
      })
  }
}

export const appendUserQuestions = (id, filter, type) => (dispatch, getState) => {
  const state = getState()
  const prevPage = state.entities.users[id][filter] ? state.entities.users[id][filter].page : 0

  sources.getUserQuestions(id, prevPage, type)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.APPEND_USER_QUESTIONS, {...normalizedData, type, filter, userId: id}))
    })
}

export const refreshUser = id => (dispatch, getState) => {
  sources.getUser(id)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_USER, normalizedData))
    })
}

export const refreshSchool = id => dispatch => {
  sources.getSchool(id)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_SCHOOL, normalizedData))
    })
}

export const updateLastTab = (lastTab) => ({
  type: consts.UPDATE_PAGE_ME,
  payload: {
    lastTab
  }
})