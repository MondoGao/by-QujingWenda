import React from 'react'

import UserItem from 'components/UserItem'
import styles from './UserList.scss'

const UserList = ({ data }) => {
  return (
    <section>
      {data.map((item, index) => <UserItem key={index} data={item}/>)}
    </section>
  )
}

export default UserList