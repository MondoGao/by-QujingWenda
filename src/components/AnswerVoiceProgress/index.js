import React from 'react'
import styles from './AnswerVoiceProgress.scss'

class AnswerVoiceProgress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      duration: this.props.question.audioDuration,
      isPlaying: false,
      canPaused: false
    }
  }

  /**
   * 获取可显示的剩余播放时间
   * @return {object}
   */
  getReadableRemainingDuration = () => {
    const remainDuration = this.state.duration - (this.audio ? this.audio.currentTime : 0)
    return ({
      minute: Math.floor(remainDuration / 60) === 0 ? '' : Math.floor(remainDuration / 60) + "'",
      second: Math.floor(remainDuration % 60) + "''"
    })
  }

  /**
   * 信息加载完毕获取 duration
   * @param {Event} e
   * @return void
   */
  handleLoadedMetaData = e => {
    this.setState({
      duration: e.target.duration,
      isPlaying: true,
      canPaused: true
    })
    this.audio.play()
  }

  /**
   * 处理播放完毕函数
   * @param {Event} e
   * @return void
   */
  handleAudioEnded = e => {
    this.audio.currentTime = 0
    this.setState({
      isPlaying: false,
      canPaused: false,
      playedPercentage: 0
    })
  }

  /**
   * 播放时更新状态
   * @param {Event} e
   * @return void
   */
  handleTimeUpdate = e => {
    this.setState({
      playedPercentage: (this.audio.currentTime / this.audio.duration).toFixed(2) * 100
    })
  }

  /**
   * 切换播放状态以及跳转付款
   * @param {Event} e
   * @return void
   */
  handleClick = e => {
    if (this.props.question.isPaid) {
      if (this.audio.src) {
        if (this.audio.paused) {
          this.audio.play()
          this.setState({
            isPlaying: true,
            canPaused: true
          })
        } else {
          if (this.audio.ended) {
            this.audio.currentTime = 0
          }
          this.audio.pause()
          this.setState({
            isPlaying: false
          })
        }
      } else {
        this.audio.src = this.props.question.audioUrl
      }
    } else {
      alert("跳转付款")
    }
  }

  render() {
    let state = 'normal'
    let title = '¥1 学习一个'
    let source = null
    if (this.props.question.isPaid) {
      title = '点击播放'
    }
    if (this.state.isPlaying) {
      state = 'playing'
      title = '正在播放'
    } else if (this.state.canPaused) {
      state = 'paused'
      title = '已经暂停'
    }

    return (
      <article onClick={this.handleClick} className={`${this.props.className} ${styles['answer-voice-wrapper']} ${styles[state]}`}>
        <div className={styles['answer-voice']}>
          <div className={styles['answer-playing-progress']} style={{right: `${90 - .9 * this.state.playedPercentage}%`}}/>
          <figure>
            <audio
              className={styles.audio}
              onLoadedMetadata={this.handleLoadedMetaData}
              onEnded={this.handleAudioEnded}
              onTimeUpdate={this.handleTimeUpdate}
              ref={el => this.audio = el}/>
            <figcaption>
              <icon/>
              <span>
                {this.getReadableRemainingDuration().minute + this.getReadableRemainingDuration().second}
              </span>
            </figcaption>
          </figure>
          <h6>{title}</h6>
        </div>
      </article>
    )
  }
}

AnswerVoiceProgress.propTypes = {
  className: React.PropTypes.string,
  question: React.PropTypes.object.isRequired
}

export default AnswerVoiceProgress