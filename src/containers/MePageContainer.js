import React from 'react'
import { connect } from 'react-redux'
import { updateLastTab } from 'actions'

import MePage from 'components/MePage'

const mapState = (state) => ({
  myself: state.entities.users[state.myself.id],
  page: state.pages.me
})

const mapDispatch = (dispatch) => ({
  updateLastTab(tabUrl) {
    dispatch(updateLastTab(tabUrl))
  }
})

export default connect(mapState, mapDispatch)(MePage)
