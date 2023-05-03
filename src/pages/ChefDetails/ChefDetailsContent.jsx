/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ChefDetailsContent = ({chef}) => {
    const {id, chef_}= chef;
console.log(chef);
    return (
        <div>
              <section className="bg-white  container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="container flex flex-col  lg:flex-row mb-8 p-5 border     mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-4 px-6 py-8 space-y-6 rounded-sm ">

                    <div className="flex flex-col p-5 w-full pr-4 lg:w-2/3 ">
                        <p className="mt-4 text-sm"><b></b>  </p>
                        <p className="mt-4 text-sm">  </p>
                        <p className="mt-4 text-sm">  </p>
                        <p className="mt-4 text-sm"> </p>

                    </div>
                    <div className="w-full lg:w-1/3  ">
                        <div className="bg-blue-200 p-4 border-md rounded-md">
                            <h2 className="text-2xl mt-4">Job Details</h2>
                            <p className="mt-4 text-sm"><b>Salary : </b> </p>
                            <p className="mt-4 text-sm"><b>Job Title : </b>  </p>
                            <h2 className="text-2xl mt-4">Contact Information</h2>
                            <hr className='h-[2px] bg-black' />
                            <p className="mt-4 text-sm"><b>Phone : </b>  </p>
                            <p className="mt-4 text-sm"><b>Email : </b> </p>
                            <p className="mt-4 text-sm"><b>Address : </b>  </p>
                        </div>
                        <button
                            type="button"
                            className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500 mt-2"
                            >
                            Apply Now
                        </button>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default ChefDetailsContent;