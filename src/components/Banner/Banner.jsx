/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              GREAT OFFERS
              <br className="hidden md:block" />
              ON FOODS{' '}
             
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We provide high quality food
            </p>
          </div>
          <div>
          <button
              type="button"
              className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover hover:scale-105 mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://i.ibb.co/j35FCVG/Vegetarian-chilli-206c469.webp"
              alt=""
            />
            <img
              className="object-cover hover:scale-105 w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://i.ibb.co/4TDSQWX/Vegetarian-recipes-912ca1d.webp"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover hover:scale-105 w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://i.ibb.co/LztfcnT/kidney-bean-curry-f8e0b17.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;