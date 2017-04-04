const path = require('path')
const url = require('url')
const jsonServer = require('json-server')
const express = require('express')
const server = jsonServer.create()
const db = require(path.resolve(__dirname, 'db.json'))
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get(['/users/:id/questions', '/api/v1/users/:id/questions'], (req, res) => {
  let data = []
  let parsedUrl = url.parse(req.url, true)
  let userId = req.params.id
  let questions = db.questions
  let types = ['answerer', 'asker']

  if (parseInt(parsedUrl.query.type) == 3) {
    data = questions.filter((question) => question.isPaid && question['askerId'] != userId && question['answererId'] != userId)
  } else {
    data = questions.filter((question) => question[types[parseInt(parsedUrl.query.type) - 1] + 'Id'] == userId)
  }

  res.jsonp(data)
})

const expand = (obj, parent, parentName = parent) => {
  obj[parentName] = db[parent + 's'].find((parentObj) => {
    if (parentObj.id === obj[parentName + 'Id']) {
      return parentObj
    }
  })
}

router.render = (req, res) => {
  let parsedUrl = url.parse(req.url, true)
  let data = res.locals.data

  if (parsedUrl.pathname.match(/^\/questions/)) {
    if (data instanceof Array) {
      data = data.map((quest) => {
        expand(quest, 'user', 'answerer')
        return quest
      })
    } else if (data instanceof Object) {
      expand(data, 'user', 'asker')
      expand(data, 'user', 'answerer')
    }
  } else if (parsedUrl.pathname.match(/^\/users/)) {
    if (data instanceof Array) {
      data = data.map((user) => {
        expand(user, 'school')
        return user
      })
    } else if (data instanceof Object) {
      expand(data, 'school')
    }
  }
  res.jsonp(data)
}

server.use(express.static(path.resolve(__dirname, 'public')))
server.use('/api/v1', router)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Mock Server is Running')
})