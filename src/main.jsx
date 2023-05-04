import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './pages/Provider/AuthProvider';
import Blog from './pages/Blog/Blog';
import ChefDetail from './pages/ChefDetails/ChefDetail';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Error from './components/Error/Error';
import Recipes from './pages/Recipes/Recipes';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <Error></Error>,
    children:[

      {
        path:'/',
        element:<Home></Home>
      },{
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/recipes",
        element:<Recipes></Recipes>
      },
      {
        path: "/chef-detail/:id",
        element:(
          <PrivateRoute>
            <ChefDetail></ChefDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/chef/${params.id}`
          ),
      },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <Toaster
  position="top-center"
  
/>
     <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
