import React from 'react'

import styles from './Button.scss'

const Button = ({ children, className }) => (
  <span className={`${styles.button} ${className}`}>{children}</span>
)

export default Button