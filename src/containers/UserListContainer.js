import React from 'react'
import { connect } from 'react-redux'

import { appendUsers } from 'actions'
import { promiseCatch } from 'scripts/utils'

import UserList from 'components/UserList'

class UserListContainer extends React.Component {
  componentWillMount() {
    this.props.appendData()
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
  appendData() {
    return dispatch(appendUsers())
      .catch(promiseCatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer)