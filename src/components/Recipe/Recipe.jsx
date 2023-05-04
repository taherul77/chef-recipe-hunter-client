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
    toast.success("ADDDDDDDDDDD")

   
  };
  const { image, name, description,rating, review } = recipes;
  return (
    <div>
      <div className="container flex flex-col mx-auto e mt-5 lg:flex-row">
        
      <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
        <LazyLoad >
        <img src={image} alt="" className="rounded-lg shadow-lg" />
        </LazyLoad>
              
              
            </div>
        
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold leading-none">
          {name}
          </h2>
          <p className="mt-4 mb-2  text-sm">
            <b>Description : </b>
          {description}
          </p>
          <p className="mt-2 mb-2  text-sm"><b>Review : </b>
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
           className={`self-start mt-2 px-10 py-3 text-lg  font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900 disabled:bg-red-500`}>
            {"Add to favorite"}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Recipe;
