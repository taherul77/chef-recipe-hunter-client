/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Recipe = ({ recipes }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      toast.success("Add to favorite");
    } else {
      toast.error("Remove from favorite");
    }
  };
  const { image, name, description, review } = recipes;
  return (
    <div>
      <div className="container flex flex-col mx-auto e mt-5 lg:flex-row">
        
      <div className="flexl items-center justify-center p-4 md:p-8 lg:p-12">
              <img src={image} alt="" className="rounded-lg shadow-lg" />
              
            </div>
        
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold leading-none">
          {name}
          </h2>
          <p className="mt-4 mb-8 text-sm">
          {description}
          </p>
          <p className="mt-2 mb-8 text-sm">
          {review}
          </p>
          <button
           onClick={() => handleFavorite()}
           className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900">
            {favorite ? "Remove from favorite" : "Add to favorite"}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Recipe;
