import React from "react";

function RecipeContainer({ recipes }) {
  return (
    <>
      <div className="text-center mt-16">
        <div className="">
          <h2>Recipes:</h2>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
