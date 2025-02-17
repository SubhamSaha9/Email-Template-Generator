"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface EmailTemplate {
  _id: string;
  design: string;
  description: string;
}
const EmailTemplateList = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [emailList, setEmailList] = useState<EmailTemplate[]>([]);
  const router = useRouter();

  const getAllTemplates = async () => {
    try {
      const { data } = await axios.post("/api/templates", { id: user?._id });

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      setEmailList(data.data);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    user?._id && getAllTemplates();
  }, [user]);
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-primary">My WorkSpace</h2>

      {!emailList || emailList.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/email.png" height={250} width={250} alt="No Data" />
          <Button
            className="flex items-center gap-2 mt-4"
            onClick={() => router.push("/dashboard/create")}
          >
            <PlusIcon className="h-4 w-4" />
            Create New
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
          {emailList.map((template, i) => (
            <div
              key={i}
              className="shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <Image
                src="/emailbox.png"
                height={200}
                width={200}
                alt="No Data"
                className="w-full"
              />
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                {template.description}
              </p>
              <Button
                className="w-full mt-2"
                onClick={() => router.push("/editor/" + template._id)}
              >
                Visit/Edit
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmailTemplateList;
