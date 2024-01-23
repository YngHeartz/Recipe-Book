import React, { useState } from "react";

function RecipeInput(){

    const [recipe, setRecipe] = useState([]);
    
    const AddRecipe = (e) => {
        e.preventDefault();
        setRecipe(e.target.value);
    }

    return(
        <>
        <div className="text-center mt-20">
            <input type="text" placeholder="Recipe Name" className="size-9 w-auto text-center border-s" />
            <button className="ml-10 text-white p-2 bg-black rounded-sm hover:bg-pink-300 hover:text-white hover:font-bold transition duration-500" onClick={AddRecipe}>Add Recipe</button>
        </div>
        </>
    );
}
export default RecipeInput