import React from 'react'
import styles from './AnswerVoiceProgress.scss'

class AnswerVoiceProgress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      duration: 0,
      isPlaying: false,
      canPaused: false
    }
  }

  /**
   * 获取可显示的持续时间
   * @return {object}
   */
  getReadableDuration = () => ({
    minute: Math.floor(this.state.duration / 60) === 0 ? '' : Math.floor(this.state.duration / 60) + "'",
    second: Math.floor(this.state.duration % 60) + "''"
  })

  /**
   * 信息加载完毕获取 duration
   * @param {Event} e
   * @return void
   */
  handleLoadedMetaData = e => {
    this.setState({
      duration: e.target.duration
    })
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
   * 切换播放状态
   * @param {Event} e
   * @return void
   */
  handleClick = e => {
    if (this.props.question.isPaid) {
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
      alert("跳转付款")
    }
  }

  render() {
    let state = 'normal'
    let title = '¥1 学习一个'
    let source = null
    if (this.props.question.isPaid) {
      title = '重新收听'
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
              src={this.props.question.isPaid ? this.props.question.audioUrl : '#'}
              onLoadedMetadata={this.handleLoadedMetaData}
              onEnded={this.handleAudioEnded}
              onTimeUpdate={this.handleTimeUpdate}
              ref={el => this.audio = el}/>
            <figcaption>
              <icon/>
              <span>
                {this.getReadableDuration().minute + this.getReadableDuration().second}
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