"use client";
import Canvas from "@/components/core/Editor/Canvas";
import Header from "@/components/core/Editor/Header";
import Settings from "@/components/core/Editor/Settings";
import Sidebar from "@/components/core/Editor/Sidebar";
import React, { useState } from "react";

const Editor = () => {
  const [viewHTML, setViewHTML] = useState<boolean>(false);
  return (
    <div className="">
      <Header setViewHTML={setViewHTML} />

      <div className="grid grid-cols-5">
        <div className=" overflow-auto h-[90vh]">
          <Sidebar />
        </div>
        <div className="col-span-3 bg-gray-100 overflow-auto">
          <Canvas viewHTML={viewHTML} closeDialog={(v) => setViewHTML(v)} />
        </div>
        <div className="overflow-auto h-[90vh]">
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Editor;
