import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path:'login',
          element: <Login></Login>
        }
      ],
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'manage-class',
          element:<ManageClass></ManageClass>
        },
        {
          path: 'manage-user',
          element:<Mana
        },
        {
          path: 'add-class',
        },
        {
          path: 'my-class',
        },
        {
          path: 'selected-class',
        },
        {
          path: 'enrolled-class',
        }
      ]
    }
    
  ]);