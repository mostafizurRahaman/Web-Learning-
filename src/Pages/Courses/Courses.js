import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from '../Shared/LeftSide/LeftSide';
import SingleCourses from './SingleCourses/SingleCourses';


const Courses = () => {
   const courses = useLoaderData(); 
   
   console.log(courses); 
   return (
      <div className="grid grid-cols-1  md:grid-cols-5 w-full h-auto  ">
            <div className='bg-violet-500 dark:bg-gray-900  order-2 md:order-1 md:col-span-1 md:min-h-screen py-4 px-2'>
               <LeftSide courses={courses}></LeftSide>
            </div>
            <div className='bg-white p-5 grid  md:col-span-4 grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-5 gap order-1 md:order-2 my-5'>
              {
               courses.map(course => <SingleCourses 
                  key={course.id} 
                  course={course}
                  ></SingleCourses>)
              }
              
            </div>
      </div>
   );
};

export default Courses;