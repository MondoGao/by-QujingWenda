export function getQuestions() {
  return new Promise((resolve,  reject) => {
    setTimeout(() => {
      resolve([
        {
          content: "我是一名大一学生，我想要加入冰岩作坊产品组，现在我的实力还有些不足，但我真的很希望加入。请问我现在该如何努力才能进入冰岩呢？",
          user: {
            name: "潘柳婧",
            bio: "冰岩作坊团队主管，腾讯产品经理",
            avatar: require('assets/tab_hot_h.png')
          }
        },
        {
          content: "我是一名大一学生，我想要加入冰岩作坊产品组，现在我的实力还有些不足，但我真的很希望加入。请问我现在该如何努力才能进入冰岩呢？",
          user: {
            name: "潘柳婧",
            bio: "冰岩作坊团队主管，腾讯产品经理",
            avatar: require('assets/tab_hot_h.png')
          }
        },
        {
          content: "我是一名大一学生，我想要加入冰岩作坊产品组，现在我的实力还有些不足，但我真的很希望加入。请问我现在该如何努力才能进入冰岩呢？",
          user: {
            name: "潘柳婧",
            bio: "冰岩作坊团队主管，腾讯产品经理",
            avatar: require('assets/tab_hot_h.png')
          }
        },
        {
          content: "我是一名大一学生，我想要加入冰岩作坊产品组，现在我的实力还有些不足，但我真的很希望加入。请问我现在该如何努力才能进入冰岩呢？",
          user: {
            name: "潘柳婧",
            bio: "冰岩作坊团队主管，腾讯产品经理",
            avatar: require('assets/tab_hot_h.png')
          }
        }
      ])
    }, 500)
  })
}