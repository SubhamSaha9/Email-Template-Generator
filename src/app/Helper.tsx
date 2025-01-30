"use client";
import { setToken, setUser } from "@/lib/slice/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Helper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedToken) {
        dispatch(setUser(JSON.parse(storedUser)));
        dispatch(setToken(JSON.parse(storedToken)));
      }
    }
  }, [dispatch]);

  return children;
};

export default Helper;
