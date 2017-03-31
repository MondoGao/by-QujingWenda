import React from 'react'
import { connect } from 'react-redux'

import QuestionList from 'components/QuestionList'
import { addQuestions } from 'actions'
import { getQuestions }  from 'sources'

class QuestionListContainer extends React.Component {
  constructor(props) {
    super (props)
  }

  componentWillMount() {
    this.props.getData()
  }

  render() {
    return (
      <QuestionList data={this.props.data}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.questionById
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData() {
      getQuestions().then((data) => {
        dispatch(addQuestions(data))
        setTimeout(() => dispatch(addQuestions(data)), 2000)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer)