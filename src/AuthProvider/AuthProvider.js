import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'; 
import app from './../Firebase/Firebase.init';

const auth = getAuth(app);
const gooleProvider = new GoogleAuthProvider(); 
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
   
   const authInfo = {handleThemeSwitch, isDark}
   return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;