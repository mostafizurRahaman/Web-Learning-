import React, { useEffect, useState } from 'react';
import { createContext } from 'react';


export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
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