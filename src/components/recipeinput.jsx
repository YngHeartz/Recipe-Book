import React, { useState } from "react";

function RecipeInput() {
    const [recipe, setRecipe] = useState("");

    const addRecipe = (e) => {
        const enteredRecipe = e.target.previousElementSibling.value;
        setRecipe(enteredRecipe);

        e.target.previousElementSibling.value = "";

        if (enteredRecipe === "") {
            alert("Nothing has been entered");
        }
    }

    return (
        <>
            <div className="text-center mt-20">
                <input
                    type="text"
                    placeholder="Recipe Name"
                    className="size-9 w-auto text-center border-s"
                    onChange={() => {}} 
                />
                <button
                    className="ml-10 text-white p-2 bg-black rounded-sm hover:bg-pink-300 hover:text-white hover:font-bold transition duration-500"
                    onClick={addRecipe}
                >
                    Add Recipe
                </button>
            </div>
            <h1 className="text-center text-3xl mt-9 font-bold">Recipes Collection</h1>
            <h1>{recipe}</h1>
        </>
    );
}

export default RecipeInput;
