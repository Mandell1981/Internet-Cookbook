const express = require('express');
const recipes = express.Router();
const Recipe = require('../models/recipe.js')

// Index routes
recipes.get('/', (req, res) => {
  res.render('Index', {
    title: 'Index Page',
    recipes: Recipe
  }
)
  // res.send(Recipe)
});

// Show routes(shows individual recipe)
recipes.get('/:arryIndex', (req, res) => {
res.render('Show', {
  title: 'Recipe Details',
  recipe: Recipe[req.params.arryIndex]  // get the recipe from the array by the index provided in the url parameter
})
});

// Export routes
module.exports = recipes