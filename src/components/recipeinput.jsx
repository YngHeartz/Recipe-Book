import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function RecipeInput() {
    // State Variables
    const [recipeName, setRecipeName] = useState("");
    const [recipeDetails, setRecipeDetails] = useState("");
    const [image, setImage] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Function to handle image selection
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    // logic to add the recipe information
    const addRecipeInformation = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Retrieve the recipe name from the input field
        const enteredRecipeName = e.target.querySelector('input[type="text"]').value;
        setRecipeName(enteredRecipeName);

        // Reset the input field for the recipe name
        e.target.querySelector('input[type="text"]').value = "";

        // Mark recipe as submitted
        setSubmitted(true);
    };

    return (
        <>
            {/* Container for Input field, button */}
            <div className="text-center mt-20">
                {/* Form for adding recipe information */}
                <form onSubmit={addRecipeInformation}>
                    {/* Input Field for recipe Name */}
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        className="size-9 w-auto text-center border-2 hover:border-pink-500   focus:border-pink-500 rounded-md p-2"
                    /><br />
                    {/* File input for image */}
                    <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="mt-4 border-2 border-pink-500 rounded-md p-2"
                    /><br />
                    <input
                        type="text"
                        placeholder="Recipe Details"
                        className="mt-4 border-2 border-pink-500 rounded-md p-2"
                    /><br />
                    {/* Add Recipe Button */}
                    <button
                        type="submit"
                        className="mt-5 text-white p-2 bg-black rounded-sm font-bold hover:bg-pink-300 hover:text-white transition duration-500"
                    >
                        Add Recipe
                    </button>
                </form>
            </div>
            {/* Recipe Collections Header */}
            <h1 className="text-center text-3xl mt-9 font-bold">
                Recipes Collection
            </h1>

            {/* Display Recipe Card if submitted */}
            {submitted && (
                <CardDefault
                    recipeName={recipeName}
                    recipeDetails={recipeDetails}
                    image={image}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
            )}
        </>
    );
}

function CardDefault({ recipeName, recipeDetails, image, expanded, setExpanded }) {
    return (
        <Card className="mt-6 w-96 border border-gray-300 rounded-md overflow-hidden">
            <CardHeader color="blue-gray" className="relative h-40">
                <img
                    src={image ? URL.createObjectURL(image) : ""}
                    alt="card-image"
                    className="w-full h-full object-cover rounded-t-md"
                />
            </CardHeader>
            <CardBody className="p-4">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {recipeName}
                </Typography>
                <Typography>
                    {expanded ? recipeDetails : recipeDetails.substring(0, 50)}
                </Typography>
                <Button
                    onClick={() => setExpanded(!expanded)}
                    className="bg-black text-white font-semibold rounded-md  size-11 w-auto p-3 ml-0"
                >
                    {expanded ? "Read Less" : "Read More"}
                </Button><br />
                {/* Input field for editing recipe details */}
                <input
                    type="text"
                    placeholder="Recipe Details"
                    value={recipeDetails}
                    onChange={(e) => setRecipeDetails(e.target.value)}
                    className=" size-9 w-auto text-center border-2 rounded-md p-2 mt-4"
                />
            </CardBody>
        </Card>
    );
}

export default RecipeInput;
