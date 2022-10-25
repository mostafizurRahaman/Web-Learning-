import React from 'react';
import LeftSide from './../../Pages/Shared/LeftSide/LeftSide';
import { Outlet } from 'react-router-dom';

const CoursesLayout = () => {
   return (
      <div>
         <LeftSide></LeftSide>
         <Outlet></Outlet>
      </div>
   );
};

export default CoursesLayout;