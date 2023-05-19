import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { PulseLoader } from "react-spinners";

const MainLoading = ({className}) => {
  return (
    <div className={`w-full ${className} bg-white flex justify-center items-center`}>
      <div className=" flex flex-col items-center gap-3">
        <FaUserGraduate size={50} className=" text-gray-600"/>
        <PulseLoader color="#555" size={12} className=""/>
      </div>
    </div>
  );
};

export default MainLoading;
