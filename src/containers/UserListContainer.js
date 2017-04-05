import React from 'react'
import { connect } from 'react-redux'

import * as sources from 'sources'
import { appendUsers } from 'actions'
import UserList from 'components/UserList'

class UserListContainer extends React.Component {
  componentWillMount() {
    this.props.getData()
  }

  render() {
    return (
      <UserList data={this.props.data}/>
    )
  }
}

const mapStateToProps = (state) => ({
  data: Object.keys(state.entities.users).map(key => ({
    ...state.entities.users[key],
    school: state.entities.schools[state.entities.users[key].schoolId],
    answeringNum: Object.keys(state.entities.questions).filter((key2) => state.entities.questions[key2].answererId == state.entities.users[key].id).length
  }))
})

const mapDispatchToProps = (dispatch) => ({
  getData() {
    dispatch(appendUsers())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer)