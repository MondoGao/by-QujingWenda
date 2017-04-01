import React from 'react'
import { connect } from 'react-redux'

import { getUsers }  from 'sources'
import { addUsers } from 'actions'
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

function composeData(state) {
  const users = state.entities.users
  const schools = state.entities.schools
  return Object.keys(users).map((key) => (
    {...users[key], school: schools[users[key].school]}
  ))
}

const mapStateToProps = (state) => ({
  data: composeData(state)
})

const mapDispatchToProps = (dispatch) => ({
  getData() {
    // dispatch(toggleRequest(consts.PAGES.HOT, true))
    getUsers().then((data) => {
      dispatch(addUsers(data))
      // dispatch(toggleRequest(consts.PAGES.HOT, false))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer)