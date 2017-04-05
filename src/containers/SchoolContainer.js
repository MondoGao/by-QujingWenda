import React from 'react'
import { connect } from 'react-redux'

class SchoolContainer extends React.Component {
  componentWillMount() {

  }

  render() {
    if (!this.props.school){
      return null
    }
    return <span>{this.props.school.name}</span>
  }
}

const mapState = (state, ownProps) => ({
  school: state.entities.schools[ownProps.id]
})

export default connect(mapState)(SchoolContainer)