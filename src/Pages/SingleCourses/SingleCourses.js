import React from 'react';
import { Link } from 'react-router-dom';
const SingleCourses = ({course}) => {
   const {name ,id, image, description, price} = course; 
   return (
      <div className='bg-violet-500  dark:bg-gray-800 p-5 rounded-md pb-16 relative card z-0'>
        <div>
            <img src={image} alt={name}  className="h-52 w-full  rounded-md mb-3  bg-white" />
        </div>
        <div className='font-semibold text-black dark:text-white '>
            <h3 className='font-bold text-xl p-1 rounded-tl-3xl rounded-br-3xl text-black italic bg-orange-500 dark:text-white uppercase text-center  mb-3  rounded-sm border-b-2  '>{name}</h3>
            <h4 className='capitalize  my-3 font-bold text-xl hover:text-orange-500 duration-500'> price : {price} tk</h4>            
            <p className=''>{description.length >= 100 ? description.slice(0,100) + "..." : description }</p>
           <Link className=" bg-black text-white hover:bg-orange-500 duration-1000 transition-all w-48 text-center py-2 mx-auto block mt-5 rounded-sm dark:bg-white dark:text-black dark:hover:bg-orange-500 absolute bottom-3  right-1/2 translate-x-1/2" to={`/courses/${id}`}> Show Details  </Link>
        </div>

      </div>
   );
};

export default SingleCourses;