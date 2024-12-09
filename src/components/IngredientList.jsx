import React from 'react'

const IngredientList = (props) => {
  return (
    <section className="m-2 items-start justify-center">
      <h2 className="text-2xl font-bold">Ingredients:</h2>
      <ul className="list-disc px-5 py-5 text-gray-500">
        {props.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="m-2 items-start flex justify-between border rounded-lg p-6 bg-gray-100 border-gray-100">
          <div className="flex flex-col space-y-2">
            <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl">Ready for a recipe</h3>
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
              Generate a recipe from your list of ingredients
            </p>
          </div>
          <button 
            onClick={props.getRecipe} 
            className="rounded-lg bg-amber-600 text-white p-3 shadow-md transition duration-300 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  )
}

export default IngredientList
