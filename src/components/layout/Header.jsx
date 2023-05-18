import React from "react";

const Header = () => {
  return (
    <div className=" w-full bg-blue-400">
      <nav className="container mx-auto h-[70px] flex items-center justify-between">
        <div className="">
          <p className=" text-2xl font-medium text-white">SMA</p>
        </div>
        <div className="">
          <p className=" text-lg font-medium text-white">Total Students :</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
