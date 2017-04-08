import React from 'react'

import styles from './LoadingIcon.scss'

const LoadingIcon = ({ size = 'sm', color = 'white', className = '' }) => (
  <div className={`${styles['loading-pulse']} ${styles[size]} ${styles[color]} ${className}`}/>
)

export default  LoadingIcon