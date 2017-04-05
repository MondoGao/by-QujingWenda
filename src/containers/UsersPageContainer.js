import React from 'react'
import { connect } from 'react-redux'

import { appendUsers } from 'actions'

import UsersPage from 'components/UsersPage'

const mapState = state => ({
  page: state.pages.users,
  myself: state.myself
})

const mapDispatch = dispatch => ({
  appendData() {
    dispatch(appendUsers())
  }
})

export default connect(mapState, mapDispatch)(UsersPage)
