const express = require('express');
const recipes = express.Router();
const Recipe = require('../models/recipe.js')

// Index routes
recipes.get('/', (req, res) => {
  res.send(Recipe);
});

// Show routes(shows individual recipe)
recipes.get('/:arryIndex', (req, res) => {
res.send(Recipe[req.params.arryIndex]);
});

// Export routes
module.exports = recipes