const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const body = req.body

  Login.findOne({ email: body.email })
    .lean()
    .then((item) => {
      if (!item) { return res.render('login', { loginFail: true }) }

      if (item.password === body.password) {
        return res.render('index', { firstName: item.firstName})
      } else {
        return res.render('login', { loginFail: true })
      }
    })
})

module.exports = router
