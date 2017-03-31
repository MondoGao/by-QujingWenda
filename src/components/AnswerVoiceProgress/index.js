import React from 'react'
import styles from './AnswerVoiceProgress.scss'

const AnswerVoiceProgress = ({ className }) =>
  <article className={`${className} ${styles['answer-voice-wrapper']}`}>
    <div className={styles['answer-voice']}>
      <div className={styles['answer-playing-progress']}/>
      <figure>
        <icon/>
        <figcaption>10'</figcaption>
      </figure>
      <h6>¥1 学习一个</h6>
    </div>
  </article>

export default AnswerVoiceProgress