/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Content = ({chef}) => {
    const { id, chef_ } = chef;
    
  return (
    
    <div>
      <div className="w-full max-w-sm  rounded-lg">
        <img
          className="object-cover object-center w-full "
          src={chef_.chef_photo}
          alt="avatar"
        />
       

        
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold ">
            {chef_.chef_name}
          </h1>

          <p className="py-2 text-gray-700 ">
           {chef_.experience}
          </p>

          <div className="flex items-center mt-4 ">
           

            <h1 className="px-2 text-sm">{chef_.likes}</h1>
          </div>

         

       
        </div>
        <Link to={`/chifDetail/${id}`}>
                <div className='py-4'>
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
