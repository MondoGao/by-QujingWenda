import React from 'react'
import styles from './UserMeta.scss'

import UserAvatar from 'components/UserAvatar'
import SchoolContainer from 'containers/SchoolContainer'

const UserMeta = ({ data }) => (
  <div>
    <UserAvatar user={{ name: data.name,  avatar: data.avatar}} size="md"/>
    <div className={styles['meta-wrapper']}>
      <h4 className={styles.name}>
        {data.name}
      </h4>
      <ul className={styles['desc-group']}>
        <DescPair title="回答" content={data.answerTo.length}/>
        <DescPair title="听过" content={data.listenTo.length}/>
        <DescPair type="ch" title="学校" content={
          <SchoolContainer id={data.school}/>
        }/>
      </ul>
      <p className={styles.bio}>{data.bio}</p>
    </div>
  </div>
)

const DescPair = ({ title, content, type = 'en' }) => (
  <li className={`${styles['desc-item']} ${styles[type]}`}>
    <p>{content}</p>
    <h5>{title}</h5>
  </li>
)

DescPair.PropsType = {
  type: React.PropTypes.oneOf(['en, ch'])
}

export default UserMeta