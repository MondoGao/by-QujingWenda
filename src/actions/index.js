import * as consts from 'actions/consts'
import * as sources from 'sources'

const asyncActionsCreator = (type, payload) => ({
  type,
  payload
})

/**
 * {creator} 切换页面加载状态
 * @param {string} page 页面常量
 * @param {boolean} isLoading
 */
const togglePagesLoading = (page, isLoading) => ({
  type: consts[`UPDATE_PAGE_${page}_LOADING`],
  payload: {
    isLoading
  }
})

/**
 * {thunk} 增加问题
 * @return {Promise}
 */
export const appendQuestions = () => (dispatch, getState) => {
  const state = getState()
  const { page, isLoadingComplete } = state.pages.hot

  if (!isLoadingComplete) {
    dispatch(togglePagesLoading(consts.PAGES.HOT, true))
    return sources.getQuestions(page + 1)
      .then(normalizedData => {
        dispatch(asyncActionsCreator(consts.APPEND_QUESTIONS, normalizedData))

        dispatch(togglePagesLoading(consts.PAGES.HOT, false))
      })
  }
}

/**
 * {thunk} 向后添加用户
 * {Promise}
 */
export const appendUsers = () => (dispatch, getState) => {
  const state = getState()
  const { page, isLoadingComplete } = state.pages.users

  if (!isLoadingComplete) {
    dispatch(togglePagesLoading(consts.PAGES.USERS, true))
    return sources.getUsers(page + 1)
      .then(normalizedData => {
        dispatch(asyncActionsCreator(consts.APPEND_USERS, normalizedData))

        dispatch(togglePagesLoading(consts.PAGES.USERS, false))
      })
  }
}

/**
 * {thunk} 添加用户所属的问题
 * @param {string|number} id 用户 id
 * @param {asked|asking|paid} filter
 * @param {1|2|3=} type 1 问我的|2 我问的|3 我听过
 * @return {Promise}
 */
export const appendUserQuestions = (id, filter, type = 1) => (dispatch, getState) => {
  const state = getState()
  const prevPage = state.entities.users[id][filter] ? state.entities.users[id][filter].page : 0

  return sources.getUserQuestions(id, prevPage, type)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.APPEND_USER_QUESTIONS, {...normalizedData, type, filter, userId: id}))
    })
}

/**
 * {thunk} 刷新首页问题列表
 * @return {Promise}
 */
export const refreshQuestions = () => dispatch => {
  dispatch(togglePagesLoading(consts.PAGES.HOT, true))
  return sources.getQuestions(1)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_QUESTIONS, normalizedData))

      dispatch(togglePagesLoading(consts.PAGES.HOT, false))
    })
}

/**
 * {thunk} 刷新用户页面列表
 * @return {Promise}
 */
export const refreshUsers = () => dispatch => {
  dispatch(togglePagesLoading(consts.PAGES.HOT, true))
  return sources.getUsers(1)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_USERS, normalizedData))

      dispatch(togglePagesLoading(consts.PAGES.HOT, false))
    })
}

/**
 * {thunk} 刷新用户所属的问题列表
 * @param {string|number} id 用户 id
 * @param {asked|asking|paid} filter
 * @param {1|2|3=} type 1 问我的|2 我问的|3 我听过
 * @return {Promise}
 */
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

  return sources.getUserQuestions(id, 1, type)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_USER_QUESTIONS, {...normalizedData, type, filter, userId: id}))
  
      if (!notLoadingFlag) {
        dispatch(togglePagesLoading(loadPage, false))
      }
    })
}

/**
 * {thunk} 刷新单个用户信息
 * @param id
 * @return {Promise}
 */
export const refreshUser = id => (dispatch, getState) => {
  return sources.getUser(id)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_USER, normalizedData))
    })
}

/**
 * {thunk} 刷新学校信息
 * @param id
 * @return {Promise}
 */
export const refreshSchool = id => (dispatch, getState) => {
  const { myself } = getState()
  
  if (myself.id === id) {
    dispatch(togglePagesLoading(consts.PAGES.ME, true))
  }
  
  return sources.getSchool(id)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.REFRESH_SCHOOL, normalizedData))
      
      if (myself.id === id) {
        dispatch(togglePagesLoading(consts.PAGES.ME, false))
      }
    })
}

/**
 * {thunk} 登陆并获取用户信息
 * @param {string} code 微信登陆 code
 * @return {Promise}
 */
export const login = code => (dispatch, getState) => {
  return sources.login(code)
    .then(normalizedData => {
      dispatch(asyncActionsCreator(consts.LOGIN_IN, normalizedData))
    })
}

/**
 * {creator} 更新正在播放的音频
 * @param id
 * @return {action}
 */
export const updatePlayingAudio = id => ({
  type: consts.UPDATE_PLAYING_AUDIO,
  payload: {
    id
  }
})

/**
 * {creator} 更新我的页面上个访问 tab
 * @param {asked|asking|paid} lastTab
 * @return {action}
 */
export const updateLastTab = lastTab => ({
  type: consts.UPDATE_PAGE_ME,
  payload: {
    lastTab
  }
})

