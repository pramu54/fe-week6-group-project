import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const useAuth = () => {
    return localStorage.getItem("loginToken");
}

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Login />;
}

export default ProtectedRoute;