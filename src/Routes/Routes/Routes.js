import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CheackOut from "../../Pages/CheackOut/CheackOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Courses from './../../Pages/Courses/Courses';

const routes = createBrowserRouter([
   {path: '/', element: <Main></Main>, children: [
      {path: '/' , element: <Home></Home>}, 
      {path: '/home', element: <Home></Home>},
      {
      path:'/courses', 
      element: <Courses></Courses>,
      loader: async()=> fetch('http://localhost:5000/courses')
      }, 
      {
         path:'/courses/:id', 
         element: <CourseDetails></CourseDetails>, 
         loader: async({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      }, 
      {
         path:'/checkout/:id', 
         element: <CheackOut></CheackOut>, 
         loader: async({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
         path:'/register', 
         element: <Register></Register>
      },
      {
         path:'/login', 
         element: <Login></Login>
      }
   ]}
])

export default routes; 