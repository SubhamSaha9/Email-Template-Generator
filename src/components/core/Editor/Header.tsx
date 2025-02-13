"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setEmailTemplate } from "@/lib/slice/dragdropSlice";
import { setScreenSize } from "@/lib/slice/screenSizeSlice";
import axios from "axios";
import { Code2, MonitorIcon, Smartphone } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Header = ({ setViewHTML }: { setViewHTML: (value: boolean) => void }) => {
  const dispatch = useAppDispatch();
  const { editorId } = useParams();
  const { screenSize } = useAppSelector((state) => state.screen);
  const { emailTemplate } = useAppSelector((state) => state.dragDrop);
  const [loading, setLoading] = useState<boolean>(false);

  const updateTemplate = async () => {
    const toastId = toast.loading("Updating...");
    setLoading(true);
    try {
      const { data } = await axios.put("/api/templates/update", {
        id: editorId,
        design: JSON.stringify(emailTemplate),
      });
      setLoading(false);
      toast.dismiss(toastId);
      if (!data.success) {
        toast.error(data.message);
      }

      toast.success(data.message);
      dispatch(setEmailTemplate(JSON.parse(data.data.design)));
    } catch (error: any) {
      setLoading(false);
      toast.dismiss(toastId);
      console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
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
          onClick={() => setViewHTML(true)}
        >
          <Code2 className="w-2 h-2" />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button onClick={() => updateTemplate()} disabled={loading}>
          Save Template
        </Button>
      </div>
    </div>
  );
};

export default Header;
