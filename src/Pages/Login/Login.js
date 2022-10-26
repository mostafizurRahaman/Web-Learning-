import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginImage from '../../Assets/img/login.png'
const Login = () => {
   const [show, setShow] = useState(true); 
   return (
      <div>
         <div  className='flex md:flex-row items-center w-full py-5 px-4 md:px-10 bg-violet-600 dark:bg-gray-800 flex-col-reverse justify-between h-auto gap-7 md:gap-0 md:h-screen  '>
      <div className='w-full md:w-1/2  flex items-center justify-center md:order-2'>
         <form className='w-80 p-5 py-12 flex flex-col gap-5 bg-white h-auto rounded-xl opacity-80 dark:bg-black' >
            <div>
               <h2 className='text-3xl font-bold dark:text-white  text-violet-600'> Login </h2>
            </div>
          
            <div className='flex '>
               <input className='w-full bg-transparent  border-0 border-b-2  border-violet-500 text-violet-600  px-2 focus:pb-1 outline-none duration-1000 transition-all font-medium focus:italic border-opacity-75' type="email" name='email' placeholder='email address'/>
            </div>
            <div className='flex relative'>
               <label htmlFor="password" className='flex flex-col  w-full'>
               <input className='w-full bg-transparent  border-0 border-b-2  border-violet-500 text-violet-600  px-2 focus:pb-1 outline-none duration-1000 transition-all font-medium focus:italic border-opacity-75 ' type="password" name='password' placeholder="password"  />
               <div className='right-0 absolute text-white'>
                  {
                     show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> 
                  }
               </div>
               <div>
                  
               </div>
               </label>
               
            </div>
           <div className='flex  flex-col text-white text-sm  gap-1 '>
           <button className='bg-orange-500 px-3 py-2 text-white  font-bold hover:text-black dark:text-white justify-center'>Login</button>
           <p className='text-sm text-black dark:text-white flex items-center gap-1 capitalize justify-center'>Have no account? <Link to='/register' className='text-orange-500 border-b border-orange-500 '>
            Register</Link></p>
           </div>
            
         </form>
      </div>
      
      <div className=' sm:w-5/6 md:w-1/2 '>
           <img src={loginImage} alt="" className='w-4/5 mx-auto'/>
      </div>
  </div>
      </div>
   );
};

export default Login;