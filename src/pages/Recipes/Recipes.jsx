/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import RecipesContent from "./RecipesContent";
import RecipesBanner from "./RecipesBanner";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div>
      <RecipesBanner></RecipesBanner>
      <div className="container px-6 py-10 mx-auto">
      <h2 className="text-2xl font-semibold text-center 0 capitalize lg:text-3xl ">
            OUR RECIPE
          </h2>
<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
{recipes.map((recipes) => (
            <RecipesContent key={recipes.id} recipes={recipes}></RecipesContent>
          ))}

</div>
      </div>
    </div>
  );
};

export default Recipes;
