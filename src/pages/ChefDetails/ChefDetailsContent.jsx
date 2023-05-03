/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Recipe from "../../components/Recipe/Recipe";

const ChefDetailsContent = ({ chef }) => {
  const { id, chef_ } = chef;
  const { chef_photo, chef_name, experience, likes, recipes } = chef_;
  console.log(chef_photo);

  return (
    <div>
      <section className="">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src={chef_photo}
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium ">{chef_name}</h3>
              <span className="mt-1 font-medium ">{experience}</span>
            </div>
          </div>

          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          {recipes.map((recipes) => (
          <Recipe key={recipes.id} recipes={recipes}></Recipe>
        ))}

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefDetailsContent;
