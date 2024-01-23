import React, { useState } from "react";
import RecipeInput from "./recipeinput";
import RecipeContainer from "./recipecontainer";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <>
      <RecipeInput onAddRecipe={addRecipe} />
      <RecipeContainer recipes={recipes} />
    </>
  );
}

export default RecipeManager;
