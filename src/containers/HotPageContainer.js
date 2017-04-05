import React from 'react'
import { connect } from 'react-redux'

import QuestionList from 'components/QuestionList'
import { appendQuestions } from 'actions'
import * as consts from 'actions/consts'

class HotPageContainer extends React.Component {
  constructor(props) {
    super (props)
  }

  componentWillMount() {
    if (this.props.questionsIds.length < 1) {
      this.props.appendData()
    }
  }

  handleScroll = (e) => {
    if (!this.props.isLoading && e.target.scrollHeight - window.innerHeight - e.target.scrollTop < 100) {
      this.props.appendData()
    }
  }

  render() {
    return (
      <QuestionList
        onListScroll={this.handleScroll}
        questionsIds={this.props.questionsIds}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    questionsIds: state.pages.hot.list,
    isLoading: state.pages.hot.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appendData(page = 1) {
      dispatch(appendQuestions(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotPageContainer)