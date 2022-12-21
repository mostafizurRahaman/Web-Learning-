import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Assets/img/error.png'
const Error = () => {
   return (
      <div  className='flex items-center w-full py-5 px-4 md:px-10 bg-violet-600 dark:bg-gray-800 flex-col-reverse md:flex-row justify-around md:justify-between min-h-[85vh]  md:gap-0 md:min-h-screen '>
      <div className='w-full sm:w-5/6 text-center md:text-start md:w-1/2 text-black'>
           <h3 className='text-white font-semibold capitalize text-2xl md:text-3xl'>Ohhhhh NO. </h3>
           <h3 className='text-white  bg-red-600 px-2 py-2 font-bold text-4xl md:text-7xl mt-3 my-5 text-center dark:bg-red-800'>404 Error!!! </h3>
           <p className='text-white font-medium capitalize text-base md:pr-8'>Your are in wrong route</p>
           <Link to='/home'>
           <button className='text-white bg-black font-bold capitalize mt-5 w-40 hover:w-44 py-2 hover:px-5 duration-1000 transition-all  dark:text-black dark:bg-white rounded-md '>back to home </button>
           </Link>
      </div>
      <div className=' sm:w-5/6 md:w-1/2 '>
           <img src={error} alt="" className='w-4/5 mx-auto'/>
      </div>
  </div>
   );
};

export default Error;