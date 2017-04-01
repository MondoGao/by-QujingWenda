import React from 'react'
import styles from './UserItem.scss'

import Button from 'components/Button'
import UserMeta from 'components/UserMeta'

const UserItem = ({ user }) => (
  <article className={styles.card}>
    <UserMeta user={user}/>
    <Button className={styles['ask-button']}>¥{user.price} 提问</Button>
  </article>
)

export default UserItem