/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Recipes from "./Recipes";
import LazyLoad from "react-lazy-load";

const RecipesContent = ({recipes}) => {
    const { id, recipes_ } = recipes;
    console.log(recipes_);
  return (
    <div>
      <div className="w-full max-w-sm hover:scale-105 overflow-hidden bg-white rounded-lg shadow-lg ">
      <LazyLoad >
      <img
          className="object-cover w-full rounded-xl aspect-square"
          src={recipes_.image}
          alt="avatar"
        />
    </LazyLoad>
        
       

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 ">
             <b>{recipes_.name} </b>
          </h1>

          <div className="flex items-center mt-4 ">
            <h1 className="px-2 text-sm"> <b>{recipes_.description}</b>
                  </h1>
          </div>

          <div className="flex items-center mt-4 ">
            <h1 className="px-2 text-sm">
             <b>Review: {recipes_.review} </b>
              
            </h1>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default RecipesContent;
