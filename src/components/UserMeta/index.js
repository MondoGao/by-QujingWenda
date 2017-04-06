import React from 'react'
import styles from './UserMeta.scss'

import UserAvatar from 'components/UserAvatar'
import SchoolContainer from 'containers/SchoolContainer'

const UserMeta = ({ user, myself, only = false }) => {
  if (!user) {
    return null
  }

  let descPairs = [
    user.id === myself.id ? <DescPair key="incom" title="收入" content={user.income}/> : <DescPair key="listenTo" title="听过" content={user.listenedNum}/>,
    <DescPair key="school" className={styles['auto-width']} type="ch" title="学校" content={
      <SchoolContainer id={user.schoolId}/>
    }/>
  ]

  if (only) {
    descPairs.reverse()
  }

  return (
    <div className={only ? styles.only : ''}>
      <UserAvatar className={styles.avatar} user={user} size={only ? 'lg' : 'md'}/>
      <div className={styles['meta-wrapper']}>
        <h4 className={styles.name}>
          {user.name}
        </h4>
        <ul className={styles['desc-group']}>
          <DescPair title="回答" content={user.answeringNum}/>
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