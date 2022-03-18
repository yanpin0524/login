const Login = require('../login')
const db = require('../../config/mongoose')
const users = require('../users')

db.once('open', () => {
  users.forEach((item) => {
    Login.create(item)
  })
  console.log('種子資料載入完畢')
})
