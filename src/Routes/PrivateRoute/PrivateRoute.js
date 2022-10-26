import React from 'react';

import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Pages/Others/Loader/Loader';
import { AuthContext } from './../../AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext); 
   const location = useLocation(); 
   if(loading){
      return Loader;
   }
   if(user?.uid && user?.email){
      return children;
   }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;