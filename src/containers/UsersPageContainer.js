import React from 'react'
import { connect } from 'react-redux'

import UsersPage from 'components/UsersPage'

const mapState = (state) => ({
  myself: state.myself
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(UsersPage)
