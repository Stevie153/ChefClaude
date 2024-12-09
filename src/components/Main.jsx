import React, { useState, useEffect } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";

import { getRecipeFromMistral } from "./api";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredients");

    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      e.currentTarget.reset(); // Clear the input field after submission
    }
  };

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }

  useEffect(() => {
    console.log("Current Ingredients:", ingredients);
  }, [ingredients]); // Adding ingredients as a dependency

  return (
    <main className="flex justify-center items-start border bg-slate-100 m-4 rounded-t-lg shadow-lg min-h-screen">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-screen-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            className="rounded-lg border-2 border-gray-300 p-3 shadow-md w-full sm:w-auto flex-grow"
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add Ingredients"
            name="ingredients"
          />
          <button className="rounded-lg bg-green-700 text-white p-3 shadow-md transition duration-300 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Add Ingredient
          </button>
        </form>

        {ingredients.length > 0 && (
          <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
        )}

        {recipe && <ClaudeRecipe recipe={recipe} />}
      </div>
    </main>
  );
};

export default Main;
