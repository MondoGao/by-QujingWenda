import React from 'react'
import { connect } from 'react-redux'

import UsersPage from 'components/UsersPage'
import withMyself from 'containers/withMyself.js'

export default withMyself(UsersPage)
