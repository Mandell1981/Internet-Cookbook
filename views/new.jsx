const React = require('react')
const Default = require('./layouts/default')


function AddRecipe() {
    return (
      <Default title="Add Recipe">
        <h1>Add Recipe</h1>
        <form action="/recipes" method="POST">
          <input
            type="text"
            name="name"
            id="recipe-name" // Unique id for this input field
            placeholder="Recipe Name"
            required // Making the field required
          />
          <input
            type="text"
            name="image"
            placeholder="Recipe Image URL"
          />
          <textarea
            name="description"
            placeholder="Recipe Description"
          ></textarea>
          <button type="submit">Add Recipe</button>
        </form>
        <div className="backButton">
          <a href="/recipes">
            <button>Go back to the Index</button>
          </a>
        </div>
      </Default>
    );
  }

  module.exports = AddRecipe;