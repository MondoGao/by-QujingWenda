import React from 'react'
import { connect } from 'react-redux'

import QuestionList from 'components/QuestionList'

const getFilterQuestions = (state, filter, userId) => {
  const questions = state.entities.questions
  const users = state.entities.users
  const me = users[userId]
  return me[filter].map((quesId) => ({
    ...questions[quesId],
    answerUser: users[questions[quesId].answerUser],
    askUser: users[questions[quesId].askUser]
  }))
}

const mapState = (state, ownProps) => ({
  data: getFilterQuestions(state, ownProps.filter, ownProps.userId)
})

const FilterQuestionList = connect(mapState)(QuestionList)

FilterQuestionList.PropTypes = {
  filter: React.PropTypes.oneOf(['askByMe', 'answerTo', 'listenTo']),
  userId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
}

export default FilterQuestionList