import AiInputBox from "@/components/core/Dashboard/Create/AiInputBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const page = () => {
  return (
    <div className="px-10 md:px-28 lg:px-64 xl:px-72 mt-20">
      <div className="flex items-center flex-col">
        <h2 className="font-bold text-3xl text-primary">
          Create New Email Template
        </h2>
        <p className="text-lg text-gray-400">
          Effortlessly design and customize professional Al-powered email
          templates with ease.
        </p>

        <div className=" mt-10 ">
          <Tabs defaultValue="AI" className="w-[500px]">
            <TabsList>
              <TabsTrigger value="AI">Create with AI ⚡</TabsTrigger>
              <TabsTrigger value="Scratch">From Scratch</TabsTrigger>
            </TabsList>
            <TabsContent value="AI">
              <AiInputBox />
            </TabsContent>
            <TabsContent value="Scratch">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
