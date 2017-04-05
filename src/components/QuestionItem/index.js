import React from 'react'
import styles from './QuestionItem.scss'

import UserAvatar from 'components/UserAvatar'
import AnswerVoiceProgress from 'components/AnswerVoiceProgress'

class QuestionItem extends React.Component {
  componentWillMount() {
    if (!this.props.data.answerer) {
      return null
    }
  }

  render() {
    console.log(this.props.data)

    if (!this.props.data || !this.props.data.answerer) {
      return null
    }
    return (
      <article className={styles.card}>
        <h5>华中科技大学</h5>
        <p className={styles.content}>{this.props.data.content}</p>
        <section className={styles['answer-container']}>
          <UserAvatar user={this.props.data.answerer}/>
          <AnswerVoiceProgress className={styles['answer-voice']}/>
          <div className={styles['answer-meta']}>
            <p>价值{this.props.data.price}元</p>
            <p>{this.props.data.listenByNum}人听过</p>
          </div>
        </section>
        <section className={styles['user-meta']}>
          <h4>{this.props.data.answerer.name}</h4>
          <p>{this.props.data.answerer.bio}</p>
        </section>
      </article>
    )
  }
}

export default QuestionItem