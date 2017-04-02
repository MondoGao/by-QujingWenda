import React from 'react'
import { connect } from 'react-redux'

const mapState = (state) => ({
  myself: state.entities.users[state.myself.id]
})

const mapDispatch = (dispatch) => ({
})

const withMyself = (WrappedComponent) => {
  class WithMyself extends React.Component {
    render() {
      return (
        <WrappedComponent {...this.props} myself={this.props.myself} />
      )
    }
  }
  return connect(mapState, mapDispatch)(WithMyself)
}

export default withMyself
