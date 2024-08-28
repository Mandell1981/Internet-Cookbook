const React = require('react')
const Default = require('./layouts/Default')

function Index ({recipes}) {
    return (
      <Default>
        <h2>Index Page</h2>
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
      </Default>
    )
}

module.exports = Index
