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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/Payment/Payment";


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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'manage-class',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path: 'manage-user',
          element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: 'add-class',
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'my-class',
          element:<InstructorRoute><MyClass></MyClass></InstructorRoute>
        },
        {
          path: 'selected-class',
          element:<SelectedClass></SelectedClass>
        },
        {
          path: 'enrolled-class',
          element:<EnrolledClass></EnrolledClass>
        },
        {
          path: 'payment',
          element:<Payment></Payment>
        }
      ]
    }
    
  ]);