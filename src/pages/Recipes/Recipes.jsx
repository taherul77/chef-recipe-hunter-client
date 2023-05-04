/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import RecipesContent from "./RecipesContent";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div>
      <div className=" relative mb-8  mx-auto  border shadow-md  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute  top-4 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-center  ">Recipes</span>
            </span>{" "}
          </h2>
        </div>
      </div>

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
