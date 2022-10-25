import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Courses from '../../Pages/Courses/Courses'

const routes = createBrowserRouter([
   {path: '/', element: <Main></Main>, children: [
      {path: '/' , element: <Home></Home>}, 
      {path: '/home', element: <Home></Home>},
      {path: '/courses', element: <Courses></Courses>}, 
   ]}
])

export default routes; 