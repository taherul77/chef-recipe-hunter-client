/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Content = ({ chef }) => {
  const { id, chef_ } = chef;

  return (
    <div>
      <div className="flex flex-col items-center hover:scale-105 group hover:shadow-xl">
        <img
          className="object-cover w-full rounded-xl aspect-square"
          src={chef_.chef_photo}
          alt=""
        />

        <h1 className="mt-4 text-2xl font-semibold ">
        {chef_.chef_name}
        </h1>

        <p className="mt-2 ">
        {chef_.experience}
        </p>
        <p className="mt-2 ">
        {chef_.numbers_of_recipes}
        </p>
        <p className="mt-2 ">Likes:
        {chef_.likes}
        </p>

        <Link to={`/chifDetail/${id}`}>
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
  );
};

export default Content;
