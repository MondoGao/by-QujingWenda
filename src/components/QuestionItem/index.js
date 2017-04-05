import React from 'react'
import styles from './QuestionItem.scss'

import UserAvatar from 'components/UserAvatar'
import AnswerVoiceProgress from 'components/AnswerVoiceProgress'

const QuestionItem = ({ data }) => {
  return (
    <article className={styles.card}>
      <h5>华中科技大学</h5>
      <p className={styles.content}>{data.content}</p>
      <section className={styles['answer-container']}>
        <UserAvatar user={data.answerer}/>
        <AnswerVoiceProgress className={styles['answer-voice']}/>
        <div className={styles['answer-meta']}>
          <p>价值{data.price}元</p>
          <p>{data.listenByNum}人听过</p>
        </div>
      </section>
      <section className={styles['user-meta']}>
        <h4>{data.answerer.name}</h4>
        <p>{data.answerer.bio}</p>
      </section>
    </article>
  )
}

export default QuestionItem