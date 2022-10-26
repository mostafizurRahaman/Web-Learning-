import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
const Loader = () => {
   return (
      <div className="flex items-center justify-center h-screen w-full">
         <MagnifyingGlass
            visible={true}
            height="200"
            width="200"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
         />
      </div>
   );
};

export default Loader;
