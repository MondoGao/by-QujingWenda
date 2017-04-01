import React from 'react'
import styles from './UserAvatar.scss'

const UserAvatar = ({ user, size = 'sm' }) => (
  <figure className={`${styles['avatar-wrapper']} ${styles[size]}`}>
    <img src={user.avatar} alt={user.name}/>
  </figure>
)

UserAvatar.propTypes = {
  user: React.PropTypes.shape({
    avatar: React.PropTypes.string,
    name: React.PropTypes.string
  }),
  size: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
}

export default UserAvatar