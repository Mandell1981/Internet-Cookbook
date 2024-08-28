// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

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
