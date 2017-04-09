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
  const { page, isLoadingComplete } = state.pages.hot

  if (!isLoadingComplete) {
    dispatch(togglePagesLoading(consts.PAGES.HOT, true))
    sources.getQuestions(page + 1)
      .then(normalizedData => {
        dispatch(asyncActionsCreator(consts.APPEND_QUESTIONS, normalizedData))

        dispatch(togglePagesLoading(consts.PAGES.HOT, false))
      })
  }
}

export const appendUsers = () => (dispatch, getState) => {
  const state = getState()
  const { page, isLoadingComplete } = state.pages.users

  if (!isLoadingComplete) {
    dispatch(togglePagesLoading(consts.PAGES.USERS, true))
    sources.getUsers(page + 1)
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

export const refreshQuestions = () => dispatch => {
  dispatch(togglePagesLoading(consts.PAGES.HOT, true))
  sources.getQuestions(1)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_QUESTIONS, normalizedData))

      dispatch(togglePagesLoading(consts.PAGES.HOT, false))
    })
}

export const refreshUsers = () => dispatch => {
  dispatch(togglePagesLoading(consts.PAGES.HOT, true))
  sources.getUsers(1)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_USERS, normalizedData))

      dispatch(togglePagesLoading(consts.PAGES.HOT, false))
    })
}

export const refreshUserQuestions = (id, filter, type) => (dispatch, getState) => {
  const state = getState()
  const { myself } = state
  const loadPage = myself.id === id ? consts.PAGES.ME : consts.PAGES.USERS
  let notLoadingFlag = false
  
  if (state.entities.userQuestions[id][filter].list.length > 0) {
    notLoadingFlag = true
  }
  
  if (!notLoadingFlag) {
    dispatch(togglePagesLoading(loadPage, true))
  }

  sources.getUserQuestions(id, 1, type)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_USER_QUESTIONS, {...normalizedData, type, filter, userId: id}))
  
      if (!notLoadingFlag) {
        dispatch(togglePagesLoading(loadPage, false))
      }
    })
}

export const refreshUser = id => (dispatch, getState) => {
  sources.getUser(id)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_USER, normalizedData))
    })
}

export const refreshSchool = id => (dispatch, getState) => {
  const { myself } = getState()
  
  if (myself.id === id) {
    dispatch(togglePagesLoading(consts.PAGES.ME, true))
  }
  
  sources.getSchool(id)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_SCHOOL, normalizedData))
      
      if (myself.id === id) {
        dispatch(togglePagesLoading(consts.PAGES.ME, false))
      }
    })
}

export const updatePlayingAudio = id => ({
  type: consts.UPDATE_PLAYING_AUDIO,
  payload: {
    id
  }
})

export const updateLastTab = lastTab => ({
  type: consts.UPDATE_PAGE_ME,
  payload: {
    lastTab
  }
})