import React from 'react'

import styles from './LoadingIcon.scss'

const LoadingIcon = ({ size = 'sm', color = 'white' }) => (
  <div className={`${styles['loading-pulse']} ${styles[size]} ${styles[color]}`}/>
)

export default  LoadingIcon