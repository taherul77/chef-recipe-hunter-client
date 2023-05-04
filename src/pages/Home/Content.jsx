/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Content = ({ chef }) => {
  const { id, chef_ } = chef;

  return (
    <div>
      <div className="w-full max-w-sm hover:scale-105 overflow-hidden bg-white rounded-lg shadow-lg ">
        <img
          className="object-cover w-full rounded-xl aspect-square"
          src={chef_.chef_photo}
          alt="avatar"
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 ">
             <b>{chef_.chef_name}</b>
          </h1>

          <div className="flex items-center mt-4 ">
            <h1 className="px-2 text-sm"> <b>Years of experience : </b>
                  {chef_.experience}</h1>
          </div>

          <div className="flex items-center mt-4 ">
            <h1 className="px-2 text-sm"><b>Numbers of recipes</b> {chef_.numbers_of_recipes}</h1>
          </div>

          <div className="flex items-center mt-4 ">
            <h1 className="px-2 text-sm">
             <b>Likes : </b>
              {chef_.likes}
            </h1>
          </div>
          <Link to={`/chefDetail/${id}`}>
            <div className="py-4">
              <button
                type="button"
                className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500"
              >
                View Details
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
