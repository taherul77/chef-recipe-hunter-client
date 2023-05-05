/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const signOut = () => {
    logOut()
      .then(() => {
        refreshPage();
      })
      .catch((error) => {});
  };
  const handleProfileMenu = () => { 
        setIsProfileMenuOpen(!isProfileMenuOpen); 
    };
  const refreshPage = () => {
    window.location.reload();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-zinc-100  px-8 py-10 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
          to="/"
        >
          <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
            Perfect Food
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Recipe
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-label="About"
              title="About"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blog
            </Link>
          </li>
        </ul>
        {user?.uid ? (
          <div className="col-span-3 hidden lg:block"> 
          <div className="flex items-center justify-end"> 
              <div className="relative"> 
                  {user?.photoURL ? ( 
                      <img 
                          onClick={() => handleProfileMenu()} 
                          className="h-8 w-8 rounded-full cursor-pointer" 
                          alt="" 
                          src={user.photoURL} 
                      /> 
                  ) : ( 
                      <img 
                          onClick={() => handleProfileMenu()} 
                          className="h-8 w-8 rounded-full cursor-pointer" 
                          alt="" 
                          src="https://i.ibb.co/VvZScTP/blank-avatar.png" 
                      /> 
                  )} 
                  <ul 
                      className={`${ 
                          isProfileMenuOpen 
                              ? "block" 
                              : "hidden" 
                      }  absolute border rounded-md top-10 right-0 w-28 bg-white`} 
                  > 
                      <li className="px-3 h-10 flex items-center justify-center hover:bg-black/[0.03] font-medium text-black"> 
                          {user?.displayName} 
                      </li> 
                      <hr /> 
                      <li className="px-3 h-10 flex items-center justify-center hover:bg-red-400 rounded-b-md font-medium text-black"> 
                          <Link onClick={signOut}> 
                              Logout 
                          </Link> 
                      </li> 
                  </ul> 
              </div> 
          </div> 
      </div>
        ) : (
          <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
           
            <li>
              <Link
                to="/login"
                className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500"
                aria-label="login"
                title="login"
              >
                login
              </Link>
            </li>
          </ul>
        )}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      aria-label="Company"
                      title="Perfect Food"
                      className="inline-flex items-center"
                      to="/"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/recipes"
                        aria-label=" Recipe"
                        title=" Recipe"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Recipe
                      </Link>
                      
                    </li>
                    <li>
                      <Link
                        to="/recipes"
                        aria-label="About"
                        title="About"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About
                      </Link>
                      
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        blog
                      </Link>
                    </li>

                    <li>
                      <Link to="login"
                      className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500"
                      aria-label="login"
                      title="login">
                      Login
                      </Link>
                      
                        
                     
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
