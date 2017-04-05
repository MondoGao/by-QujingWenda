import React from 'react'
import styles from './QuestionList.scss'

import QuestionItemContainer from 'containers/QuestionItemContainer'

const QuestionList = ({ questionsIds, onListScroll }) => (
  <section className={styles['list']} onScroll={onListScroll}>
    {questionsIds.map(questionId => <QuestionItemContainer key={questionId} questionId={questionId}/>)}
  </section>
)

export default QuestionList