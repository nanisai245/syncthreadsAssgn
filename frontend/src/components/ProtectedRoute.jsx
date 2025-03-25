import React, { useEffect, useRef, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { toast } from "react-toastify";

function ProtectedRoute() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const toastShown = useRef(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get("/auth/validate");
        if (res.status === 200) {
          setIsAuth(true);
        }
      } catch (error) {
        if (!toastShown.current) {
          toast.error("User not logged in");
          toastShown.current = true;
        }

        console.error(error);
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
