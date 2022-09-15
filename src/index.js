const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const app = express()
const port = 3000

// public IMG
app.use(express.static(path.join('public/img/logo.png')))

app.use(morgan('combined'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))





app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})