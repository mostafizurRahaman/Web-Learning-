import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import CheackOut from "../../Pages/CheackOut/CheackOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Courses from "./../../Pages/Courses/Courses";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         { path: "/", element: <Home></Home> },
         { path: "/home", element: <Home></Home> },
         {
            path: "/courses",
            element: <Courses></Courses>,
            loader: async () =>
               fetch("https://web-learning-server-six.vercel.app/courses"),
            },
         {
            path: "/courses/:id",
            element: <CourseDetails></CourseDetails>,
            loader: async ({ params }) =>
               fetch(
                  `https://web-learning-server-six.vercel.app/courses/${params.id}`
               ),
         },
         {
            path: "/checkout/:id",
            element: (
               <PrivateRoute>
                  <CheackOut></CheackOut>{" "}
               </PrivateRoute>
            ),
            loader: async ({ params }) =>
               fetch(
                  `https://web-learning-server-six.vercel.app/courses/${params.id}`
               ),
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/profile",
            element: (
               <PrivateRoute>
                  <Profile></Profile>{" "}
               </PrivateRoute>
            ),
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
         },
         {
            path: "*",
            element: <Error></Error>,
         },
      ],
   },
]);

export default routes;
