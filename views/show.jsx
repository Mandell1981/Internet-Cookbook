const React = require('react')
const Default = require('./layouts/default')


function Show ({recipe, index}) {
    console.log(recipe.name)
    return (
      <Default title={recipe.name}>
        <h1>Show Page</h1>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name}/>
        <li><a href="/recipes">Go home</a></li>
        <p>{recipe.description}</p>
        <form action={`/recipes/${index}?_method=DELETE`} method="POST">
            <input type='submit' value="Delete" />
        </form>
      </Default>
    )  
}

module.exports = Show