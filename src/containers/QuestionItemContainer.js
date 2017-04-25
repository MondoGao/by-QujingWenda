import React from 'react'
import { connect } from 'react-redux'
import { refreshUser } from 'actions'
import QuestionsItem from 'components/QuestionItem'

const mapState = (state, ownProps) => {
  const question = state.entities.questions[ownProps.entityId]
  const users =  state.entities.users

  return {
    myself: state.myself,
    answerer: users[question.answererId],
    asker: users[question.askerId],
    question
  }
}

const mapDispatch = (dispatch) => ({
  getUser(id) {
    return dispatch(refreshUser(id))
      .catch(promiseCatch)
  }
})

export default connect(mapState, mapDispatch)(QuestionsItem)
