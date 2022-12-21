import React from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/img/hero.png";

const Home = () => {
   return (
      <div className="flex items-center w-full py-5 px-4 md:px-10 bg-violet-600 dark:bg-gray-800 flex-col-reverse md:flex-row md:justify-between  justify-around md:gap-0 min-h-[85vh] md:min-h-screen ">
         <div className="w-full sm:w-5/6 text-center md:text-start md:w-1/2 text-black">
            <h3 className="text-white font-semibold capitalize text-2xl md:text-3xl">
               Start learning with
            </h3>
            <h3 className="text-white font-bold text-4xl md:text-5xl mt-3 my-5">
               Web learning
            </h3>
            <p className="text-white font-medium capitalize text-base md:pr-8">
               Web learning want to make people skilled in web development. We
               have some skilled instructor have 12 years experience.
            </p>
            <Link to="/courses">
               <button className="text-white bg-black font-bold capitalize mt-5 w-40 hover:w-44 py-2 hover:px-5 duration-1000 transition-all  dark:text-black dark:bg-white rounded-md ">
                  visit courses
               </button>
            </Link>
         </div>
         <div className=" sm:w-5/6 md:w-1/2 ">
            <img src={hero} alt="" className="w-4/5 mx-auto" />
         </div>
      </div>
   );
};

export default Home;
