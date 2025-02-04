"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setScreenSize } from "@/lib/slice/screenSizeSlice";
import { Code2, MonitorIcon, Smartphone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const { screenSize } = useAppSelector((state) => state.screen);
  return (
    <div className="p-4 shadow-sm flex items-center justify-between">
      <div className="mr-48 ml-4">
        <Image src={"/logo.svg"} height={60} width={50} alt="logo" />
      </div>

      <div className="flex items-center gap-5">
        <Button
          variant={screenSize === "desktop" ? "outline" : "ghost"}
          onClick={() => dispatch(setScreenSize("desktop"))}
          className={`${screenSize === "desktop" && "bg-purple-100"}`}
        >
          <MonitorIcon />
        </Button>
        <Button
          variant={screenSize === "mobile" ? "outline" : "ghost"}
          onClick={() => dispatch(setScreenSize("mobile"))}
          className={`${screenSize === "mobile" && "bg-purple-100"}`}
        >
          <Smartphone />
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="hover:text-primary hover:bg-purple-50"
        >
          <Code2 className="w-2 h-2" />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
};

export default Header;
