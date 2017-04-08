import React from 'react'
import styles from './AnswerVoiceProgress.scss'

class AnswerVoiceProgress extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      duration: this.props.question.audioDuration,  // 初始等于属性中时间，点击播放后更新为实际时间
      isPlaying: false, // 状态标记，是否播放状态
      isPaused: false, // 状态标记，是否暂停状态
      isInitial: true, // 是否第一次加载（未加载 url 状态）
      playedPercentage: 0 // 已播放比例
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
   * 点击播放后等待信息加载完毕获取 duration，同时切出加载状态并播放
   * @param {Event} e
   * @return void
   */
  handleLoadedMetaData = e => {
    this.setState({
      duration: e.target.duration,
      isPaused: false
    })
    this.audio.play()
  }

  /**
   * 处理播放完毕函数，转换状态到 normal
   * @param {Event} e
   * @return void
   */
  handleAudioEnded = e => {
    this.audio.currentTime = 0
    this.setState({
      isPlaying: false,
      isPaused: false,
      playedPercentage: 0
    })
  }

  /**
   * 播放时更新已播放比例
   * @param {Event} e
   * @return void
   */
  handleTimeUpdate = e => {
    let playedPercentage = (this.audio.currentTime / this.audio.duration).toFixed(2) * 100
    if (Number.isNaN(playedPercentage)) {
      playedPercentage = 0
    }
    
    this.setState({
      playedPercentage
    })
  }
  
  /**
   * 单击处理逻辑，
   * @param {Event} e
   * @return void
   */
  handleClick = e => {
    switch (this.getViewState()) {
      case 'unpaid':
        alert("跳转付款")
        break
      case 'normal':
        if (this.state.isInitial) {
          this.setState({
            isInitial: false,
            isPlaying: true,
            isPaused: true
          })
        } else {
          this.setState({
            isPlaying: true
          })
          this.audio.play()
        }
        break
      case 'playing':
        this.setState({
          isPlaying: false,
          isPaused: true
        })
        this.audio.pause()
        break
      case 'paused':
        this.setState({
          isPlaying: true,
          isPaused: false
        })
        this.audio.play()
        break
      case 'loading':
        this.setState({
          isPlaying: false
        })
        break
    }
  }
  
  /**
   * 根据 state、props 获取组件显示状态
   * isPlaying，isPaused 区分四个状态
   * false, false 单击播放状态
   * true, false 播放中状态
   * false, true 暂停状态
   * true, true 加载状态
   * @return {string} 'unpaid'|'normal'|'loading'|'playing'|'paused'
   */
  getViewState() {
    let state = 'unpaid'
    if (this.props.question.isPaid) {
      state = 'normal'
      if (this.state.isPlaying) {
        if (this.state.isPaused) {
          state = 'loading'
        } else {
          state = 'playing'
        }
      } else if (this.state.isPaused) {
        state = 'paused'
      }
    }
    return state
  }
  
  /**
   * 播放组件共有 5 个状态，1. 未付款；2. 已付款未播放；3. 正在播放；4. 暂停； 5. 加载中
   */
  render() {
    const uiState = this.getViewState()
    if (uiState == 'loading') {
      console.log('loading')
    }
    
    const tipData = {
      unpaid: {
        title: '¥1 学习一个',
        progressBarState: 0
      },
      normal: {
        title: '点击播放',
        progressBarState: 0
      },
      playing: {
        title: '正在播放',
        progressBarState: 1
      },
      loading: {
        title: '正在播放',
        progressBarState: 1
      },
      paused: {
        title: '已经暂停',
        progressBarState: 1
      }
    }
    const progressBarStyle = [{
      right: '100%'
    }, {
      right: `${90 - .9 * this.state.playedPercentage}%`
    }]
    const audioSrc = this.state.isInitial ? '' : this.props.question.audioUrl
    
    const finalData = tipData[uiState]

    return (
      <article onClick={this.handleClick} className={`${this.props.className} ${styles['answer-voice-wrapper']} ${styles[uiState]}`}>
        <div className={styles['answer-voice']}>
          <div className={styles['answer-playing-progress']} style={progressBarStyle[finalData.progressBarState]}/>
          <figure>
            <audio
              className={styles.audio}
              src={audioSrc}
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
          <h6>{finalData.title}</h6>
        </div>
      </article>
    )
  }
}

AnswerVoiceProgress.propTypes = {
  className: React.PropTypes.string,
  question: React.PropTypes.object.isRequired
}

AnswerVoiceProgress.defaultProps = {
  className: ''
}

export default AnswerVoiceProgress