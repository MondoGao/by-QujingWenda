import React from 'react'
import styles from './UserMeta.scss'

import UserAvatar from 'components/UserAvatar'
import SchoolContainer from 'containers/SchoolContainer'

const UserMeta = ({ user, myself = false }) => {
  const descPairs = [
    <DescPair title="听过" content={user.listenTo.length}/>,
    <DescPair className={styles['auto-width']} type="ch" title="学校" content={
      <SchoolContainer id={user.school}/>
    }/>
  ]
  if (myself) {
    descPairs.reverse()
  }

  return (
    <div className={myself ? styles.myself : ''}>
      <UserAvatar className={styles.avatar} user={{ name: user.name,  avatar: user.avatar}} size={myself ? 'lg' : 'md'}/>
      <div className={styles['meta-wrapper']}>
        <h4 className={styles.name}>
          {user.name}
        </h4>
        <ul className={styles['desc-group']}>
          <DescPair title="回答" content={user.answerTo.length}/>
          {descPairs}
        </ul>
        <p className={styles.bio}>{user.bio}</p>
      </div>
    </div>
  )
}


const DescPair = ({ title, content, type = 'en', className }) => (
  <li className={`${styles['desc-item']} ${styles[type]} ${className}`}>
    <p>{content}</p>
    <h5>{title}</h5>
  </li>
)

DescPair.PropsType = {
  type: React.PropTypes.oneOf(['en, ch'])
}

export default UserMeta