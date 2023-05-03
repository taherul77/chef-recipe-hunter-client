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
import ChifDetail from './pages/ChefDetails/ChifDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
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
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path: "/chifDetail/:id",
        element: <ChifDetail></ChifDetail>,
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
   
     <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
