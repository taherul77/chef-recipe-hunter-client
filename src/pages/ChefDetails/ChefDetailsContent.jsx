/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Recipe from "../../components/Recipe/Recipe";

const ChefDetailsContent = ({ chef }) => {
  const { id, chef_ } = chef;
  const {
    chef_photo,
    chef_name,
    bio,
    numbers_of_recipes,
    experience,
    likes,
    recipes,
  } = chef_;
  console.log(chef_photo);

  return (
    <div>
      <section className="">
        <div className="container flex flex-col-reverse mx-auto mt-5  lg:flex-row">
          <div className="flex flex-col  px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className=" leading-snug">
                  <b>Name : </b>
                  {chef_name}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Bio : </b>
                  {bio}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Number of recipes : </b>
                  {numbers_of_recipes}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Years of experience : </b>
                  {experience}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug">
                  <b>Likes : </b>
                  {likes}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
              <img src={chef_photo} alt="" className="rounded-lg shadow-lg" />
              <div className="mt-2">
                <h3 className="text-lg font-medium ">{chef_name}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      
        <section className="">
        {recipes.map((recipes) => (
              <Recipe key={recipes.id} recipes={recipes}></Recipe>
            ))}
        </section>

        
   
    </div>
  );
};

export default ChefDetailsContent;
