import React from "react";

const Blog = () => {
   return (
      <div className="bg-violet-600 font-semibold  min-h-screen ">
         <div className="w-4/5 mx-auto py-5 space-y-5">
            <details className="">
               <summary className="text-xl text-white bg-orange-500 p-3 ">What is cors??</summary>
               <p className="bg-orange-500  duration-500 px-5 py-3 opacity-90 transition-all text-white">
                  Cors means Cross Origin Resource sharing . It is an HTTP
                  header based mechanism that allows a server to indicate any
                  origins (domain, scheme, or port) other than its own from
                  which a browser should permit loading resources.
               </p>
            </details>
            <details className="">
               <summary className="text-xl text-white bg-orange-500 p-3 "> Why are you using firebase? What other options do you have to implement authentication??</summary>
                  <div className="bg-orange-500 px-5 py-3 text-white">
                  <p className="">
                 1. We use firebase for authentication and hosting our website . By using firebase we can implement sign up new user, sign in user, sign in with others provider like Google , Github, Facebook and Twitter.    </p>
                <p>  we also set an observer that observe can any user login or not. 
                  We also verify email , send reset password email , update use profile by using firebase. </p>
               <p>2. There are many authentication platforms like firebase: we includes below:  </p>
                 <ul>
                     <li className=" ml-10 mt-3 list-disc">Okta.</li>
                     <li className=" ml-10 mt-3 list-disc">Keycloak</li>
                     <li className=" ml-10 mt-3 list-disc">Supabase</li>
                     <li className=" ml-10 mt-3 list-disc">STYTCH</li>
                 </ul>
                  </div>
            </details>
            <details className="">
               <summary className="text-xl text-white bg-orange-500 p-3 ">How does the private route work?</summary>
               <div className="bg-orange-500 px-5 py-3 text-white space-y-4">
               <p  >
                  private route a simple component. That a children props . if we add something or components inner side of a private route  , react convert the inner component children of private route.   
               </p>
               <p >
                  Private routes works  conditionally if user is available then private route return or show the children .If User not available private route navigate login .   
               </p>
               <p >
                  Private Route helps us to keep private our premium  and  sensitive components.
               </p>
               </div>
            </details>
            <details className="">
               <summary className="text-xl text-white bg-orange-500 p-3 ">What is Node? How does Node work?</summary>
               <p className="bg-orange-500  duration-500 px-5 py-3 opacity-90 transition-all text-white">
               Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
               </p>
               <p>
                  
               </p>
            </details>
         </div>
      </div>
   );
};

export default Blog;
