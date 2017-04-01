import React from 'react'

import UserItem from 'components/UserItem'
import styles from './UserList.scss'

const UserList = ({ data }) => (
  <section>
    {Object.keys(data).map((key) => <UserItem user={data[key]} key={data[key].id}/>)}
  </section>
)

export default UserList