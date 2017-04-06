import React from 'react'
import { connect } from 'react-redux'
import { appendUserQuestions } from 'actions'
import EntityList from 'components/EntityList'

class FilterQuestionList extends React.Component {
  render() {
    return <EntityList entityIds={this.props.questionIds}/>
  }

  componentDidMount() {
    this.props.getData(this.props.userId, this.props.filter, this.props.type)
  }
}

FilterQuestionList.PropTypes = {
  filter: React.PropTypes.oneOf(['asked', 'asking', 'paid']),
  questionIds: React.PropTypes.array,
  type: React.PropTypes.number,
  userId: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
}


const mapState = (state, ownProps) => ({
  questionIds: state.entities.users[ownProps.userId][ownProps.filter]
})

const mapDispatch = (dispatch) => ({
  getData(...args) {
    dispatch(appendUserQuestions(...args))
  }
})

const FilterQuestionListContainer = connect(mapState, mapDispatch)(FilterQuestionList)

export default FilterQuestionListContainer