import Canvas from "@/components/core/Editor/Canvas";
import Header from "@/components/core/Editor/Header";
import Settings from "@/components/core/Editor/Settings";
import Sidebar from "@/components/core/Editor/Sidebar";
import React from "react";

const Editor = () => {
  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-5">
        <div className=" overflow-auto h-[90vh]">
          <Sidebar />
        </div>
        <div className="col-span-3 bg-gray-100 overflow-auto">
          <Canvas />
        </div>
        <div className="overflow-auto h-[90vh]">
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Editor;
