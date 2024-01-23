import React, { useState } from "react";

function RecipeInput({ onAddRecipe }) {
  const [newRecipeName, setNewRecipeName] = useState("");

  const addRecipe = (e) => {
    e.preventDefault();
    if (newRecipeName.trim() !== "") {
      const newRecipe = { name: newRecipeName };
      onAddRecipe(newRecipe);
      setNewRecipeName("");
    }
  };

  return (
    <>
      <div className="text-center mt-20">
        <input
          type="text"
          placeholder="Recipe Name"
          value={newRecipeName}
          onChange={(e) => setNewRecipeName(e.target.value)}
          className="size-9 w-auto text-center border-s"
        />
        <button
          className="ml-10 text-white p-2 bg-black rounded-sm hover:bg-pink-300 hover:text-white hover:font-bold transition duration-500"
          onClick={addRecipe}
        >
          Add Recipe
        </button>
      </div>
    </>
  );
}

export default RecipeInput;
