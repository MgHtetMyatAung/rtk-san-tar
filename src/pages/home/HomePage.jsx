import React from "react";
import { useGetAllContactsQuery } from "../../app/api/contact/contactApi";
import Cart from "./Cart";

const HomePage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { data, isLoading, isError } = useGetAllContactsQuery(token);
  return (
      <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.contacts?.data.map((item) => (
        <Cart key={item.id} item={item}/>
      ))}
      </div>
    </div>
  );
};

export default HomePage;
