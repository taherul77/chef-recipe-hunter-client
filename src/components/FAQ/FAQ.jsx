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
                What is Cross-Origin Resource Sharing (CORS)?
              </h6>
              <p className="text-sm">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
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
                What we use Firebase? What other options to implement
                authentication?
              </h6>
              <p className="text-sm list-none">
                Google Firebase offers many features that pitch it as the go-to
                backend development tool for web and mobile apps. It reduces
                development workload and time. And it's a perfect prototyping
                tool. Firebase is simple, lightweight, friendly, and
                industrially recognized.Firebase is a less technical and
                time-saving alternative to writing full-fledged backend code for
                dynamic apps. <br />
                Competitors and Alternatives to Firebase Realtime Database:{" "}
                <br />
                <li>→ MongoDB</li>
                <li>→ Oracle Database</li>
                <li>→ Amazon Redshift</li>
                <li>→ DataStax Enterprise</li>
                <li>→ Redis Enterprise Cloud</li>
                <li>→ Cloudera Enterprise Data Hub</li>
                <li>→ Db2</li>
                <li>→ Couchbase Server</li>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FAQ;
