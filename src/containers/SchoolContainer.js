import React from 'react'
import { connect } from 'react-redux'
import { refreshSchool } from 'actions'

class SchoolContainer extends React.Component {
  render() {
    if (!this.props.school){
      return null
    }
    return <span>{this.props.school.name}</span>
  }

  componentDidMount() {
    if (!this.props.school) {
      this.props.getData()
    }
  }
}

const mapState = (state, ownProps) => ({
  school: state.entities.schools[ownProps.id]
})

const mapDispatch = (dispatch, ownProps) => ({
  getData() {
    dispatch(refreshSchool(ownProps.id))
  }
})

export default connect(mapState, mapDispatch)(SchoolContainer)