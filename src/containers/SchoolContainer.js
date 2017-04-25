import React from 'react'
import { connect } from 'react-redux'
import { refreshSchool } from 'actions'
import { promiseCatch } from 'scripts/utils'

class SchoolContainer extends React.Component {
  render() {
    if (!this.props.school){
      return null
    }
    return <span>{this.props.school.name}</span>
  }

  componentDidMount() {
    if (!this.props.school) {
      this.props.appendData()
    }
  }
}

const mapState = (state, ownProps) => ({
  school: state.entities.schools[ownProps.id]
})

const mapDispatch = (dispatch, ownProps) => ({
  appendData() {
    return dispatch(refreshSchool(ownProps.id))
      .catch(promiseCatch)
  }
})

export default connect(mapState, mapDispatch)(SchoolContainer)