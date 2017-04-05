import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserItem.scss'

import Button from 'components/Button'
import UserMetaContainer from 'containers/UserMetaContainer'

const UserItem = ({ user, myself }) => {
  if (!user || user.id === myself.id) {
    return null
  }

  return (
    <article className={styles.card}>
      <UserMetaContainer id={user.id}/>
      <Link to={`/users/${user.id}`}>
        <Button className={styles['ask-button']}>¥{user.price} 提问</Button>
      </Link>
    </article>
  )
}

export default UserItem