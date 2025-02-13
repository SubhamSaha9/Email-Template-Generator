"use client";
import { setToken, setUser } from "@/lib/slice/authSlice";
import { AppStore, makeStore } from "@/lib/store";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import Cookies from "js-cookie";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      if (storedUser && storedToken && storeRef.current) {
        storeRef.current.dispatch(setUser(JSON.parse(storedUser)));
        storeRef.current.dispatch(setToken(JSON.parse(storedToken)));
      }
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
