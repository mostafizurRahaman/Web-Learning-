import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {FaShoppingCart, FaArrowAltCircleLeft} from 'react-icons/fa';

const CourseDetails = () => {
   const course = useLoaderData();
   console.log(course);
   const { id, name, image, description, price, duration, courseFeatures } =
      course;

   console.log(courseFeatures);
   return (
      <div className="bg-violet-500 text-black font-semibold capitalize w-full py-5 dark:bg-gray-600 dark:text-white ">
         <div className="w-11/12 mx-auto bg-white  mt-10 mb-10 p-4 rounded-md flex flex-col md:flex-row gap-5  dark:bg-gray-500 dark:shadow-md shadow-white">
            <div className="md:w-3/5 md:border-r-2 border-violet-700 dark:md:border-r-white  flex justify-center flex-col">
               <div className=" flex items-center mb-5">
                  <img
                     src={image}
                     alt={name}
                     className="w-4/5 mx-auto border-8 rounded-md border-violet-600 h-auto"
                  />
               </div>
               <div>
                  <h3 className="border border-b-2  border-gray-600 mr-2  font-bold text-xl p-1 rounded-tl-3xl rounded-br-3xl text-black italic bg-orange-500 dark:text-white uppercase text-center  mb-3  rounded-sm dark:border-b-white  py-3">
                     {name}
                  </h3>
                  <h4 className="flex items-center justify-around  my-4 gap-1">
                     <span className="text-xl font-bold  text-orange-500 dark:bg-white bg-black p-1 px-2 rounded-md dark:text-gray-800">
                        {" "}
                        price: {price} tk{" "}
                     </span>{" "}
                     <span className="text-xl font-bold  text-orange-500 dark:bg-white bg-black  p-1 px-2 rounded-md dark:text-gray-800">
                        duration: {duration}
                     </span>
                  </h4>
                  <p>{description}</p>
               </div>
            </div>

            <div className="md:w-2/5  flex items-center justify-center ">
               <div>
                  <h3 className="border border-b-2  border-gray-600 mr-2  font-bold text-xl p-1 rounded-tl-3xl rounded-br-3xl text-black italic bg-orange-500 dark:text-white uppercase text-center  mb-3  rounded-sm dark:border-b-white  ">
                     Features:
                  </h3>
                  {courseFeatures.map((feature, idx) => (
                     <li
                        className="block w-full list-none border-b uppercase pt-3 pb-1 border-violet-500  dark:border-white "
                        key={idx}
                     >
                        {feature}
                     </li>
                  ))}
                  <Link to={`/checkout/${id}`} className="text-white bg-black dark:text-black dark:bg-white w-56 text-center gap-2 justify-center  flex items-center  mx-auto mt-4 px-3 py-2 text-xl font-semibold hover:bg-orange-500 dark:hover:bg-orange-500 duration-500 transition-all rounded-3xl  dark:hover:text-white ">Checkout Now <FaShoppingCart></FaShoppingCart> </Link>
                  <Link to='/courses' className="text-white bg-black dark:text-black dark:bg-white w-56 rounded-3xl text-center gap-2 mx-auto mt-4 px-3 py-2 text-xl font-semibold hover:bg-orange-500 dark:hover:bg-orange-500 duration-500 transition-all dark:hover:text-white flex items-center  justify-center">Back to Course<FaArrowAltCircleLeft></FaArrowAltCircleLeft> </Link>
                  </div>
            </div>
         </div>
      </div>
   );
};

export default CourseDetails;
