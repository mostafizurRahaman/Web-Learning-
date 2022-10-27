import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../Assets/img/logo.png'
import { AuthContext } from './../../../AuthProvider/AuthProvider';
import {CiLight, CiDark } from 'react-icons/ci'; 
import {FiLogOut } from 'react-icons/fi'; 
import {FaBars } from 'react-icons/fa'; 
import {AiFillCloseCircle } from 'react-icons/ai'; 
import { useState } from 'react';


const Header = () => { 
  const [show ,setShow] = useState(false); 
   const {handleThemeSwitch ,isDark, LogOut, user } = useContext(AuthContext); 
   return (
      <div className='bg-violet-600 text-white dark:bg-gray-800 dark:shadow-white flex md:flex-row  items-center justify-between px-4 md:px-10 py-6  font-bold text-base shadow-sm   shadow-black sticky top-0 left-0 w-full  z-10 '>
        <NavLink to='/' className='flex items-center gap-5'>
               <img src={logo} alt="web learning logo" className=' w-12 h-12 ' />
               <h3 className='text-xl bg-black dark:bg-violet-500 text-white px-3 py-2 rounded-md '>Web learning</h3>
        </NavLink>
       <div className={`flex  gap-4 md:flex-row flex-col absolute md:static  bg-violet-600 dark:bg-gray-800 md:bg-none opacity-90 py-3 md:p-0 w-1/2  h-screen md:h-auto md:w-auto top-24 duration-1000 transition-all  md:transition-none ${show ? 'left-0' : '-left-3/4'}`}>
       <div className='flex items-center gap-5 md:flex-row flex-col'>
            <NavLink  className='hover:text-orange-500 dark:hover:text-orange-600 ' to='/home'>Home</NavLink>
            <NavLink  className='hover:text-orange-500 dark:hover:text-orange-600 ' to='/courses'>Courses</NavLink>
            <NavLink  className='hover:text-orange-500 dark:hover:text-orange-600 ' to='/blog'>Blog</NavLink>
            <NavLink  className='hover:text-orange-500 dark:hover:text-orange-600 ' to='/fqa'>FQA</NavLink>            
        </div>
        <div className='flex items-center gap-5 md:flex-row flex-col '>
         {
          user?.uid 
          ?
          <NavLink className='hover:text-orange-500 dark:hover:text-orange-600 ' to='/profile' title={user?.displayName}  >
              {
              user?.uid &&  <img src={user?.photoURL} className='w-12 h-12 rounded-full' alt='' />
              }
          </NavLink>  
          : 
          <NavLink className='hover:text-orange-500 dark:hover:text-orange-600 ' to='/login'>Login</NavLink>
         }        
          <button onClick={handleThemeSwitch} className="px-3 py-2 bg-black  text-white dark:bg-white rounded-md dark:text-black capitalize hover:text-orange-500 dark:hover:text-orange-600 ">
            {
               isDark ? <p className='flex items-center gap-1'>Go Dark <CiDark className='w-6 h-6'></CiDark></p> :   <p className='flex items-center gap-1 '>go light <CiLight className='w-6 h-6'></CiLight> </p> 
            }
            
          </button>
          {
            user?.uid && <FiLogOut onClick={()=> LogOut()}></FiLogOut>
          }
        </div>
        
       </div>
        <div  className='text-3xl md:hidden block hover:text-orange-500 dark:hover:text-orange-600 ' onClick={()=> setShow(!show)}>
           {
              show ?  <AiFillCloseCircle></AiFillCloseCircle>: <FaBars></FaBars>
           }
        </div>
      </div>
   );
};

export default Header;