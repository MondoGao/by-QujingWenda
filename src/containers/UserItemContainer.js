import React from 'react'
import { connect } from 'react-redux'
import { refreshUser } from 'actions'
import UserItem from 'components/UserItem'

const mapState = (state, ownProps) => {
  const user = state.entities.users[ownProps.entityId]

  return {
    myself: state.myself,
    user
  }
}

const mapDispatch = (dispatch) => ({
  getUser(id) {
    dispatch(refreshUser(id))
  }
})

export default connect(mapState, mapDispatch)(UserItem)
