import React from 'react'
import { connect } from 'react-redux'

import MePage from 'components/MePage'

const mapState = (state) => ({
  myself: state.myself
})

export default connect(mapState)(MePage)
