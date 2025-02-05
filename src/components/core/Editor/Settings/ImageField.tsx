import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ImageField = ({
  label,
  value,
  onHandleInputChnage,
}: {
  label: string;
  value: string;
  onHandleInputChnage: any;
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <img
        src={value ? value : "/image.png"}
        alt="img"
        className="w-full h-[150px] object-cover border rounded-xl"
      />
      <Input
        value={value}
        onChange={(e) => onHandleInputChnage(e.target.value)}
        className="mt-2"
      />
    </div>
  );
};

export default ImageField;
