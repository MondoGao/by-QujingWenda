import React from 'react'

import styles from './Button.scss'

const Button = ({ children, className = '', disable = false, size = '' }) => (
  <span className={`${styles.button} ${className} ${disable ? styles.disable : ''} ${styles[size]}`}>{children}</span>
)

export default Button