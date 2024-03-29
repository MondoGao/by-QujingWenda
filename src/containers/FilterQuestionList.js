import React from 'react'
import { connect } from 'react-redux'
import { appendUserQuestions, refreshUserQuestions } from 'actions'
import { promiseCatch } from 'scripts/utils'

import EntityList from 'components/EntityList'

class FilterQuestionList extends React.Component {
  render() {
    return <EntityList entityIds={this.props.questionIds}/>
  }

  componentDidMount() {
    this.props.refreshData(this.props.userId, this.props.filter, this.props.type)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.props.refreshData(this.props.userId, this.props.filter, this.props.type)
    }
  }
}

FilterQuestionList.PropTypes = {
  filter: React.PropTypes.oneOf(['asked', 'asking', 'paid']),
  questionIds: React.PropTypes.array,
  type: React.PropTypes.number,
  userId: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
}


const mapState = (state, ownProps) => ({
  questionIds: state.entities.userQuestions[ownProps.userId][ownProps.filter].list
})

const mapDispatch = (dispatch) => ({
  appendData(...args) {
    return dispatch(appendUserQuestions(...args))
      .catch(promiseCatch)
  },

  refreshData(...args) {
    return dispatch(refreshUserQuestions(...args))
      .catch(promiseCatch)
  }
})

const FilterQuestionListContainer = connect(mapState, mapDispatch)(FilterQuestionList)

export default FilterQuestionListContainer