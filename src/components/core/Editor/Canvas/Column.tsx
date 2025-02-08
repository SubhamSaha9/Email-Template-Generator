"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setEmailTemplate,
  setSelectedElement,
} from "@/lib/slice/dragdropSlice";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import TextComponemt from "./TextComponemt";
import ImageComponent from "./ImageComponent";
import LogoComponent from "./LogoComponent";
import Divider from "./Divider";
import SocialComponent from "./SocialComponent";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";

interface DragEvent {
  index: number;
  columnId: number;
}

const Column = ({ layout }: any) => {
  const dispatch = useAppDispatch();
  const [dragOver, setDragOver] = useState<DragEvent | null>();
  const { dragElementLayout, emailTemplate, selectedElement } = useAppSelector(
    (state) => state.dragDrop
  );

  const handleOnDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout.id,
    });
  };

  const handleDropElement = () => {
    const index = dragOver?.index;
    const updatedTemplate = emailTemplate.map((col: any) =>
      col.id === layout.id
        ? {
            ...col,
            [index?.toString() ?? ""]: dragElementLayout?.dragElement,
          }
        : col
    );
    dispatch(setEmailTemplate(updatedTemplate));
    setDragOver(null);
  };

  const getElementComponent = (element: any) => {
    switch (element?.type) {
      case "Button":
        return <ButtonComponent {...element} />;
      case "Text":
        return <TextComponemt {...element} />;
      case "Image":
        return <ImageComponent {...element} />;
      case "Logo":
        return <LogoComponent {...element} />;
      case "LogoHeader":
        return <LogoComponent {...element} />;
      case "Divider":
        return <Divider {...element} />;
      case "SocialIcons":
        return <SocialComponent {...element} />;
      default:
        return null;
    }
  };

  const handleDeleteColumn = (id: number) => {
    const updatedTemplate = emailTemplate.filter((col: any) => col.id !== id);
    dispatch(setEmailTemplate(updatedTemplate));
    dispatch(setSelectedElement(null));
  };

  const handleMoveColumn = (id: number, direction: "up" | "down") => {
    const index = emailTemplate.findIndex((col: any) => col.id === id);
    if (direction === "up") {
      if (index === 0) return;
      const updatedTemplate = [...emailTemplate];
      const temp = updatedTemplate[index];
      updatedTemplate[index] = updatedTemplate[index - 1];
      updatedTemplate[index - 1] = temp;
      dispatch(setEmailTemplate(updatedTemplate));
    } else {
      if (index === emailTemplate.length - 1) return;
      const updatedTemplate = [...emailTemplate];
      const temp = updatedTemplate[index];
      updatedTemplate[index] = updatedTemplate[index + 1];
      updatedTemplate[index + 1] = temp;
      dispatch(setEmailTemplate(updatedTemplate));
    }
  };
  return (
    <div className="relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol},1fr)`,
          gap: 0,
        }}
        className={`${
          selectedElement?.layout?.id === layout?.id &&
          "border-primary border-2 border-dotted"
        }`}
      >
        {Array.from({ length: layout.numOfCol }).map((_, i) => (
          <div
            key={i}
            className={`p-0 flex items-center justify-center cursor-pointer
                ${!layout?.[i]?.type && "bg-gray-100 border border-dashed"}
                ${i === dragOver?.index && dragOver?.columnId && "bg-green-200"}
                 ${
                   selectedElement?.layout?.id === layout?.id &&
                   selectedElement?.index === i &&
                   "border-blue-500 border-2 shadow-sm"
                 }
              `}
            onDragOver={(e) => handleOnDragOver(e, i)}
            onDrop={() => handleDropElement()}
            onClick={() =>
              dispatch(setSelectedElement({ layout: layout, index: i }))
            }
          >
            {(getElementComponent(layout?.[i] as any) as any) ??
              "Drag element here"}
          </div>
        ))}

        {selectedElement?.layout?.id === layout?.id && (
          <div className="absolute -right-10 flex flex-col gap-2">
            <div
              className="bg-red-100 hover:bg-red-200 p-2 rounded-full cursor-pointer hover:scale-105 trasnsition-all duration-75 hover:shadow-md"
              title="delete column"
            >
              <Trash
                className="h-4 w-4 text-red-600"
                onClick={() => handleDeleteColumn(layout.id)}
              />
            </div>
            <div
              className="bg-purple-100 hover:bg-purple-200 p-2 rounded-full cursor-pointer hover:scale-105 trasnsition-all duration-75 hover:shadow-md"
              title="move column up"
            >
              <ArrowUp
                className="h-4 w-4 text-purple-700"
                onClick={() => handleMoveColumn(layout.id, "up")}
              />
            </div>
            <div
              className="bg-purple-100 hover:bg-purple-200 p-2 rounded-full cursor-pointer hover:scale-105 trasnsition-all duration-75 hover:shadow-md"
              title="move column down"
            >
              <ArrowDown
                className="h-4 w-4 text-purple-700"
                onClick={() => handleMoveColumn(layout.id, "down")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Column;
