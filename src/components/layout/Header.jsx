import React from "react";
import { useSelector } from "react-redux";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

const Header = () => {
  const studentsTotal = useSelector(state => state.contact.total);
  const navigate = useNavigate();
  return (
    <div className=" w-full bg-blue-400 sticky top-0 left-0 right-0 z-30">
      <nav className="container mx-auto h-[70px] flex items-center justify-between">
        <div className=" cursor-pointer" onClick={()=>navigate("/")}>
          <p className=" text-2xl font-bold text-white">SMA</p>
        </div>
        <div className=" flex items-center gap-5">
          <button onClick={()=>navigate("/manage")}><FaUserPlus size={23} className=" text-white"/></button>
          <p className=" text-lg font-medium text-white">Total : {studentsTotal}</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
