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
        <UserAvatar user={data.user}/>
        <AnswerVoiceProgress className={styles['answer-voice']}/>
        <div className={styles['answer-meta']}>
          <p>价值5元</p>
          <p>22人听过</p>
        </div>
      </section>
      <section className={styles['user-meta']}>
        <h4>{data.user.name}</h4>
        <p>{data.user.bio}</p>
      </section>
    </article>
  )
}

export default QuestionItem