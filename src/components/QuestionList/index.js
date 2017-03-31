import React from 'react'
import styles from './QuestionList.scss'

import QuestionItem from 'components/QuestionItem'

const QuestionList = ({ data }) => (
  <section className={styles['list']}>
    {data.map((item, index) => <QuestionItem key={index} data={item}/>)}
  </section>
)

export default QuestionList