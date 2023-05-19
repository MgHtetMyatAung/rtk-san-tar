import React from "react";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import RouteProtect from "./components/routeProtect/RouteProtect";
import StudentManage from "./pages/Manage/StudentManage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RouteProtect><HomePage /></RouteProtect>} />
        <Route path="/manage" element={<RouteProtect><StudentManage/></RouteProtect>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
