import React from 'react';
import hero from '../../Assets/img/hero.png';    

const Home = () => {
   return (
      <div className='flex items-center w-full py-5 px-4 md:px-10 bg-violet-500 dark:bg-gray-600 'style={{minHeight:'100vh'}}>
          <div className='w-1/2 text-black '>
               <h3>Start learning with</h3>
               <h3>Web learning</h3>
               <p>Web learning want to make people skilled in web development. We have some skilled instructor have 12 years experience.</p>
          </div>
          <div className='w-1/2'>
               <img src={hero} alt="" />
          </div>
      </div>
   );
};

export default Home;