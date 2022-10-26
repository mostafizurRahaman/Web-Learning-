import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'


const CheackOut = () => {
   const course = useLoaderData(); 
   const {name,  price} = course;
   const [customerInfo, setCustomerInfo] = useState({
      fullName: '', 
      email: '', 
      address: '',
   })
   const [error, setError] = useState({
      email: '', 
   })
   const [saved, setSaved] = useState(false); 
   console.log(customerInfo.email)

   const handleEmail = (e) => {
      const email = e.target.value; 
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
         setError({...error,  email:'Please Enter a valid email: '})
         setCustomerInfo({...customerInfo, email:email })
      }else{
         setError({...error,  email:""})
         setCustomerInfo({...customerInfo, email:email })
      }
   }

   const handleName = (e) => {
      const fullName = e.target.value; 
      if(fullName){
         setCustomerInfo({...customerInfo, fullName: fullName}); 
      }else{
         toast.error('please enter your name')
      }
   }
   const handleAddress = (e) => {
      const address = e.target.value; 
      if(address){
         setCustomerInfo({...customerInfo, address: address})
      }else{
         toast.error('Please enter your address: ')
      }
   }

   const handleSave = (e) => {
      e.preventDefault();
      setSaved(true); 
   }
   const confirm = (e) => {
      Swal.fire({
         title: 'Congratulations!!!  Your order is placed',
         icon: 'success',
         confirmButtonText: 'save'
       }) 
   }
   return (
      <div  className='flex items-center w-full py-5 px-4 md:px-10 bg-violet-600 dark:bg-gray-800 flex-col-reverse md:flex-row justify-between h-auto gap-7 md:gap-0 md:h-screen '>
         <div className='w-full sm:w-5/6 text-center md:text-start md:w-1/2 text-black space-y-5'>
            <h3 className='text-white dark:text-black  inline-block px-3 py-2 font-semibold capitalize text-2xl md:text-3xl bg-orange-600 '>Check Out Course:</h3>
            <h3 className='text-white font-bold text-4xl md:text-5xl mt-3 my-5 flex gap-2 items-center'><BsFillCheckCircleFill className='text-black dark:text-green-600 '></BsFillCheckCircleFill>{name}</h3>
            <h3 className='text-white font-bold text-3xl md:text-4xl mt-3 my-5 flex gap-2 items-center'><BsFillCheckCircleFill className='text-black dark:text-green-600 '></BsFillCheckCircleFill>Price:{price} tk</h3>
            <p className='text-white font-medium capitalize md:pr-8  text-xl'>For confirmation please fill the form: </p>            
            

         </div>
         <div className=' sm:w-5/6 md:w-1/2 bg-orange-500 p-10 bg-opacity-90  '>
               <h2 className='text-white font-bold  text-2xl  mb-5 text-center '>Fill The Form for confirmation:</h2>
               <div>
                  <form onSubmit={handleSave}>
                     <div className='flex flex-col gap-2 mb-4 text-white'>
                        <label className='text-white font-bold ' htmlFor="full_name">Full Name :</label>
                        <input  className='py-3 px-3 font-medium rounded-md text-black ' type="text" name="full_name" id="full_name" placeholder='Enter your name: ' defaultValue={customerInfo.fullName} readOnly={saved} onBlur={handleName} required/>
                     </div>
                     <div className='flex flex-col gap-2 mb-4 text-white'>
                        <label className='text-white font-bold ' htmlFor="mobileNumber">Email: </label>
                        <input  className='py-2 px-3 font-medium rounded-md text-black ' type="text" name="email" id="email" placeholder='Enter your email: ' defaultValue={customerInfo.email} readOnly={saved} onChange={handleEmail} required/>
                        {
                           
                        error.email && <p className='text-red-500'>{error.email}</p>
                        }  
                     </div>
                     <div className='flex flex-col gap-2 mb-4 text-white'>
                        <label className='text-white font-bold ' htmlFor="address">Address :</label>
                        <input  className='py-2 px-3 font-medium rounded-md text-black ' type="text" name="address: " id="address" placeholder='Enter your address: ' defaultValue={customerInfo.address} readOnly={saved} onBlur={handleAddress} required/>
                     </div>
                     <div className='flex items-center  justify-center gap-2'>
                     <button  className='text-white bg-green-600 hover:bg-green-500 font-bold rounded-md   px-8 py-3' type='submit' disabled={saved}>Save </button>
                     <button className={`text-white hover:bg-green-500 font-bold rounded-md px-8 py-3  ${saved ? 'visible bg-green-600 ' : 'hidden bg-green-600 '  }`} onClick={confirm} >Confirm Now</button>
                     </div>
                  </form>
               </div>
         </div>
       </div>
   );
};

export default CheackOut;