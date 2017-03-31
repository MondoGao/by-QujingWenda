import React from 'react'
import styles from './UserAvatar.scss'

const UserAvatar = ({ user }) => {
  return (
    <figure className={styles['avatar-wrapper']}>
      <img src={user.avatar} alt={user.name}/>
    </figure>
  )
}

UserAvatar.propTypes = {
  user: React.PropTypes.shape({
    avatar: React.PropTypes.string,
    name: React.PropTypes.string
  })
}

export default UserAvatar