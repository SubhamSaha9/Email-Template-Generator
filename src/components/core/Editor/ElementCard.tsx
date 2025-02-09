import React from "react";

const ElementCard = ({ layout }: any) => {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded-xl p-3 group  cursor-pointer hover:border-primary hover:bg-gray-50 hover:shadow-md transition-all ease-in-out">
      {
        <layout.icon className="h-9 w-9 p-2 bg-gray-100 group-hover:bg-purple-100 group-hover:text-primary rounded-full transition-all ease-in-out delay-75" />
      }
      <h2 className=" text-sm group-hover:text-primary transition-all ease-in-out">
        {layout.label}
      </h2>
    </div>
  );
};

export default ElementCard;
