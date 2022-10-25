import React from 'react';
import { Link } from 'react-router-dom';


const LeftSide = ({courses}) => {
   
   return (
      <div className='text-white  sticky top-24'>
         <h4 className='text-xl p-1 rounded-tl-3xl rounded-br-3xl bg-orange-500 font-semibold text-center pb-2 border-b-2 my-4'>Our Courses</h4>
         {
            courses.map(course => <Link className='text-white text-base capitalize text-center font-medium border-b pb-1 mb-3 block hover:text-black  dark:hover:text-orange-500 duration-500' key={course.id}  to={`/courses/${course.id}`}>{course.name}</Link> )
            
         }
      </div>
   );
};

export default LeftSide;