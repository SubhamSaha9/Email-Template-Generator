"use client";
import EmailTemplateList from "@/components/core/Dashboard/EmailTemplateList";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  return (
    <div>
      <div className="p-10 md:px-28 lg:px-40 xl:px-56 mt-16">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Hello, {user?.firstName}</h2>
          <Button onClick={() => router.push("/dashboard/create")}>
            <PlusIcon className="w-4 h-4 mr-2" />
            Create new email template
          </Button>
        </div>
        <EmailTemplateList />
      </div>
    </div>
  );
};

export default Dashboard;
