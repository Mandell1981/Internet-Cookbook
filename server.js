// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))



// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome Cook Book App!')
})

// Cookbooks
const recipesController = require('./controllers/recipes_controller.js')
app.use('/recipes', recipesController)
// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

// 404 Page
app.get('*', (req, res) => {
  res.send('404 Page Not Found')
})