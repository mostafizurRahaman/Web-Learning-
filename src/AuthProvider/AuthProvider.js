import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {getAuth ,createUserWithEmailAndPassword,  GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, onAuthStateChanged, sendEmailVerification} from 'firebase/auth'; 
import app from './../Firebase/Firebase.init';

const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider(); 
const githubProvider = new GithubAuthProvider(); 
export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null); 
   const [loading , setLoading] =useState(true); 
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
    setLoading(true); 
    return createUserWithEmailAndPassword(auth, email, password); 
   }
   
  const LogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password); 
  }

   const LogOut = () => {
    setLoading(true)
    return signOut(auth); 
   }

   const GoogleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth , googleProvider)
   }
   const GithubSignIn = () => {
       setLoading(true);
    return signInWithPopup(auth , githubProvider); 
   }
   const updateInfo = (profile) => {
      return updateProfile(auth.currentUser, profile); 
   }
   const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser)
   }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser); 
    })

    return () => {
      unsubscribe();
    }
  }, [])
   const authInfo = {handleThemeSwitch, isDark, createUser,LogIn, LogOut, GoogleSignIn,GithubSignIn, updateInfo, user, verifyEmail }
   return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;