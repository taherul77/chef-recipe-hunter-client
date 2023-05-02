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
