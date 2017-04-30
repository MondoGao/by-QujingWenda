import React from 'react'
import { connect } from 'react-redux'

import * as actions from 'actions'
import * as sources from 'sources'
import { promiseCatch } from 'scripts/utils'

import UsersPage from 'components/UsersPage'

const mapState = state => ({
  page: state.pages.users,
  myself: state.myself
})

const mapDispatch = dispatch => ({
  appendData() {
    return dispatch(actions.appendUsers())
      .catch(promiseCatch)
  },
  addQuestion(content, answererId) {
    return sources.postQuestions(content, answererId)
      .then(data => dispatch(actions.refreshQuestion(data.questionId)))
      .catch(promiseCatch)
  }
})

export default connect(mapState, mapDispatch)(UsersPage)
