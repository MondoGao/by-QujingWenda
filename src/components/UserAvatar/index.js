import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserAvatar.scss'

const UserAvatar = ({ user, size = 'sm', className = '' }) => {
  let avatar = null
  switch (size) {
    case 'lg':
      avatar = <img src={user.avatar} alt={user.name}/>
      break
    default:
      avatar = (
        <Link to={`/users/${user.id}`}>
          <img src={user.avatar} alt={user.name}/>
        </Link>
      )
  }
  return (
    <figure className={`${styles['avatar-wrapper']} ${styles[size]} ${className}`}>
      {avatar}
    </figure>
  )
}

UserAvatar.propTypes = {
  user: React.PropTypes.object,
  size: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
}

export default UserAvatar