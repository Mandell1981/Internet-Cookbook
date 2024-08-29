const React = require('react')
const Default = require('./layouts/Default')

function Index ({recipes, title}) {
    return (
      <Default title={title}>
        <h2>Recipe Page</h2>
    {/*<p>We have the best {recipes[0].name} recipe!</p>*/}
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <a href={`/recipes/${index}`}>
            {recipe.name}
            </a>
          </li>
          
        ))}
      </ul>
      <div className="newButton">
        <h3>Think You can Cook...?</h3> 
        <p>Click the "Add Recipe" button to include your Favorite recipe.</p>
  <a href="/recipes/new"><button>Add Recipe!</button></a>
</div>

      </Default>
    )
}

module.exports = Index
