/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Recipe = ({recipes}) => {
    const { image, name, description, review } = recipes;
    return (
        <div>
              <div>
              <img src={image} alt="" />
              <h2 className="text-3xl font-semibold leading-none">
                {name}
              </h2>
              <p className="mt-4 mb-8 text-sm">
                {description}
              </p>
              <p className="mt-4 mb-8 text-sm">
                {review}
              </p>
              <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl ">
                Get started
              </button>
            </div>
            
        </div>
    );
};

export default Recipe;