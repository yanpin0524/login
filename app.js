const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const routes = require('./routes')
require('./config/mongoose')

app.engine('hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log(`網站已開啟：localhost:${port}`)
})
