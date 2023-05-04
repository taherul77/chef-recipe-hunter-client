/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactToPdf from "react-to-pdf";
import { AiOutlineDownload } from "react-icons/ai";
const Blog = () => {
  const ref = React.createRef();
  return (
    <div>
      <div className=" relative mb-8  mx-auto  border shadow-md  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute  top-4 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-center  ">Blog</span>
            </span>{" "}
          </h2>
        </div>
      </div>
      <ReactToPdf  y={25} scale={0.6} targetRef={ref} filename="prefect-food.pdf">
        {({ toPdf }) => (
          <button
            className="fixed bottom-5 right-5 bg-neutral text-secondary text-2xl py-2 px-2 rounded-full"
            onClick={toPdf}
          >
            <AiOutlineDownload></AiOutlineDownload>
          </button>
        )}
      </ReactToPdf>
      <div ref={ref}>
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
          <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="relative flex items-center justify-between p-5 rounded-sm">
              <div className="pr-4">
                <h6 className="mb-2 font-semibold leading-5 text-lg">
                  Difference between nodejs and express js?
                </h6>
                <p className="text-sm">
                  Node.js is a JavaScript runtime built on the V8 engine that
                  allows developers to run JavaScript on the server-side. It
                  provides a set of APIs for building server-side applications,
                  including features like file system access, network
                  connectivity, and database access. Node.js is used to build
                  scalable and high-performance server-side applications, and it
                  can be used to build a wide range of applications, from
                  command-line tools to web servers.
                  <br />
                  Express.js is a web framework built on top of Node.js that
                  simplifies the process of building web applications. It
                  provides a set of APIs for handling HTTP requests and
                  responses, and it includes features like routing, middleware,
                  and templating. Express.js is used to build web applications
                  and APIs, and it is a popular choice for building RESTful
                  APIs.
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
                  What is a custom hook, and why will you create a custom hook?
                </h6>
                <p className="text-sm">
                  In React, a custom hook is a JavaScript function that uses
                  built-in hooks to provide a reusable piece of functionality
                  that can be shared across multiple components. Custom hooks
                  allow you to abstract complex logic and reuse it throughout
                  your application, improving code organization and reducing
                  repetition.
                  <br />A custom hook is simply a JavaScript function that
                  begins with the word "use". By convention, custom hooks are
                  usually defined in a separate file and exported as a named
                  function. Here is an example of a custom hook that uses the
                  useEffect hook to fetch data from an API
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
