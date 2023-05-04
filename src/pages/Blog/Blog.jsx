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
      <ReactToPdf targetRef={ref} filename="prefect-food.pdf">
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
                  What is Cross-Origin Resource Sharing (CORS)?
                </h6>
                <p className="text-sm">
                  Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                  mechanism that allows a server to indicate any origins
                  (domain, scheme, or port) other than its own from which a
                  browser should permit loading resources. CORS also relies on a
                  mechanism by which browsers make a "preflight" request to the
                  server hosting the cross-origin resource, in order to check
                  that the server will permit the actual request. In that
                  preflight, the browser sends headers that indicate the HTTP
                  method and headers that will be used in the actual request.
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
                  Google Firebase offers many features that pitch it as the
                  go-to backend development tool for web and mobile apps. It
                  reduces development workload and time. And it's a perfect
                  prototyping tool. Firebase is simple, lightweight, friendly,
                  and industrially recognized.Firebase is a less technical and
                  time-saving alternative to writing full-fledged backend code
                  for dynamic apps. <br />
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
          <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
            <div className="relative flex items-center justify-between p-5 rounded-sm">
              <div className="pr-4">
                <h6 className="mb-2 font-semibold leading-5 text-lg">
                  How does the private route work?
                </h6>
                <p className="text-sm">
                  The react private route component renders child components
                  (children) if the user is logged in. If not logged in the user
                  is redirected to the /login page with the return url passed in
                  the location state property.
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
                  What is Node? How does Node work?
                </h6>
                <p className="text-sm">
                  Node.js is an open-source backend javascript runtime
                  environment. Node allows developers to write JavaScript code
                  that runs directly in a computer process itself instead of in
                  a browser. Node can, therefore, be used to write server-side
                  applications with access to the operating system, file system,
                  and everything else required to build fully-functional
                  applications. Node.js is written in C, C++, and JavaScript,
                  and it is built on the open-source V8 JavaScript engine which
                  also powers JS in browsers such as Google Chrome. As V8
                  supports new features in JavaScript, they are incorporated
                  into Node.
                  <br />
                  Node.js accepts the request from the clients and sends the
                  response, while working with the request node.js handles them
                  with a single thread. To operate I/O operations or requests
                  node.js use the concept of threads. Thread is a sequence of
                  instructions that the server needs to perform. It runs
                  parallel on the server to provide the information to multiple
                  clients. Node.js is an event loop single-threaded language. It
                  can handle concurrent requests with a single thread without
                  blocking it for one request. <br />
                  Node.js basically works on two concept:
                  <li>Asynchronous</li>
                  <li>Non-blocking I/O</li>
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
