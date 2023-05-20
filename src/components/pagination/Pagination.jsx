import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ page, setPage }) => {
  const studentsTotal = useSelector((state) => state.contact.total);
  return (
    <div className="flex flex-col items-center my-8">
      {/* Help text */}
      <span className="text-sm text-gray-500">
        <span className="font-semibold text-gray-500">10</span>{" "}
        students from Page{" "}
        <span className="font-semibold text-gray-500">
          {page}
        </span>{" "}
      </span>
      {/* Buttons */}
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className={`px-4 py-2 text-sm font-medium text-white ${
            page == 1 ? "bg-gray-700" : "bg-gray-800"
          } border-0 border-l border-gray-700 rounded-l`}
          disabled={page == 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 text-sm font-medium text-white ${
            page * 10 > studentsTotal ? "bg-gray-700" : "bg-gray-800"
          } border-0 border-l border-gray-700 rounded-r`}
          disabled={page * 10 > studentsTotal}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
