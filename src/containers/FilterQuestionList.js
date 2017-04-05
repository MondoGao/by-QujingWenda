import React from 'react'
import { connect } from 'react-redux'
import EntityList from 'components/EntityList'

const getFilterQuestions = (state, filter, userId) => {
  const questions = state.entities.questions
  const users = state.entities.users
  const user = users[userId]

  switch (filter) {
    case 'askByMe':
      return Object.keys(questions).map(key => {
        let question = questions[key]
        if (question.askerId == userId) {
          return {
            ...question,
            asker: user,
            answerer: users[question.answererId]
          }
        }
      })
    case 'answerTo':
      return Object.keys(questions).map(key => {
        let question = questions[key]
        if (question.answererId == userId) {
          return {
            ...question,
            answerer: user,
            asker: users[question.askerId]
          }
        }
      })
    case 'listenTo':
      return Object.keys(questions).map(key => {
        let question = questions[key]
        if (question.isPaid) {
          return {
            ...question,
            asker: users[question.askerId],
            answerer: users[question.answererId]
          }
        }
      })
  }
}

const mapState = (state, ownProps) => ({
  data: getFilterQuestions(state, ownProps.filter, ownProps.userId)
})

const mapDispatch = (dispatch) => ({

})

const FilterEntityList = connect(mapState)(EntityList)

FilterEntityList.PropTypes = {
  filter: React.PropTypes.oneOf(['askByMe', 'answerTo', 'listenTo']),
  userId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
}

export default FilterEntityList