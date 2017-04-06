import React from 'react'

import styles from './LoadingIcon.scss'

class LoadingIcon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      prevTime: 0,
      isLoading: this.props.isLoading,
      timer: null
    }
  }

  render() {
    return (
      <div className={`${styles['loader-wrapper']} ${this.state.isLoading ? styles.loading : ''}`}>
        <span>
          <div className={styles['loading-pulse']}/>
        </span>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isLoading && this.props.isLoading) {
      clearTimeout(this.state.timer)
      this.setState({
        isLoading: true
      })
    } else if (prevProps.isLoading && !this.props.isLoading) {
      let self = this
      this.setState({
        timer: setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 800)
      })
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer)
  }
}

LoadingIcon.defaultProps = {
  isLoading: true
}

export default LoadingIcon