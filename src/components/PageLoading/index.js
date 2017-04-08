import React from 'react'

import styles from './PageLoading.scss'

import LoadingIcon from 'components/LoadingIcon'

class PageLoading extends React.Component {
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
          <LoadingIcon size="lg" color="red"/>
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

PageLoading.defaultProps = {
  isLoading: true
}

export default PageLoading