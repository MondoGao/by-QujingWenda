import React from 'react'
import { connect } from 'react-redux'

import QuestionList from 'components/QuestionList'
import { addQuestions, toggleRequest } from 'actions'
import * as consts from 'actions/consts'
import { getQuestions }  from 'sources'

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
    data: state.entities.questions,
    isLoading: state.pages.hot.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData() {
      dispatch(toggleRequest(consts.PAGES.HOT, true))
      getQuestions().then((data) => {
        dispatch(addQuestions(data))
        dispatch(toggleRequest(consts.PAGES.HOT, false))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer)