import React from 'react'

import styles from './AnswerQuestion.scss'

import Button from 'components/Button'

class AnswerQuestion extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      // 0: 回答问题；1：录音中；2：录音完毕
      answerState: 0
    }
  }
  
  handleAnswerButtonClick = e => {
    this.setState({
      answerState: 1
    })
  }
  
  handleStopButtonClick = e => {
    this.setState({
      answerState: 2
    })
  }
  
  handleSubmit = e => {
    alert('提交！')
  }
  
  handlePlayRecord = e => {
    alert('playing！')
  }
  
  render() {
    if (!this.props.isAnswerer) {
      return (
        <div className={styles['answer-container']}>
          <Button size="lg" className={styles.button} disable>等待回答</Button>
        </div>
      )
    }
    
    let ele = null
    switch (this.state.answerState) {
      case 0:
        ele = <Button size="lg" onClick={this.handleAnswerButtonClick} className={styles.button}>回答问题</Button>
        break
      case 1:
        ele = <ToggleRecord isRecording onClick={this.handleStopButtonClick}/>
        break
      case 2:
        ele = [
          <span className={styles.tip} onClick={this.handleAnswerButtonClick} key="again">重录</span>,
          <ToggleRecord onClick={this.handlePlayRecord} key="btn"/>,
          <span className={styles.tip} onClick={this.handleSubmit} key="submit">确认回答</span>,
        ]
        break
    }
  
    return (
      <div className={styles['answer-container']}>
        {ele}
      </div>
    )
  }
}

const ToggleRecord = ({ isRecording = false, onClick = () => {} }) => (
  <span className={styles[isRecording ? 'recording' : 'recorded']} onClick={onClick}>
    <span/>
    <time>0:01</time>
  </span>
)

AnswerQuestion.propTypes = {
  isAnswerer: React.PropTypes.bool,
  myself: React.PropTypes.object
}

export default AnswerQuestion