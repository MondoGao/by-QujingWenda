import { normalize, schema } from 'normalizr'

const question = new schema.Entity('questions')
const school = new schema.Entity('schools')
const user = new schema.Entity('users', {
  answerTo: [ question ],
  listenTo: [ question ],
  askByMe: [ question ],
  school
})

export function getUsers() {
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
  ]).then((data) => normalize(data,  [ user ]))
}