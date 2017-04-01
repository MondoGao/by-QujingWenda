import React from 'react'

import styles from './Button.scss'

const Button = ({ children, className = '', disable = false }) => (
  <span className={`${styles.button} ${className} ${disable ? styles.disable : ''}`}>{children}</span>
)

export default Button