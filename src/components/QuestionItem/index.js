import React from 'react'
import styles from './QuestionItem.scss'

import UserAvatar from 'components/UserAvatar'
import AnswerVoiceProgress from 'components/AnswerVoiceProgress'

const defaultData = {
  content: "我是一名大一学生，我想要加入冰岩作坊产品组，现在我的实力还有些不足，但我真的很希望加入。请问我现在该如何努力才能进入冰岩呢？",
  user: {
    name: "潘柳婧",
    bio: "冰岩作坊团队主管，腾讯产品经理",
    avatar: require('assets/tab_hot_h.png')
  }
}

const QuestionItem = ({data = defaultData}) => {
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