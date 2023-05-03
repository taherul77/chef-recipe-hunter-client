/* eslint-disable no-unused-vars */
import React from "react";

const RecipeGallery = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 ">
          <img
            src="https://i.ibb.co/j35FCVG/Vegetarian-chilli-206c469.webp"
            alt=""
            className="w-full h-full col-span-2 hover:scale-105 group hover:shadow-xl row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded hover:scale-105 group hover:shadow-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/KVNCzLb/satay-sweet-potato-curry-17cc62d.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded hover:scale-105 group hover:shadow-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/4TDSQWX/Vegetarian-recipes-912ca1d.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded hover:scale-105 group hover:shadow-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/wzHHkf7/Easy-lentil-curry-15e688f.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded hover:scale-105 group hover:shadow-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/LztfcnT/kidney-bean-curry-f8e0b17.webp"
          />
         
          
        </div>
      </section>
    </div>
  );
};

export default RecipeGallery;
