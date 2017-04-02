import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserItem.scss'

import Button from 'components/Button'
import UserMeta from 'components/UserMeta'
import withMyself from 'containers/withMyself'

const UserItem = ({ user, myself }) => {
  if (user.id === myself.id) {
    return null
  }
  return (
    <article className={styles.card}>
      <UserMeta user={user}/>
      <Link to={`/users/${user.id}`}>
        <Button className={styles['ask-button']}>¥{user.price} 提问</Button>
      </Link>
    </article>
  )
}

export default withMyself(UserItem)