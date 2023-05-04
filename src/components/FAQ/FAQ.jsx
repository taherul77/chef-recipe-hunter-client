/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";

const FAQ = () => {
  return (
    <div className="container px-6 py-8 mx-auto" >
         <h2 className="text-2xl font-semibold text-center 0 capitalize lg:text-3xl ">
            FAQ
          </h2>
      <div className="py-12">
      <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="relative flex items-center justify-between p-5 rounded-sm">
              <div className="pr-4">
                <h6 className="mb-2 font-semibold leading-5 text-lg">
                  Differences between uncontrolled and controlled components ?
                </h6>
                <p className="text-sm">
                  Uncontrolled components are typically simpler to use, but also
                  offer less control over the behavior of the component. They
                  rely on the underlying DOM (Document Object Model) to manage
                  the state of the component, rather than managing it through
                  the component itself. This means that the component is
                  responsible for rendering and receiving events from the DOM,
                  but not for managing its own state.
                  <br />
                  On the other hand, controlled components are more complex to
                  use, but offer more control over the behavior of the
                  component. They manage their own state, which means that they
                  are responsible for both rendering and receiving events, as
                  well as managing the component's state. This allows the
                  developer to have more control over the behavior of the
                  component and to ensure that it behaves consistently.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="relative flex items-center justify-between p-5 rounded-sm">
              <div className="pr-4">
                <h6 className="mb-2 font-semibold leading-5 text-lg">
                  How to validate React props using PropTypes?
                </h6>
                <p className="text-sm list-none">
                  Import PropTypes at the top of the component file:
                  <br />
                  import PropTypes from 'prop-types';
                  <br />
                  Define the expected props for the component by adding a
                  propTypes static property
                  <br />
                  Pass the props to the component
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default FAQ;
