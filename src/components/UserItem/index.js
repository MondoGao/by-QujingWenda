import React from 'react'
import styles from './UserItem.scss'

import Button from 'components/Button'
import UserMeta from 'components/UserMeta'

const UserItem = ({ data }) => (
  <article className={styles.card}>
    <UserMeta data={data}/>
    <Button className={styles['ask-button']}>¥{data.price} 提问</Button>
  </article>
)

export default UserItem