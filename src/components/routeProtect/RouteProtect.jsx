import React from "react";
import { Navigate } from "react-router";
import Header from "../layout/Header";

const RouteProtect = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RouteProtect;
