import React from 'react'
import { connect } from 'react-redux'

import { appendUsers } from 'actions'
import { promiseCatch } from 'scripts/utils'

import UsersPage from 'components/UsersPage'

const mapState = state => ({
  page: state.pages.users,
  myself: state.myself
})

const mapDispatch = dispatch => ({
  appendData() {
    return dispatch(appendUsers())
      .catch(promiseCatch)
  }
})

export default connect(mapState, mapDispatch)(UsersPage)
