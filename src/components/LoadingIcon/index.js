import React from 'react'

import styles from './LoadingIcon.scss'

const LoadingIcon = ({ size = 'sm', color = 'red' }) => (
  <div className={`${styles['loading-pulse']} ${styles[size]}`}/>
)

export default  LoadingIcon