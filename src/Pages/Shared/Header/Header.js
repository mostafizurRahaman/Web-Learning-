import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../Assets/img/logo.png'
import { AuthContext } from './../../../AuthProvider/AuthProvider';
import {CiLight, CiDark } from 'react-icons/ci'

const Header = () => { 
   const {handleThemeSwitch ,isDark} = useContext(AuthContext); 
   return (
      <div className='bg-violet-500 dark:text-white dark:bg-gray-600 dark:shadow-white flex items-center justify-between px-4 md:px-10 py-5 font-bold text-base shadow-sm   shadow-black sticky top-0 left-0 w-full  z-10'>
        <NavLink to='/' className='flex items-center gap-5'>
               <img src={logo} alt="web learning logo" className=' w-12 h-12 ' />
               <h3 className='text-xl bg-black dark:bg-violet-500 text-white px-3 py-2 rounded-md'>Web learning</h3>
        </NavLink>
        <div className='flex items-center gap-5'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/fqa'>FQA</NavLink>            
        </div>
        <div className='flex items-center gap-5'>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
          <button onClick={handleThemeSwitch} className="px-3 py-2 bg-black  text-white dark:bg-white rounded-md dark:text-black capitalize">
            {
               isDark ? <p className='flex items-center gap-1'>Go Dark <CiDark className='w-6 h-6'></CiDark></p> :   <p className='flex items-center gap-1 '>go light <CiLight className='w-6 h-6'></CiLight> </p> 
            }
            
          </button>
        </div>
        
      </div>
   );
};

export default Header;