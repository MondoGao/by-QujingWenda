import React from 'react'

import UserAvatar from 'components/UserAvatar'
import Button from 'components/Button'

import styles from './UserItem.scss'

const UserItem = ({ data }) => (
  <article className={styles.card}>
    <UserAvatar user={{ name: data.name,  avatar: data.avatar}} size="md"/>
    <div className={styles['meta-wrapper']}>
      <h4 className={styles.name}>
        {data.name}
      </h4>
      <ul className={styles['desc-group']}>
        <DescPair title="回答" content={data.answerTo.length}/>
        <DescPair title="听过" content={data.listenTo.length}/>
        <DescPair type="ch" title="学校" content={data.school.name}/>
      </ul>
      <p className={styles.bio}>{data.bio}</p>
    </div>
    <Button className={styles['ask-button']}>¥{data.price} 提问</Button>
  </article>
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

export default UserItem