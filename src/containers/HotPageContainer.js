import React from 'react'
import { connect } from 'react-redux'

import { appendQuestions } from 'actions'

import EntityList from 'components/EntityList'
import QuestionItemContainer from 'containers/QuestionItemContainer'

class HotPageContainer extends React.Component {
  handleScroll = (e) => {
    if (!this.props.isLoading && e.target.scrollHeight - window.innerHeight - e.target.scrollTop < 100) {
      this.props.appendData()
    }
  }

  render() {
    return (
      <EntityList
        onListScroll={this.handleScroll}
        entityIds={this.props.page.list} entity={QuestionItemContainer}/>
    )
  }

  componentDidMount() {
    if (!this.props.page.isLoadComplete) {
      this.props.appendData()
    }
  }
}

const mapState = state => ({
  page: state.pages.hot
})

const mapDispatch = dispatch => ({
  appendData() {
    dispatch(appendQuestions())
  }
})

export default connect(mapState, mapDispatch)(HotPageContainer)