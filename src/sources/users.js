import { normalize, schema } from 'normalizr'

const question2 = new schema.Entity('questions')
const school2 = new schema.Entity('schools')
const user2 = new schema.Entity('users', {
  answerTo: [ question2 ],
  listenTo: [ question2 ],
  askByMe: [ question2 ],
  school2
})

export function getUsers2() {
  return Promise.resolve([
    {
      id: 1,
      name: '潘柳婧',
      bio: '冰岩作坊主管，腾讯产品经理',
      role: 2,
      price: 5,
      school: {
        id: 1,
        name: '华中科技大学',
      },
      avatar: require('sources/avatar2.jpg'),
      answerTo: [{
        id: 2,
        content: '听说柳柳很美，是不是真的？',
        listenByNum: 18,
        answerUser: 1,
        askUser: 2
      }],
      listenTo: [],
      askByMe: [{
        id: 1,
        content: '听说灿神很帅，是不是真的？',
        listenByNum: 22,
        askUser: 1
      },
      {
        id: 3,
        content: '我感觉人生好失败，该怎么办呢？',
        listenByNum: 868,
        answerUser: 3,
        askUser: 1
      }]
    },
    {
      id: 2,
      name: '麦冬',
      bio: '前端开发、表演朗诵达人前端开发、表演朗诵达人前端开发、表演朗诵达人前端开发、表演朗诵达人',
      role: 2,
      price: 1,
      school: {
        id: 1,
        name: '华中科技大学',
      },
      avatar: require('sources/avatar.jpg'),
      answerTo: [{
        id: 1,
        content: '听说灿神很帅，是不是真的？',
        listenByNum: 22,
        answerUser: 2,
        askUser: 1
      }],
      listenTo: [{
        id: 3,
        content: '我感觉人生好失败，该怎么办呢？',
        listenByNum: 868,
        answerUser: 3,
        askUser: 1
      }],
      askByMe: [{
        id: 2,
        content: '你美不美？',
        listenByNum: 10,
        answerUser: 1,
        askUser: 2
      }]
    },
    {
      id: 3,
      name: '杨子灿',
      bio: '失败者',
      role: 2,
      price: 9999,
      school: {
        id: 1,
        name: '华中科技大学',
      },
      avatar: require('sources/avatar3.png'),
      answerTo: [{
        id: 3,
        content: '我感觉人生好失败，该怎么办呢？',
        listenByNum: 868,
        answerUser: 3,
        askUser: 1
      }],
      listenTo: [{
        id: 2,
        content: '你美不美？',
        listenByNum: 10,
        answerUser: 1,
        askUser: 2
      }],
      askByMe: []
    }
  ]).then((data) => normalize(data,  [ user2 ]))
}

import { commonFetchGet } from 'sources/utils'
import { user, users, questions } from 'sources/schemas'

export function getUsers(page = 1) {
  return commonFetchGet(`/api/v1/users?page=${page}`, users)
}


export function getUser(id) {
  if (!id) {
    throw new Error('无效的用户id')
  }

  return commonFetchGet(`/api/v1/users/${id}`, user)
}

// type = 1 问我的|2 我问的|3 我听过
export function getUserQuestions(id, page = 1, type = 1) {
  if (!id) {
    throw new Error('无效的用户id')
  }

  return commonFetchGet(`/api/v1/users/${id}/questions?type=${type}&page=${page}`, questions)
}
