"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={60} height={60}></Image>

      {token ? (
        <div className="flex items-center gap-4">
          <Button onClick={() => router.push("/dashboard")}>dashboard</Button>

          <Image
            src={user?.image}
            alt="user"
            height={35}
            width={35}
            className="rounded-full"
          />
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
