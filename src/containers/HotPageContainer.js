import React from 'react'
import { connect } from 'react-redux'

import { appendQuestions } from 'actions'

import EntityList from 'components/EntityList'
import PageLoading from 'components/PageLoading'

class HotPageContainer extends React.Component {
  handleScroll = (e) => {
    if (!this.props.page.isLoadComplete && !this.props.page.isLoading && e.target.scrollHeight - window.innerHeight - e.target.scrollTop < 100) {
      this.props.appendData()
    }
  }

  render() {
    return (
      <div>
        <EntityList
          onListScroll={this.handleScroll}
          entityIds={this.props.page.list}
          fullscreen/>
        <PageLoading isLoading={this.props.page.loadingNum > 0}/>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.page.page === 0) {
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