import React from 'react'

import styles from './LoadingIcon.scss'

const LoadingIcon = ({ isLoading = false }) => (
  <div className={`${styles['loader-wrapper']} ${isLoading ? styles.loading : ''}`}>
    <span>
      <div className={styles['loading-pulse']}/>
    </span>
  </div>
)

export default LoadingIcon