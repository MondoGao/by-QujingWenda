import React from 'react'
import { connect } from 'react-redux'

import QuestionList from 'components/QuestionList'
import { addQuestions, addUsers, toggleRequest } from 'actions'
import * as consts from 'actions/consts'
import { getUsers2 }  from 'sources'

class QuestionListContainer extends React.Component {
  constructor(props) {
    super (props)
  }

  componentWillMount() {
    if (this.props.data.length < 1) {
      this.props.getData()
    }
  }

  handleScroll = (e) => {
    if (!this.props.isLoading && e.target.scrollHeight - window.innerHeight - e.target.scrollTop < 100) {
      this.props.getData()
    }
  }

  render() {
    return (
      <QuestionList ref={(list) => this.list = list} onListScroll={this.handleScroll} data={this.props.data}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: Object.keys(state.entities.questions).map((key) => ({
      ...state.entities.questions[key],
      answerUser: state.entities.users[state.entities.questions[key].answerUser],
      askUser: state.entities.users[state.entities.questions[key].askUser]
    })),
    isLoading: state.pages.hot.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData() {
      dispatch(toggleRequest(consts.PAGES.HOT, true))
      getUsers2().then((data) => {
        dispatch(addUsers(data))
        dispatch(toggleRequest(consts.PAGES.HOT, false))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer)