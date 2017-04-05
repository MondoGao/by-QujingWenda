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

const mapStateToProps = (state) => ({
  data: state.entities.users
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