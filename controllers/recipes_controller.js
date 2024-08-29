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
});

// New Recipes routes
recipes.get('/new', (req, res) => {
  res.render('New', {
    title: 'New Recipe'
  })
});

// Show routes(shows individual recipe)
recipes.get('/:arryIndex', (req, res) => {
  if (Recipe[req.params.arrayIndex]) {
    res.render('Show', {
      title: 'Recipe Details',
      recipe: Recipe[req.params.arryIndex],
      index: req.params.arrayIndex,  // get the recipe from the array by the index provided in the url parameter
    })
  } else {
    res.status(404).render('404');
  }
});

// Create Recipes
recipes.post('/', (req, res) => {
  // Use a default image if none is provided
  if (!req.body.image) {
    req.body.image = '/Users/rminor/Downloads/clark-tibbs-oqStl2L5oxI-unsplash.jpg';
  }

  // Delete Recipe
  recipes.delete('/:indexArray', (req, res) => {
    Recipe.splice(req.params.indexArray, 1);
   res.status(303).res.redirect('/recipes');
  })

  // Check if `hasGluten` is set to 'on' and convert it to a boolean
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }

  // Push the recipe data to the Recipe array (assuming Recipe is an array)
  Recipe.push(req.body);

  // Redirect to the recipes page
  res.redirect('/recipes');
});


// Export routes
module.exports = recipes