import React from 'react'

import UserAvatar from 'components/UserAvatar'

const UserItem = ({ data }) => (
  <article>
    <UserAvatar user={{ name: data.name,  avatar: data.avatar}} size="md"/>
    <h4>{data.name}</h4>
    <ul>
      <DescPair title="回答" content={data.answerTo.length}/>
      <DescPair title="听过" content={data.listenTo.length}/>
      <DescPair title="学校" content={data.school.name}/>
    </ul>
    <p>{data.bio}</p>
    {console.log(data)}
  </article>
)

const DescPair = ({ title, content }) => (
  <li>
    <p>{content}</p>
    <h5>{title}</h5>
  </li>
)

export default UserItem