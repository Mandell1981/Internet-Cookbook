const React = require('react')
const Default = require('./layouts/default')


function Show ({recipe}) {
    console.log(recipe.name)
    return (
      <Default title={recipe.name}>
        <h1>Show Page</h1>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name}/>
        <li><a href="/recipes">Go home</a></li>
        <p>{recipe.description}</p>
      </Default>
    )  
}

module.exports = Show