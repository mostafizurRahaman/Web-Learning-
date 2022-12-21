import React from 'react';
import { useContext } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Loader from '../Others/Loader/Loader';
import { AuthContext } from './../../AuthProvider/AuthProvider';

const Profile = () => {
   const {user} = useContext(AuthContext); 
   if(!user?.uid){
        return <Loader></Loader>
   }
   return (
      <div className='flex items-center min-h-[85vh]  md:min-h-screen  bg-violet-600 dark:bg-gray-600 text-black  font-semibold justify-center' >
          <div className='h-auto p-3 bg-opacity-90  rounded-lg text-sm mt-5 flex w-80  md:w-96 gap-2 bg-white flex-col md:flex-row  '>
              <div className='w-full md:w-auto'>
                  <img src={user?.photoURL} alt={user?.name} className="rounded-full  w-24 h-24 mx-auto " />
                  {
                  user?.emailVerified && <h5 className='mt-1 flex gap-2 items-center justify-center md:justify-start'> <span>verified: </span> <BsFillPatchCheckFill className='text-violet-700 '></BsFillPatchCheckFill></h5>
               }
              </div>
              <div className='flex-grow-1 flex justify-center flex-col items-start px-5 md:px-0 '>
                  <h3 className='text-sm'>User Id<span>: {user?.uid.slice(15, 28)}</span></h3>
                  <h3>Full Name: {user?.displayName}</h3>
                  <h3 className=''><span>Email: {user?.email}</span></h3>
              </div>
             
          </div>
      </div>
   );
};

export default Profile;