import React from 'react'
import { connect } from 'react-redux'
import UserMeta from 'components/UserMeta'

const mapState = (state, ownProps) => ({
  user: state.entities.users[ownProps.id]
})

const mapDispatch = (dispatch, ownProps) => ({

})

export default connect(mapState, mapDispatch)(UserMeta)