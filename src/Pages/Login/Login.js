import React from "react";
import { useState, useContext } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImage from "../../Assets/img/login.png";
import Loader from "../Others/Loader/Loader";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
const Login = () => {
   const [show, setShow] = useState(true);
   const [isLoading, setIsLoading] = useState(false); 
   const { LogIn, setUser, setLoading, GoogleSignIn, GithubSignIn, verifyEmail } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";
   const [userInfo, setUserInfo] = useState({
      email: "",
      password: "",
   });
   const [error, setError] = useState({
      email: "",
      password: "",
      general: "",
   });

   const handleEmail = (e) => {
      const email = e.target.value;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         setError({ ...error, email: "please enter a valid email: " });
         setUserInfo({ ...userInfo, email: email });
      } else {
         setError({ ...error, email: "" });
         setUserInfo({ ...userInfo, email: email });
      }
   };

   const handlePassword = (e) => {
      const password = e.target.value;
      if (!/(?=.*[A-Z])/.test(password)) {
         setError({ ...error, password: "minimum one uppercase" });
         setUserInfo({ ...userInfo, password: password });
      } else if (!/(?=.*[a-z])/.test(password)) {
         setError({ ...error, password: "minimum one lowercase" });
         setUserInfo({ ...userInfo, password: password });
      } else if (!/(?=.*[0-9])/.test(password)) {
         setError({ ...error, password: "minimum one number" });
         setUserInfo({ ...userInfo, password: password });
      } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
         setError({ ...error, password: "enter one special letter" });
         setUserInfo({ ...userInfo, password: password });
      } else if (password.length < 8) {
         setError({ ...error, password: "must be 8 digits" });
         setUserInfo({ ...userInfo, password: password });
      } else {
         setError({ ...error, password: "" });
         setUserInfo({ ...userInfo, password: password });
      }
   };

   const handleSubmit = (e) => { 
      setIsLoading(true); 
      e.preventDefault();
      const form = e.target;
      console.log(userInfo.email, userInfo.password);
      LogIn(userInfo.email, userInfo.password)
         .then((res) => {
            const user = res.user;
            if (user?.emailVerified) {
               Swal.fire({
                  position: "center-center",
                  icon: "success",
                  title: "successfull ",
                  confirmButtonText: "ok",
               });
               setUser(user);
               navigate(from, { replace: true });
               form.reset();
               setIsLoading(false); 
            } else {
               Swal.fire({
                  position: "center-center",
                  icon: "warn",
                  title: "without  email verification you can not login.",
                  confirmButtonText: "ok",
               });
               setIsLoading(false); 

            }
         })
         .catch((err) => {
            setError({ ...error, general: err.message });
         })
         .finally(() => {
            setLoading(false);
            setIsLoading(false); 

         });
   };

   const handleGoogleSignIn = () => {
      setIsLoading(true); 
      GoogleSignIn()
         .then((res) => {
            const user = res.user;
            // setUser(user);
            console.log(user); 
            Swal.fire({
               position: "center-center",
               icon: "success",
               title: "successfull ",
               confirmButtonText: "ok",
            });
            navigate(from, {replace: true}) 
            setIsLoading(false); 

         })
         .catch((err) => {
            setError({ ...error, general: err.message });
            
         })
         .finally(()=>{
            setIsLoading(false); 
         })
   };


   const handleGithubSignIn = () => {
      setIsLoading(true); 
      GithubSignIn()
      .then(res => {
         const user = res.user; 
         console.log(user); 
         if(!user?.emailVerified){
            Swal.fire({
               position: "center-center",
               icon: "warning",
               title: 'Verify now',
               text: "Please check inbox or spam and verify your email. then login again with github",
               confirmButtonText: "ok",
            });  
            setIsLoading(false); 
             verifyEmail(); 

          }else{
            Swal.fire({
               position: "center-center",
               icon: "success",
               title: "Successfully  login",
               confirmButtonText: "ok",
            }); 
            setUser(user); 
            navigate(from, {replace: true}); 
            setIsLoading(false); 

          }
      })
      .catch(err => {
         setError({...error, general: err.message })
      })
      .finally(()=>{
         setIsLoading(false); 
      })
   }

   if(isLoading){
      return <Loader></Loader> 
   }
   return (
      <div>
         <div className="flex md:flex-row items-center w-full py-5 px-4 md:px-10 bg-violet-600 dark:bg-gray-800 flex-col-reverse justify-between h-auto gap-7 md:gap-0 md:h-screen  ">
            <div className="w-full md:w-1/2  flex flex-col items-center justify-center md:order-2">
               <form
                  className="w-80 p-5 py-12 flex flex-col gap-5 bg-white h-auto rounded-xl opacity-80 dark:bg-black"
                  onSubmit={handleSubmit}
               >
                  <div>
                     <h2 className="text-3xl font-bold dark:text-white  text-violet-600">
                        {" "}
                        Login{" "}
                     </h2>
                  </div>

                  <div className="flex flex-col">
                     <input
                        className="w-full bg-transparent  border-0 border-b-2  border-violet-500 text-violet-600  px-2 focus:pb-1 outline-none duration-1000 transition-all font-medium focus:italic border-opacity-75"
                        type="email"
                        name="email"
                        placeholder="email address"
                        required
                        onChange={handleEmail}
                     />
                     {error.email && (
                        <p className="text-red-500 text-center">
                           <small>{error.email}</small>
                        </p>
                     )}
                  </div>
                  <div className="flex flex-col ">
                     <label htmlFor="password" className="relative w-full flex">
                        <input
                           className="w-full bg-transparent  border-0 border-b-2  border-violet-500 text-violet-600  px-2 focus:pb-1 outline-none duration-1000 transition-all font-medium focus:italic border-opacity-75"
                           id="password"
                           type={`${show ? "text" : "password"}`}
                           name="password"
                           placeholder="password"
                           onChange={handlePassword}
                           required
                        />
                        <div
                           className="absolute right-0 text-orange-500"
                           onClick={() => setShow(!show)}
                        >
                           {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </div>
                     </label>
                     {error.password && (
                        <p className="text-red-500">
                           <small>{error.password}</small>
                        </p>
                     )}
                  </div>
                  <div className="flex  flex-col text-white text-sm  gap-1 ">
                     <button className="bg-orange-500 px-3 py-2 text-white  font-bold hover:text-black dark:text-white justify-center">
                        Login
                     </button>
                     <p className="text-sm text-black dark:text-white flex items-center gap-1 capitalize justify-center">
                        Have no account?{" "}
                        <Link
                           to="/register"
                           className="text-orange-500 border-b border-orange-500 "
                        >
                           Register
                        </Link>
                     </p>
                  </div>
                  {error.general && (
                     <p className="text-red-600">
                        {" "}
                        <small className="text-red-600">{error.general}</small>
                     </p>
                  )}
               </form>
               <div className="flex items-center gap-1  my-3">
                  <div
                     className="bg-black dark:bg-white w-20"
                     style={{ height: "2px" }}
                  ></div>
                  <p className="text-white">OR</p>
                  <div
                     className="bg-black  dark:bg-white w-20"
                     style={{ height: "2px" }}
                  ></div>
               </div>
               <div className="w-80">
                  <button className="relative  w-full px-2 py-2 bg-white dark:bg-dark font-bold text-orange-600 rounded-2xl" onClick={handleGoogleSignIn}>
                     <FaGoogle className="absolute top-2 left-2 text-2xl"></FaGoogle>{" "}
                     Google Sign In
                  </button>
                  <button className="mt-4 relative  w-full px-2 py-2 bg-white dark:bg-dark font-bold text-orange-600 rounded-2xl" onClick={handleGithubSignIn}>
                     <FaGithub className="absolute top-2 left-2 text-2xl"></FaGithub>{" "}
                     Github Sign In
                  </button>
               </div>
            </div>

            <div className=" sm:w-5/6 md:w-1/2 ">
               <img src={loginImage} alt="" className="w-4/5 mx-auto" />
            </div>
         </div>
      </div>
   );
};

export default Login;
