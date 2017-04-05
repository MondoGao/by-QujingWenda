import React from 'react'
import styles from './QuestionItem.scss'

import UserAvatar from 'components/UserAvatar'
import AnswerVoiceProgress from 'components/AnswerVoiceProgress'

class QuestionItem extends React.Component {
  render() {
    if (!this.props.question || !this.props.answerer) {
      return null
    }

    return (
      <article className={styles.card}>
        <h5>华中科技大学</h5>
        <p className={styles.content}>{this.props.question.content}</p>
        <section className={styles['answer-container']}>
          <UserAvatar user={this.props.answerer}/>
          <AnswerVoiceProgress className={styles['answer-voice']}/>
          <div className={styles['answer-meta']}>
            <p>价值{this.props.question.price}元</p>
            <p>{this.props.question.listenByNum}人听过</p>
          </div>
        </section>
        <section className={styles['user-meta']}>
          <h4>{this.props.answerer.name}</h4>
          <p>{this.props.answerer.bio}</p>
        </section>
      </article>
    )
  }

  componentDidMount() {
    if (!this.props.answerer) {
      this.props.getUser(this.props.question.answererId)
    }
  }
}

export default QuestionItem