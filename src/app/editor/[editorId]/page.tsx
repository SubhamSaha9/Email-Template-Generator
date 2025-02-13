"use client";
import Canvas from "@/components/core/Editor/Canvas";
import Header from "@/components/core/Editor/Header";
import Settings from "@/components/core/Editor/Settings";
import Sidebar from "@/components/core/Editor/Sidebar";
import { useAppDispatch } from "@/lib/hooks";
import { setEmailTemplate } from "@/lib/slice/dragdropSlice";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Editor = () => {
  const { editorId } = useParams();
  const dispatch = useAppDispatch();
  const [viewHTML, setViewHTML] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTemplateData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/templates/get", { id: editorId });
      setLoading(false);
      dispatch(setEmailTemplate(JSON.parse(data.data.design)));
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    editorId && fetchTemplateData();
  }, [editorId]);
  return (
    <div className="">
      <Header setViewHTML={setViewHTML} />

      <div className="grid grid-cols-5">
        <div className=" overflow-auto h-[90vh]">
          <Sidebar />
        </div>
        <div className="col-span-3 bg-gray-100 overflow-auto h-[90vh]">
          {!loading ? (
            <Canvas viewHTML={viewHTML} closeDialog={(v) => setViewHTML(v)} />
          ) : (
            <div className="font-bold text-xl text-center">Loading...</div>
          )}
        </div>
        <div className="overflow-auto h-[90vh]">
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Editor;
