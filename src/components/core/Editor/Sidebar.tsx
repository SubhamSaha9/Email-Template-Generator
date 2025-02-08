"use client";
import Layout from "@/utils/Layout";
import React from "react";
import ElementCard from "./ElementCard";
import ElementList from "@/utils/ElementList";
import { LucideProps } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks";
import { setDragElementLayout } from "@/lib/slice/dragdropSlice";

interface LayoutProp {
  label: string;
  type: string;
  numOfCol: number;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const onLayoutDragStart = (layout: LayoutProp) => {
    dispatch(
      setDragElementLayout({
        dragLayout: { ...layout, id: Date.now(), icon: undefined },
      })
    );
  };

  const onElementDragStart = (element: any) => {
    dispatch(
      setDragElementLayout({
        dragElement: { ...element, id: Date.now(), icon: undefined },
      })
    );
  };
  return (
    <div className="p-5">
      <h2 className=" font-bold text-lg p-1 text-primary">Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {Layout.map((layout: LayoutProp, i: number) => (
          <div key={i} draggable onDragStart={() => onLayoutDragStart(layout)}>
            <ElementCard layout={layout} />
          </div>
        ))}
      </div>

      <h2 className=" font-bold text-lg p-1 mt-5 text-primary">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {ElementList.map((element, i) => (
          <div
            key={i}
            draggable
            onDragStart={() => onElementDragStart(element)}
          >
            <ElementCard layout={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
