import React from 'react'
import styles from './QuestionList.scss'

import QuestionItem from 'components/QuestionItem'

const QuestionList = ({ data, onListScroll }) => (
  <section className={styles['list']} onScroll={onListScroll}>
    {Object.keys(data).map((key) => <QuestionItem key={data[key].id} data={data[key]}/>)}
  </section>
)

export default QuestionList