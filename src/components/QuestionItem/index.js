import React from 'react'
import styles from './QuestionItem.scss'

import UserAvatar from 'components/UserAvatar'
import VoiceContainer from 'containers/VoiceContainer'
import AnswerQuestion from 'components/AnswerQuestion'

class QuestionItem extends React.Component {
  render() {
    if (!this.props.question) {
      return null
    }

    if (!this.props.question.isAnswered) {
      let userDiv = null
      const isAsker = this.props.myself.id === this.props.asker.id
      const anotherUser = isAsker ? this.props.answerer : this.props.asker

      if (anotherUser) {
        userDiv = (
          <div className={styles['another-user']}>
            <UserAvatar className={styles.avatar} user={anotherUser} size='xs'/>
            {(isAsker ? '向' : '') + anotherUser.name}的提问
          </div>
        )
      }

      return (
        <article className={`${styles.card} ${styles['not-answered']}`}>
          {userDiv}
          <p className={styles.content}>
            {this.props.question.content}
          </p>
          <AnswerQuestion isAnswerer={!isAsker} myself={this.props.myself}/>
        </article>
      )
    }

    return (
      <article className={`${styles.card} ${styles.answered}`}>
        <h5>华中科技大学</h5>
        <p className={styles.content}>{this.props.question.content}</p>
        <section className={styles['answer-container']}>
          {this.props.answerer ? <UserAvatar user={this.props.answerer}/> : null}
          <VoiceContainer className={styles['answer-voice']} question={this.props.question}/>
          <div className={styles['answer-meta']}>
            <p>价值{this.props.question.price}元</p>
            <p>{this.props.question.listenByNum}人听过</p>
          </div>
        </section>
        {this.props.answerer ?
          <section className={styles['user-meta']}>
          <h4>{this.props.answerer.name}</h4>
          <p>{this.props.answerer.bio}</p>
        </section>
          : null}
      </article>
    )
  }

  componentDidMount() {
    if (!this.props.answerer) {
      this.props.getUser(this.props.question.answererId)
    }
    if (!this.props.asker) {
      this.props.getUser(this.props.question.askerId)
    }
  }
}

QuestionItem.propTypes = {
  myself: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  }),
  answerer: React.PropTypes.object,
  asker: React.PropTypes.object,
  question: React.PropTypes.object.isRequired
}

export default QuestionItem