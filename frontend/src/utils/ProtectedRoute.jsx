import { useEffect } from "react";
import { useLocation,Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); 
  const location = useLocation();
  useEffect(()=>{
    window.onpopstate=()=>{
      localStorage.clear()
    }
  },[location])

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;