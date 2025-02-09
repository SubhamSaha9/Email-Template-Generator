"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setEmailTemplate } from "@/lib/slice/dragdropSlice";
import React, { useEffect, useRef, useState } from "react";
import Column from "./Canvas/Column";
import ViewHtmlDialog from "./ViewHtmlDialog";

const Canvas = ({
  viewHTML,
  closeDialog,
}: {
  viewHTML: boolean;
  closeDialog: (value: boolean) => void;
}) => {
  const { screenSize } = useAppSelector((state) => state.screen);
  const htmlRef = useRef<HTMLDivElement>(null);
  const { dragElementLayout, emailTemplate } = useAppSelector(
    (state) => state.dragDrop
  );
  const [dragOver, setDragOver] = useState(false);
  const [htmlCode, setHtmlCode] = useState();
  const dispatch = useAppDispatch();

  const ondragover = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleOnDropEvent = () => {
    console.log(dragElementLayout);
    if (dragElementLayout?.dragLayout) {
      dispatch(
        setEmailTemplate([...emailTemplate, dragElementLayout?.dragLayout])
      );
    }
    setDragOver(false);
  };

  const getLayoutComponent = (layout: any) => {
    if (layout?.type === "column") {
      return <Column layout={layout} />;
    }
  };

  const getHTMLCode = () => {
    if (htmlRef.current) {
      const html = htmlRef.current.innerHTML;
      setHtmlCode(html as any);
    }
  };

  useEffect(() => {
    viewHTML && getHTMLCode();
  }, [viewHTML]);
  return (
    <div className="flex mt-20 justify-center">
      <div
        className={`w-full p-6 
            ${screenSize === "desktop" ? "max-w-2xl" : "max-w-md"}
            ${dragOver ? "bg-purple-100 p-4" : "bg-white"}
        `}
        onDragOver={(e) => ondragover(e)}
        onDrop={handleOnDropEvent}
        ref={htmlRef}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate.map((layout: any, i: number) => (
            <div key={i}>{getLayoutComponent(layout) as any}</div>
          ))
        ) : (
          <h2 className="p-4 text-center bg-gray-100 border border-dashed">
            Add Layout
          </h2>
        )}
      </div>

      <ViewHtmlDialog
        openDialog={viewHTML}
        htmlCode={htmlCode}
        closeDialog={closeDialog}
      />
    </div>
  );
};

export default Canvas;
