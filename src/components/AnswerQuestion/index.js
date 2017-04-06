import React from 'react'

import styles from './AnswerQuestion.scss'

import Button from 'components/Button'

const AnswerQuestion = ({ isAnswerer, myself }) => {
  if (!isAnswerer) {
    return (
      <div className={styles['answer-container']}>
        <Button size="lg" className={styles.button} disable>等待回答</Button>
      </div>
    )
  }

  return (
    <div className={styles['answer-container']}>
      <Button size="lg" className={styles.button}>回答问题</Button>
    </div>
  )
}

AnswerQuestion.propTypes = {
  isAnswerer: React.PropTypes.bool,
  myself: React.PropTypes.object
}

export default AnswerQuestion