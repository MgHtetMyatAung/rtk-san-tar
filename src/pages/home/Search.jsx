import React, { useState } from "react";

const Search = ({ setKeyword,keyword }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  return (
    <div className=" text-center my-5">
      <form action="" onSubmit={handleSearch}>
        <input
                  type="text"
                  className="lg:min-w-[300px] border-gray-500 border-[1px] px-3 py-2 rounded-full focus:outline-none"
                  value={keyword}
                  placeholder="Search product here"
          onChange={(e) => {
              setKeyword(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
