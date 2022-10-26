import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'; 
import app from './../Firebase/Firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 
const githubProvider = new GithubAuthProvider(); 
export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null); 
   const [isDark, setIsDark] = useState(false); 
   const [theme, setTheme] = useState('light');
   useEffect(() => {
     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
       setTheme('dark');
     }
     else {
       setTheme('light');
     }
   }, [])
 
   useEffect(() => {
     if (theme === "dark") {
       document.documentElement.classList.add("dark");
     } else {
       document.documentElement.classList.remove("dark");
     }
   }, [theme]);
 
   const handleThemeSwitch = () => {
      setIsDark(!isDark); 
     if(isDark){
         setTheme("dark")
     }else{
      setTheme('light')
     }
   };

   const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password); 
   }
   
   const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); 
   }

   const LogOut = () => {
    return signOut(auth); 
   }

   const GoogleSignIn = () => {
    return signInWithPopup(auth , googleProvider)
   }
   const GithubSignIn = () => {
    return signInWithPopup(auth , githubProvider); 
   }
   const updateInfo = (profile) => {
      return updateProfile(auth.currentUser, profile); 
   }
   const authInfo = {handleThemeSwitch, isDark, createUser,LogIn, LogOut, GoogleSignIn,GithubSignIn, updateInfo }
   return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;