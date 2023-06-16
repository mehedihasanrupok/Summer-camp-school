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
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import Instructors from "../pages/Instructors/Instructors";
import ClassesPage from "../pages/ClassesPage/ClassesPage";


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
        },
        {
          path:'instructors',
          element: <Instructors></Instructors>
        },
        {
          path:'classes',
          element: <ClassesPage></ClassesPage>
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
          element:<ManageUser></ManageUser>
        },
        {
          path: 'add-class',
          element:<AddClass></AddClass>
        },
        {
          path: 'my-class',
          element:<MyClass></MyClass>
        },
        {
          path: 'selected-class',
          element:<SelectedClass></SelectedClass>
        },
        {
          path: 'enrolled-class',
          element:<EnrolledClass></EnrolledClass>
        }
      ]
    }
    
  ]);