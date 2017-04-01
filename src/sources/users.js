import { normalize, schema } from 'normalizr'

import avatar from 'assets/tab_hot_h.png'

const question = new schema.Entity('questions')
const school = new schema.Entity('schools')
const user = new schema.Entity('users', {
  answerTo: [ question ],
  listenTo: [ question ],
  school
})

export function getUsers() {
  return Promise.resolve([
    {
      id: 1,
      name: '潘柳婧',
      bio: '冰岩作坊主管，腾讯产品经理',
      role: 2,
      price: 1,
      school: {
        id: 1,
        name: '华中科技大学',
      },
      avatar,
      answerTo: [{
        id: 1,
        desc: '听说灿神很帅，是不是真的？'
      }],
      listenTo: [{
        id: 2,
        desc: '听说柳柳很美，是不是真的？'
      }]
    },
    {
      id: 2,
      name: '潘柳婧',
      bio: '冰岩作坊主管，腾讯产品经理',
      role: 2,
      price: 1,
      school: {
        id: 1,
        name: '华中科技大学',
      },
      avatar,
      answerTo: [{
        id: 1,
        desc: '听说灿神很帅，是不是真的？'
      }],
      listenTo: [{
        id: 2,
        desc: '听说柳柳很美，是不是真的？'
      }]
    }
  ]).then((data) => normalize(data,  [ user ]))
}