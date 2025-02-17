"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navMenuDash, navMenuHome } from "@/utils/constants";
import { setToken, setUser } from "@/lib/slice/authSlice";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";

const Header = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();

  const handleNavMenuClick = async (menu: any) => {
    if (menu.name === "Logout") {
      await axios.get("/api/users/logout");
      router.push("/");
      dispatch(setToken(null));
      dispatch(setUser(null));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged Out successfully");
    } else if (menu.name === "GitHub") {
      window.open(menu.to, "_blank");
    } else {
      router.push(menu.to);
    }
  };
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-sm">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={60} height={60}></Image>
      </Link>

      {token ? (
        <div className="flex items-center gap-4">
          {!path.includes("dashboard") && (
            <Button onClick={() => router.push("/dashboard")}>dashboard</Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger className="w-11 rounded-full cursor-pointer transition hover:bg-gray-200 flex items-center justify-center mr-6 border-primary border-b">
              <Image
                src={user?.image}
                alt="user"
                height={40}
                width={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {path.includes("dashboard")
                ? navMenuDash.map((item, index) => (
                    <DropdownMenuItem
                      className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm"
                      key={index}
                      onClick={() => handleNavMenuClick(item)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </DropdownMenuItem>
                  ))
                : navMenuHome.map((item, index) => (
                    <DropdownMenuItem
                      className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm"
                      key={index}
                      onClick={() => handleNavMenuClick(item)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </DropdownMenuItem>
                  ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div>
          <Button onClick={() => router.push("/signin")}>Login</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
