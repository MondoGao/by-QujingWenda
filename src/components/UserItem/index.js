import React from 'react'

import UserAvatar from 'components/UserAvatar'

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
    {console.log(data)}
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

const Button = ({ children, className }) => (
  <span className={`${styles.button} ${className}`}>{children}</span>
)

export default UserItem