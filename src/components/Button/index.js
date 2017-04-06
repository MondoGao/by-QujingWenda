import React from 'react'

import styles from './Button.scss'

const Button = ({ children, className = '', disable = false, size = '', onClick = () => {} }) => (
  <span className={`${styles.button} ${className} ${disable ? styles.disable : ''} ${styles[size]}`} onClick={onClick}>{children}</span>
)

export default Button