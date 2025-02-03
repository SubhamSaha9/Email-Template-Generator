"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface EmailTemplate {
  _id: string;
  // add other properties if needed
}
const EmailTemplateList = () => {
  const [emailList, setEmailList] = useState<EmailTemplate[]>([]);
  const router = useRouter();
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-primary">My WorkSpace</h2>

      {!emailList || emailList.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/email.png" height={250} width={250} alt="No Data" />
          <Button
            className="flex items-center gap-2 mt-4"
            onClick={() => router.push("/create")}
          >
            <PlusIcon className="h-4 w-4" />
            Create New
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {emailList.map((template, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition
            cursor-pointer
            "
              onClick={() => router.push(`/editor/${template?._id}`)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Template ID:
              </h3>
              <p className="text-gray-600 text-sm break-all">{template._id}</p>
              <Image
                src="/emailbox.png"
                height={250}
                width={250}
                alt="No Data"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmailTemplateList;
