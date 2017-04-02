import React from 'react'
import { connect } from 'react-redux'
import { updateLastTab } from 'actions'

import MePage from 'components/MePage'

const mapState = (state) => ({
  myself: state.myself,
  lastTab: state.pages.me.lastTab
})

const mapDispatch = (dispatch) => ({
  updateLastTab(tabUrl) {
    dispatch(updateLastTab(tabUrl))
  }
})

export default connect(mapState, mapDispatch)(MePage)
