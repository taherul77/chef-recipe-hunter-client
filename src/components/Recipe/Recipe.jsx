/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Star from "../../assets/star.png";
import LazyLoad from 'react-lazy-load';

const Recipe = ({ recipes }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(true);
    toast.success("Add Favorite Success")

   
  };
  const { image, name, description,rating, ingredients,cooking_method, review } = recipes;
  return (
    <div>
      <div className="container flex flex-col mx-auto e mt-5 lg:flex-row">
        
      <div className="flex items-center justify-center  md:p-8 lg:p-12">
        <LazyLoad >
        <img src={image} alt="" className="rounded-lg shadow-lg" />
        </LazyLoad>
              
              
            </div>
        
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold leading-none">
          {name}
          </h2>
          <p className="mt-2 mb-2  text-sm">
            <b>Description : </b>
          {description}
          </p>
          <p className=" mb-2  text-sm">
            <b>Ingredients : </b>
          {ingredients}
          </p>
          <p className=" mb-2  text-sm">
            <b>Cooking Method : </b>
          {cooking_method}
          </p>
          <p className=" mb-2  text-sm"><b>Review : </b>
          {review}
          </p>
          <div className="flex items-center md-2 space-x-2">
          <b>Rating : </b>
                <img className="h-4" src={Star} alt="" />
                <span className="self-center font-medium text-sm mt-1">
                  
                  {rating}
                </span>
              </div>
          <button
          disabled={favorite===true}
           onClick={() => handleFavorite()}
           className={`self-start mt-2 px-10 py-3 text-lg  font-medium rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 disabled:cursor-not-allowed `}>
            {"Add to favorite"}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Recipe;
