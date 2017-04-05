import React from 'react'
import { connect } from 'react-redux'

import { appendQuestions } from 'actions'

import EntityList from 'components/EntityList'
import QuestionItemContainer from 'containers/QuestionItemContainer'

class HotPageContainer extends React.Component {
  constructor(props) {
    super (props)
  }

  handleScroll = (e) => {
    if (!this.props.isLoading && e.target.scrollHeight - window.innerHeight - e.target.scrollTop < 100) {
      this.props.appendData()
    }
  }

  render() {
    return (
      <EntityList
        onListScroll={this.handleScroll}
        entityIds={this.props.questionsIds} entity={QuestionItemContainer}/>
    )
  }

  componentDidMount() {
    if (!this.props.page.isLoadComplete) {
      this.props.appendData()
    }
  }
}

function mapStateToProps(state) {
  return {
    questionsIds: state.pages.hot.list,
    page: state.pages.hot
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