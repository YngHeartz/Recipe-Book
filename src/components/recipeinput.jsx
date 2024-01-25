import React, { useState } from "react";

function RecipeInput() {
    // State Variables
    const [recipe, setRecipe] = useState("");
    const [image, setImage] = useState();

    // logic to add the recipe information
    const addRecipe = (e) => {
        const enteredRecipe = e.target.previousElementSibling.value;
        setRecipe(enteredRecipe);

        // Resets the input field title to be an empty string
        e.target.previousElementSibling.value = "";

        // alerts the user that they are not entering any acceptable data
        if (enteredRecipe === "") {
            alert("Nothing has been entered");
        }
    }

    return (
        <>
        {/* Container for Input field, button */}
            <div className="text-center mt-20">
                {/* Input Field for recipe Information */}
                <input
                    type="text"
                    placeholder="Recipe Name"
                    className="size-9 w-auto text-center border-s"
                    onChange={() => {}} 
                />
                <input type="file" placeholder="Image" />
                {/* Add Recipe Button */}
                <button
                    className="ml-10 text-white p-2 bg-black rounded-sm font-bold hover:bg-pink-300 hover:text-white  transition duration-500"
                    onClick={addRecipe}
                >
                    Add Recipe
                </button>
            </div>
            {/* Recipe Collections Header */}
            <h1 className="text-center text-3xl mt-9 font-bold">Recipes Collection</h1>
            
            {/* Where the Recipe output will be */}
            <div className="recipecard">
                <h1>{recipe}</h1>
            </div>            
        </>
    );
}

export default RecipeInput;
