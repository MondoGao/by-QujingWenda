const path = require('path')
const url = require('url')
const jsonServer = require('json-server')

const server = jsonServer.create()
const db = require(path.resolve(__dirname, 'db.json'))
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

const _render = router.render

const addUser = (question, role) => {
  question[role] = db.users.find((user) => {
    if (user.id === question[role + 'Id']) {
      return user
    }
  })
}

router.render = (req, res) => {
  let parsedUrl = url.parse(req.url, true)
  let data = res.locals.data
  console.log(parsedUrl)
  switch (parsedUrl.pathname) {
    case '/questions':
      data = data.map((quest) => {
        addUser(quest, 'asker')
        addUser(quest, 'answerer')
        return quest
      })
      break
  }
  res.jsonp(data)
}

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})